import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'ping-slow': {
					'75%, 100%': { transform: 'scale(2)', opacity: '0' },
				},
			},
			animation: {
				'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
			},
			colors: {
				surface: '#FAFAFA',
				sub: '#F4F4F5',
				ink: '#09090B',
				'ink-sub': '#71717A',
				accent: '#2563EB',
			},
			fontFamily: {
				sans: [
					'Pretendard',
					'-apple-system',
					'BlinkMacSystemFont',
					'system-ui',
					'Helvetica Neue',
					'Apple SD Gothic Neo',
					'sans-serif',
				],
				/** 코드·메타용: 별도 웹폰트 없이 OS 기본 고정폭 */
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Apple SD Gothic Neo',
					'monospace',
				],
			},
			/** 국내 웹앱에 가까운 prose-sm (본문 약 14px) */
			typography: {
				sm: {
					css: {
						fontSize: '0.875rem',
						lineHeight: '1.65',
						h1: { fontSize: '1.25rem', marginTop: '0', marginBottom: '0.65em' },
						h2: { fontSize: '1.125rem', marginTop: '1.5em', marginBottom: '0.5em' },
						h3: { fontSize: '1.0625rem', marginTop: '1.25em', marginBottom: '0.45em' },
						p: { marginTop: '0.65em', marginBottom: '0.65em' },
						li: { marginTop: '0.25em', marginBottom: '0.25em' },
						blockquote: { fontSize: '0.9375rem' },
						code: { fontSize: '0.8125em' },
						pre: { fontSize: '0.8125rem' },
					},
				},
			},
		},
	},
	plugins: [typography],
};
