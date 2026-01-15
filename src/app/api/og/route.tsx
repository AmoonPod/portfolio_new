import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Castelnovo ne\' Monti'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage:
              'linear-gradient(to bottom right, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 400,
                color: '#a0a0a0',
                marginBottom: 20,
                textAlign: 'center',
              }}
            >
              Sviluppo Siti Web a
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: 40,
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                color: '#666666',
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              Manuel De Ceglie
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}






