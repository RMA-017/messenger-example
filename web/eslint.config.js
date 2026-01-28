export default [
    {
        rules: {                                                                  /// Bu qoidalar barcha JS fayllarga taalluqli.
            'no-unused-vars': 'warn',                                             /// Ishlatilmagan o‘zgaruvchilarni topadi     
            'no-unused-expressions': ['warn', { 'allowShortCircuit': true }],     /// Natijasi ishlatilmaydigan expression’larni taqiqlaydi
            'prefer-const': 'warn',                                               /// O‘zgarmaydigan letni constga o‘zgartir deydi 
            'quotes': ['warn', 'single'],                                         /// Bir xil qo‘shtirnoq ishlatishni majbur qiladi
            'no-duplicate-imports': 'warn',                                       /// Bir faylda bir modulni ikki marta import qilishni taqiqlaydi
            'prefer-arrow-callback': 'warn',                                      /// Oddiy callback’lar o‘rniga arrow function ishlatishni tavsiya qiladi
            'no-prototype-builtins': 'warn',                                      /// hasOwnProperty kabi methodlarni to‘g‘ridan-to‘g‘ri chaqirishni taqiqlaydi
            'curly': 'warn',                                                      /// if, for kabi joylarda {} majburiy qiladi
            'arrow-spacing': 'warn',                                              /// Arrow function atrofida bo‘sh joy bo‘lishini tekshiradi
            'eqeqeq': 'warn',                                                     /// == o‘rniga === ishlatishni majbur qiladi
            'indent': ['warn', 4],                                                /// Kod 4 space bilan yozilishini majbur qiladi
        }
    }
]