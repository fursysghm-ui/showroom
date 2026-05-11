import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { zoneName } = await req.json()

    const kakaoAppKey = Deno.env.get('KAKAO_APP_KEY')
    const kakaoRefreshToken = Deno.env.get('KAKAO_REFRESH_TOKEN')

    if (!kakaoAppKey || !kakaoRefreshToken) {
      throw new Error('Kakao credentials not configured')
    }

    // 액세스 토큰 갱신
    const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: kakaoAppKey,
        refresh_token: kakaoRefreshToken,
      }).toString(),
    })

    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) {
      throw new Error(`Token refresh failed: ${JSON.stringify(tokenData)}`)
    }

    // 직원 카카오톡 "나와의 채팅"으로 메시지 전송
    const messageText = zoneName
      ? `🔔 직원 호출\n\n${zoneName}에서 방문객이 호출했습니다.\n\n📍 퍼시스 비즈니스 허브 여의도`
      : `🔔 직원 호출\n\n쇼룸에서 방문객이 직원을 호출했습니다.\n\n📍 퍼시스 비즈니스 허브 여의도`

    const msgRes = await fetch('https://kapi.kakao.com/v2/api/talk/memo/default/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        template_object: JSON.stringify({
          object_type: 'text',
          text: messageText,
          link: { mobile_web_url: '', web_url: '' },
        }),
      }).toString(),
    })

    const msgResult = await msgRes.json()
    const ok = msgResult.result_code === 0

    return new Response(JSON.stringify({ ok }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
