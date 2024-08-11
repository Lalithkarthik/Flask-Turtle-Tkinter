jsonData = `[{"serial":"1",
            "title":"Harry Potter and the Philosopher's Stone",
            "summary":"Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
            "release_date":"26 June 1997",
            "dedication":"For Jessica, who loves stories, for Anne, who loved them too, and for Di, who heard this one first",
            "pages":"223",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-1.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Philosopher's_Stone"},
            {"serial":"2",
            "title":"Harry Potter and the Chamber of Secrets",
            "summary":"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft And Wizardry for his second year, Harry hears strange whispers echo through empty corridors – and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.","release_date":"2 July 1998",
            "dedication":"For Séan P. F. Harris, getaway driver and foul-weather friend",
            "pages":"251",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-2.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Chamber_of_Secrets"},
            {"serial":"3",
            "title":"Harry Potter and the Prisoner of Azkaban",
            "summary":"When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run – and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.",
            "release_date":"8 July 1999",
            "dedication":"To Jill Prewett and Aine Kiely, the Godmothers of Swing",
            "pages":"317",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-3.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban"},
            {"serial":"4",
            "title":"Harry Potter and the Goblet of Fire",
            "summary":"The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter – but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through – alive!",
            "release_date":"8 July 2000",
            "dedication":"To Peter Rowling, in memory of Mr Ridley and to Susan Sladden, who helped Harry out of his cupboard",
            "pages":"636",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-4.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Goblet_of_Fire"},
            {"serial":"5",
            "title":"Harry Potter and the Order of the Phoenix",
            "summary":"Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret Order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.",
            "release_date":"21 June 2003",
            "dedication":"To Neil, Jessica and David, who make my world magical",
            "pages":"766",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-5.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Order_of_the_Phoenix"},
            {"serial":"6",
            "title":"Harry Potter and the Half-Blood Prince",
            "summary":"When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.","author":"J. K. Rowling","dedication":"To Mackenzie, My beautiful daughter, I dedicate Her ink-and-paper twin.",
            "pages":"607",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-6.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Half-Blood_Prince"},
            {"serial":"7",
            "title":"Harry Potter and the Deathly Hallows",
            "summary":"As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin – Harry must stand and face his enemy.",
            "author":"J. K. Rowling",
            "dedication":"To Neil, To Jessica, To David, To Kenzie, To Di, To Anne, And to You If you have stuck with Harry until the very end.",
            "pages":"610",
            "cover":"https://www.wizardingworld.com/images/products/books/UK/rectangle-7.jpg",
            "wiki":"https://harrypotter.fandom.com/wiki/Harry_Potter_and_the_Deathly_Hallows"}]`

let data = JSON.parse(jsonData);

document.getElementById('searchbar').addEventListener('input', search_books);

function search_books() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    if (obj.title.toLowerCase().includes(input) || obj.release_date.toLowerCase().includes(input) || obj.pages.toLowerCase().includes(input)) {
      const elem = document.createElement("li");
      elem.innerHTML = `Number chosen: ${i + 1}, Title: ${obj.title}, Release Date: ${obj.release_date}, Pages: ${obj.pages}`;
      x.appendChild(elem);
    }
  }
}
