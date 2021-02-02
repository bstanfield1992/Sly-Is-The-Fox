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

//var display = document.getElementById("foxfacts");
//var foxFacts = [

var randomfoxfact = []
randomfoxfact[0] = "Foxes are one of the most well known wild animals in the UK, they are native to Britain.";
randomfoxfact[1] = "The fox is a member of the dog family";
randomfoxfact[2] = "Foxes are a little bit bigger than a cat";
randomfoxfact[3] = "Foxes can live up to 14 years";
randomfoxfact[4] = "The latin name for fox is ‘Vulpes Vulpes’ ";
randomfoxfact[5] = "Foxes can live anywhere, in towns or the countryside";
randomfoxfact[6] = "A female fox is called a Vixen";
randomfoxfact[7] = "A male fox is called a Dog";
randomfoxfact[8] = "Foxes eat almost anything, including berries, worms, spiders and even jam sandwiches";
randomfoxfact[9] = "A fox’s home is called a den or an earth";
randomfoxfact[10] = "A baby fox is called a cub";
randomfoxfact[11] = "The fox is a distant relative of the wolf";
randomfoxfact[12] = "Foxes are mostly active at night";
randomfoxfact[13] = "Foxes hide food to eat later";
randomfoxfact[14] = "Foxes have amazing hearing, they can hear a watch ticking 40 yards (120 foot) away";
randomfoxfact[15] = "Foxes use 28 different types of calls to communicate with each other";
randomfoxfact[16] = "Most species of foxes are lone wolves. They hunt and sleep alone, but when they’re raising their young, the live in underground burrows. ";
randomfoxfact[17] = "If foxes are together, it’s called a ‘leash’ or a ‘skulk’ of foxes. ";
randomfoxfact[18] = "Even though foxes are related to wolves, jackals and dogs, they have more in common to cats. They’re most active at night, as they use their vertical pupils to see in the dark while stalking and pouncing on its prey like a cat. They also have whiskers and retractable claws. ";
randomfoxfact[19] = "Foxes also have whiskers on their legs. This helps them with their bearings, especially when it’s dark outside. ";
randomfoxfact[20] = "Besides using the whiskers on their legs, foxes also use Earth’s magnetic field to hunt their prey. Foxes leap up and pounce on their prey. They can leap in any direction, but they’re more likely to jump towards the northeast, where 72 of their attacks were successful. ";
randomfoxfact[21] = "If you can’t decide on having cat or a dog, you can have a fox as a pet. ";
randomfoxfact[22] = "Some foxes can hear objects that are 40 yards (36.5 meters) away. ";
randomfoxfact[23] = "Watch out: foxes can run up to 45 miles per hour (72 km/hour), making them one of the fastest animals in the world! ";
randomfoxfact[24] = "Even if you encounter a wild fox, they probably won’t eat you. Their omnivorous diet mainly consists of small rodents, small mammals, vegetation and birds. ";
randomfoxfact[25] = "Female foxes are pregnant for only 53 days, making women everywhere jealous of their gestation period. ";
randomfoxfact[26] = "Foxes can survive in the wild for about three years. In captivity, some foxes can live up to ten years. ";
randomfoxfact[27] = "Foxes are also prey to certain larger animals: eagles, coyotes, gray wolves, bears and mountain lions. ";
randomfoxfact[28] = "Because of their awesome fur, Arctic foxes can withstand temperatures as low as negative-70 degrees Celsius. That’s when the poor fellas start shivering. ";
randomfoxfact[29] = "Most foxes are like medium-sized dogs, with the biggest foxes weighing 24 pounds (11 kilograms) and measuring 34 inches (86 cm) without its tail. ";
randomfoxfact[30] = "What does the fox say? There are at least 40 different voices the fox can uses, but the most common is their scream. ";
randomfoxfact[31] = "Foxes are smelly! Yep, foxes stink. They have a sickly, musty scent that comes from the glands at the base of their tails. If you start smelling this around your home or in your crawl space, it may be an indicator that foxes are near. ";
randomfoxfact[32] = "Foxes have impeccable hearing! It’s reported that red foxes can hear a watch ticking from 40 yards away! Their impeccable hearing helps them to identify prey underground. What’s even more interesting is that foxes use the Earth’s magnetic field to locate their prey. That, in combination with their sensitive hearing, makes them pretty fierce predators. ";
randomfoxfact[33] = "Foxes are extremely playful! Foxes love to play. They’re even known to steal golf balls from golf courses to play with! Foxes play alone, with other foxes and other animals — even deer! If anything, it makes for some adorable backyard entertainment. ";
  
function randomfoxfact () {
   var foxfacts = Math.floor(Math.random()*(randomfoxfact.length));
//  document.getElementById('NEED ID NAME').innerhtml = randomfoxfact[foxfacts];
}




// console.log(foxFacts);



