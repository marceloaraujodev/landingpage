const reviewsData = [
    {
        "author_name": "Elisangela Sobrinho",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Na Loja de Brusque o atendimento é excelente, a vendedora Tai me esclareceu todas as dúvidas para assim fazer uma compra consciente. Recomendo com certeza.",
    },
    {
        "author_name": "Rian Felipe Izabel dos Santos",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Excelente atendimento! Ambiente limpo e organizado, com variedade de produtos!",
    },
    {
        "author_name": "Marcia silva",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Gostaria de agradecer pelo excelente atendimento que recebi e por ter resolvido meu problema com rapidez e eficiência",
    },
    {
        "author_name": "Paulo Mattheus Pintos",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Muito bem atendido , melhores preços da cidade de Brusque recomendo",
    },
    {
        "author_name": "Fabricio Busatta",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Ótimo atendimento, fui muito bem recebido pela Tai que esclareceu todas as minhas dúvidas, e a qualidade dos colchões é excepcional! Com certeza farei negócio novamente!",
    },
    {
        "author_name": "Dayane Abdala",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Atendimento excelente, produto é maravilhoso!! Recomendo!",
    },
    {
        "author_name": "Robertinho Uhlmann",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Muito ótima  .ótimo atendimento .local excelente",
    },
    {
        "author_name": "Rodrigo Dagostini",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Atendimento maravilhoso! Chegou tudo no prazo correto e os produtos são de excelente qualidade! Nota 10! Comprem com eles, pois não irão se arrepender!",
    },
    {
        "author_name": "Pedro Cajado",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Vendedora sanou todas as informações e dúvidas refente ao produto colchão stress light Oxi,o que fez com que o escolhêssemos ! Atendimento personalizado! Super recomendo!!!",
    },
    {
        "author_name": "Mariana Cavichioli",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Atendimento maravilhoso, produto de qualidade! Super recomendo",
    },
    {
        "author_name": "Alessandra Squine",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Excelente atendimento, colchões de qualidade",
    },
    {
        "author_name": "Juliana Dal Forno",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Ótimo atendimento, entrega rápida e produto de excelente qualidade! Super recomendo!",
    },
    {
        "author_name": "Andre Felipe Knobloch",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Ótimo atendimento."
    },
    {
        "author_name": "Edésio Gilli",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Excelente atendimento. Excelente produto.",
    },
    {
        "author_name": "Madruga Schafer",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "Atentimento top, produto de qualidade, entrega no combinado, preço justo.",
    },
    {
        "author_name": "Neusa Fedrigo",
        "author_url": "https://www.google.com/maps/contrib/104730994336423183377/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJKZ0cUg1yRE4cqkcUpz9Sc6WJUcSIUr0zn0GXMhbki_9pM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "text": "A atendente esclareceu todas minhas dúvidas, entrega rápida",
    },
]

export default reviewsData;