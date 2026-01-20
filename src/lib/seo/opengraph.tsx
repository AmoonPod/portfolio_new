import { ImageResponse } from '@vercel/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export interface OgImageOptions {
  cityName: string;
  serviceName: string;
  province?: string;
  archetype?: string;
  offer?: string;
  price?: string;
}

const COLORS = {
  background: '#1a1a2e',
  text: '#ffffff',
  accent: '#e94560',
  secondary: '#0f3460',
  card: '#16213e',
};

async function getFontData(): Promise<ArrayBuffer> {
  try {
    const fontPath = join(process.cwd(), 'public', 'fonts', 'Inter-Bold.ttf');
    return await readFile(fontPath);
  } catch {
    return new ArrayBuffer(0);
  }
}

export function buildOgImageTitle(title: string, subtitle?: string): string {
  if (title.length > 40) {
    return title.substring(0, 40) + '...';
  }
  return title;
}

export async function generateLocalPageOgImage(
  options: OgImageOptions
): Promise<ImageResponse> {
  const { cityName, serviceName, province, archetype, offer, price } = options;
  
  const fontData = await getFontData();
  const hasFont = fontData.byteLength > 0;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.background,
          padding: '60px',
          fontFamily: hasFont ? 'Inter' : 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            {serviceName}
          </span>
          
          <h1
            style={{
              color: COLORS.text,
              fontSize: 80,
              fontWeight: 800,
              margin: 0,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            {cityName}
          </h1>
          
          {province && (
            <span
              style={{
                color: '#8892b0',
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              {province}
            </span>
          )}
          
          {archetype && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 24px',
                backgroundColor: COLORS.card,
                borderRadius: 8,
                marginBottom: 30,
              }}
            >
              <span style={{ color: COLORS.text, fontSize: 22 }}>
                {archetype}
              </span>
            </div>
          )}
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              marginTop: 20,
            }}
          >
            {offer && (
              <span style={{ color: COLORS.accent, fontSize: 32, fontWeight: 700 }}>
                {offer}
              </span>
            )}
            {price && (
              <span style={{ color: COLORS.text, fontSize: 48, fontWeight: 800 }}>
                {price}€
              </span>
            )}
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <span style={{ color: '#8892b0', fontSize: 24 }}>
            manueldeceglie.it
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: hasFont
        ? [
            {
              name: 'Inter',
              data: fontData,
              weight: 800,
              style: 'normal',
            },
            {
              name: 'Inter',
              data: fontData,
              weight: 600,
              style: 'normal',
            },
          ]
        : [],
    }
  );
}

export async function generateServiceOgImage(
  serviceName: string,
  tagline?: string
): Promise<ImageResponse> {
  const fontData = await getFontData();
  const hasFont = fontData.byteLength > 0;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.background,
          padding: '60px',
          fontFamily: hasFont ? 'Inter' : 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          <h1
            style={{
              color: COLORS.text,
              fontSize: 72,
              fontWeight: 800,
              margin: 0,
              marginBottom: 20,
            }}
          >
            {serviceName}
          </h1>
          
          {tagline && (
            <span
              style={{
                color: '#8892b0',
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              {tagline}
            </span>
          )}
          
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginTop: 40,
            }}
          >
            <div
              style={{
                padding: '16px 32px',
                backgroundColor: COLORS.accent,
                borderRadius: 8,
              }}
            >
              <span style={{ color: COLORS.text, fontSize: 24, fontWeight: 600 }}>
                Web Developer
              </span>
            </div>
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <span style={{ color: '#8892b0', fontSize: 24 }}>
            manueldeceglie.it
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: hasFont
        ? [
            {
              name: 'Inter',
              data: fontData,
              weight: 800,
              style: 'normal',
            },
          ]
        : [],
    }
  );
}

export function getOgImageUrl(
  citySlug: string,
  serviceSlug: string = 'siti-web'
): string {
  return `https://manueldeceglie.it/${serviceSlug}/${citySlug}/og-image.png`;
}
