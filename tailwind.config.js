import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            backgroundImage: {
                hero: "url('https://thegameexperts.com.au/cdn/shop/t/10/assets/body_bg_image.jpg?v=34183979267387787271641438928')",
            },
            fontFamily: {
                sans: ['Barlow', 'Times New Roman', ...defaultTheme.fontFamily.sans],
            },
            maxWidth: {
                maxW: '76.25rem',
            },
            backgroundColor: {
                search: '#e6e6e6',
            },
            colors: {
                blue: {
                    600: '#1477c6',
                },
            },
        },
    },

    plugins: [forms],
}
