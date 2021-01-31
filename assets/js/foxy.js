fetch('https://randomfox.ca/floof/')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    // console.log(response)
         var body = document.body;
    var fox = document.getElementById('foxImg');
    var image = response.image;
    var foxImgEl = document.createElement('img');
    body.appendChild(fox);
    foxImgEl.setAttribute('src', image);
    foxImgEl.setAttribute('class', 'fox-style')
    fox.appendChild(foxImgEl);
})

var foxFacts = [

    "Random Fox Fact! – Foxes are one of the most well known wild animals in the UK, they are native to Britain.",

    "Random Fox Fact! – The fox is a member of the dog family",
    
    "Random Fox Fact! – Foxes are a little bit bigger than a cat",
    
    "Random Fox Fact! – Foxes can live up to 14 years",
    
    "Random Fox Fact! – The latin name for fox is ‘Vulpes Vulpes’ ",
    
    "Random Fox Fact! – Foxes can live anywhere, in towns or the countryside",
    
    "Random Fox Fact! – A female fox is called a Vixen",
    
    "Random Fox Fact! – A male fox is called a Dog",
    
    "Random Fox Fact! – Foxes eat almost anything, including berries, worms, spiders and even jam sandwiches",
    
    "Random Fox Fact! – A fox’s home is called a den or an earth",
    
    "Random Fox Fact! – A baby fox is called a cub",
    
    "Random Fox Fact! – The fox is a distant relative of the wolf",
    
    "Random Fox Fact! – Foxes are mostly active at night",
    
    "Random Fox Fact! – Foxes hide food to eat later",
    
    "Random Fox Fact! – Foxes have amazing hearing, they can hear a watch ticking 40 yards (120 foot) away",
    
    "Random Fox Fact! – Foxes use 28 different types of calls to communicate with each other",
    
    "Random Fox Fact! – Most species of foxes are lone wolves. They hunt and sleep alone, but when they’re raising their young, the live in underground burrows. ",
    
    "Random Fox Fact! – If foxes are together, it’s called a ‘leash’ or a ‘skulk’ of foxes. ",
    
    "Random Fox Fact! – Even though foxes are related to wolves, jackals and dogs, they have more in common to cats. They’re most active at night, as they use their vertical pupils to see in the dark while stalking and pouncing on its prey like a cat. They also have whiskers and retractable claws. ",
    
    "Random Fox Fact! – Foxes also have whiskers on their legs. This helps them with their bearings, especially when it’s dark outside. ",
    
    "Random Fox Fact! – Besides using the whiskers on their legs, foxes also use Earth’s magnetic field to hunt their prey. Foxes leap up and pounce on their prey. They can leap in any direction, but they’re more likely to jump towards the northeast, where 72 of their attacks were successful. ",
    
    "Random Fox Fact! – If you can’t decide on having cat or a dog, you can have a fox as a pet. ",
    
    "Random Fox Fact! – Some foxes can hear objects that are 40 yards (36.5 meters) away. ",
    
    "Random Fox Fact! – Watch out: foxes can run up to 45 miles per hour (72 km/hour), making them one of the fastest animals in the world! ",
    
    "Random Fox Fact! – Even if you encounter a wild fox, they probably won’t eat you. Their omnivorous diet mainly consists of small rodents, small mammals, vegetation and birds. ",
    
    "Random Fox Fact! – Female foxes are pregnant for only 53 days, making women everywhere jealous of their gestation period. ",
    
    "Random Fox Fact! – Foxes can survive in the wild for about three years. In captivity, some foxes can live up to ten years. ",
    
    "Random Fox Fact! – Foxes are also prey to certain larger animals: eagles, coyotes, gray wolves, bears and mountain lions. ",
    
    "Random Fox Fact! – Because of their awesome fur, Arctic foxes can withstand temperatures as low as negative-70 degrees Celsius. That’s when the poor fellas start shivering. ",
    
    "Random Fox Fact! – Most foxes are like medium-sized dogs, with the biggest foxes weighing 24 pounds (11 kilograms) and measuring 34 inches (86 cm) without its tail. ",
    
    "Random Fox Fact! – What does the fox say? There are at least 40 different voices the fox can uses, but the most common is their scream. ",
    
    "Random Fox Fact! – Foxes are smelly! Yep, foxes stink. They have a sickly, musty scent that comes from the glands at the base of their tails. If you start smelling this around your home or in your crawl space, it may be an indicator that foxes are near. ",
    
    "Random Fox Fact! – Foxes have impeccable hearing! It’s reported that red foxes can hear a watch ticking from 40 yards away! Their impeccable hearing helps them to identify prey underground. What’s even more interesting is that foxes use the Earth’s magnetic field to locate their prey. That, in combination with their sensitive hearing, makes them pretty fierce predators. ",
    
    "Random Fox Fact! – Foxes are extremely playful! Foxes love to play. They’re even known to steal golf balls from golf courses to play with! Foxes play alone, with other foxes and other animals — even deer! If anything, it makes for some adorable backyard entertainment. ",
    
    "Random Fox Fact! – Grey foxes can retract their claws like cats do. ",
    
    
];

// console.log(foxFacts);