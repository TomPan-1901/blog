/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{md,js,ts,vue}',
    './posts/*.{md,js,ts,vue}',
    './archives/*.{md,js,ts,vue}',
    './.vitepress/**/*.{md,js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

