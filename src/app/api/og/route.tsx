import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Sviluppo Siti Web';
  const subtitle = searchParams.get('subtitle') || 'Manuel De Ceglie';
  const badge = searchParams.get('badge') || 'Web Developer';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 24px',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#22c55e',
              marginRight: '12px',
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              background: 'linear-gradient(to right, #ffffff, #a3a3a3)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#a3a3a3',
              lineHeight: 1.5,
              maxWidth: '800px',
            }}
          >
            {subtitle}
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
              fontSize: '24px',
              fontWeight: 900,
              color: '#000000',
            }}
          >
            M
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Manuel De Ceglie
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
