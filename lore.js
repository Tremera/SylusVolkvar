// Lore entries for the site. Edit freely.
// secret: true  → blacked out until the visitor flips him to wolf mode.
// group: places | past | habits | people

var LORE = [
  // ---------- PLACES ----------
  {
    group: "places",
    title: "Seattle",
    text: "Rain eight months a year, wet asphalt and neon, ferry horns on Elliott Bay, a coffee shop on every corner. It's also Dan Delruse's city. In certain rooms, the names Delruse and Volkvar make people go quiet."
  },
  {
    group: "places",
    title: "Cascadia University",
    text: "A private university on Capitol Hill. Ara studies cybersecurity. Sylus is a Business major: he goes to class (mostly), passes everything with zero visible effort, and drives his sister up the wall doing it. On campus he's the giant friendly Russian guy everybody knows."
  },
  {
    group: "places",
    title: "The apartment",
    text: "A top-floor two-bedroom on Capitol Hill. Ara's room is monitors, cables, paint and books. Sylus's room is a bed too big for the space and a punching bag. The couch is eight inches too short for him, and he sleeps on it anyway. The kitchen counter is energy drinks and cereal bowls. Borscht rules all of it."
  },
  {
    group: "places",
    title: "The building",
    secret: true,
    text: "The Volkvars quietly own it. The doorman is one of theirs, and so is the guy who's always fixing the same lobby light."
  },
  {
    group: "places",
    title: "The Low Tide",
    text: "A narrow dive bar off Pike Street: blue neon over the door, sticky floors, very good fries. It's where you hid in the bathroom and called Ara, and got Sylus instead. He calls it \"our bar\" now."
  },
  {
    group: "places",
    title: "Sever Auto Imports",
    text: "A garage in SoDo that imports car and motorcycle parts. Concrete, rock music, grease, two silent Russian mechanics and a coffee machine older than Sylus. It's how he gets Ara the parts for her Kawasaki."
  },
  {
    group: "places",
    title: "What else comes through the garage",
    secret: true,
    text: "Not just parts. Ask him and he'll rub the back of his neck and tell you it's vegetables."
  },
  {
    group: "places",
    title: "The house outside Moscow",
    text: "Where he and Ara grew up from 11 and 12: loud, loving and safe. Every first cold Sunday, Babushka sat the whole family at one long table to fold five hundred pelmeni. One in every batch was \"the lucky one,\" stuffed with black pepper. He still gets homesick talking about it."
  },

  // ---------- THE FAMILY ----------
  {
    group: "past",
    title: "Volkvar, not Delruse",
    text: "He and Ara were born Delruse. They took their uncle's name when he took them to Moscow, and neither of them has looked back. Call him Delruse and watch him flinch."
  },
  {
    group: "past",
    title: "The stairs",
    secret: true,
    text: "Their mother died when Ara was 12 and Sylus was 11. Soon after, Ara was kidnapped. Sylus sat on the stairs and listened to their father haggle her ransom down like he was buying a car. She came home missing a finger. Their uncle flew in, handled it his way and took them both to Russia. Sylus has spent every year since making sure he'll never be that small again."
  },
  {
    group: "past",
    title: "Dan wants his son",
    secret: true,
    text: "Dan ignored Ara her whole life. Now he wants his only son as his heir: gifts, cars, Sunday-dinner invitations, men in good suits at the door. Sylus sends all of it back. The only thing keeping him from doing something about Dan is his uncle's standing order: \"Don't.\""
  },
  {
    group: "past",
    title: "Off limits",
    text: "At her birthday dinner, Ara pointed a fork at him and said, \"Off limits, durak. I mean it.\" She meant you. He takes it seriously. He'd honestly rather face Dan than his sister."
  },
  {
    group: "past",
    title: "Ara's sleeve",
    secret: true,
    text: "Ara's right arm is a full night sky with their mother's name hidden in the stars. She keeps it covered because it's a dead giveaway of who she is. If it ever shows in public, Sylus drops his jacket over her shoulders without a word."
  },

  // ---------- HIS THINGS ----------
  {
    group: "habits",
    title: "The Charger",
    text: "A black 1969 Dodge Charger he restored almost entirely by hand. It's loud enough to set off car alarms, and everyone on Capitol Hill knows the sound. Nobody else has ever driven it. If he hands you the keys, that means more than a confession."
  },
  {
    group: "habits",
    title: "The ink",
    text: "Both arms, shoulder to wrist: a double-headed eagle, onion-dome cathedrals, and a wolf hidden somewhere in the mess. Ask what they mean and he'll say \"This one means I like churches.\" He'll let you trace them, though."
  },
  {
    group: "habits",
    title: "What the ink means",
    secret: true,
    text: "Some of it is Bratva ink, and it tells anyone who can read it exactly whose family he belongs to."
  },
  {
    group: "habits",
    title: "Russian, mostly swearing",
    text: "He swears in Russian and apologizes in English. Durak: idiot (what Ara calls him). Sestrichka: little sister (what he calls Ara, who is older, purely to annoy her). Shchenok: puppy (what his uncle calls him). Tolstyak: fatso (for the cat). There are a few sweeter words he refuses to translate."
  },
  {
    group: "habits",
    title: "Tells",
    text: "He rubs the back of his neck when he lies. He cracks his neck before a fight. And when he's truly furious he stops talking and smiles."
  },
  {
    group: "habits",
    title: "When someone threatens his people",
    secret: true,
    text: "He goes quiet. The smile stays, but nothing behind it does. It's over fast, with no hesitation and no regret. Then he turns around and asks who wants pancakes, and somehow that's the scariest part."
  },
  {
    group: "habits",
    title: "Food",
    text: "He can cook eggs and blini, and that's it (the blini are excellent). He eats pelmeni with an alarming amount of smetana and is always feeding people: bar fries, 2 a.m. takeout, anything to make sure Ara and you have eaten."
  },

  // ---------- PEOPLE ----------
  {
    group: "people",
    title: "Ara",
    text: "His older sister by 10 months, and your friend. Tiny, sharp, bratty, a cybersecurity genius who forgets to eat and sleep. She calls him spoiled and unambitious every single day. He worships her and takes it like a happy puppy. Insult her yourself and you'll meet a very different Sylus."
  },
  {
    group: "people",
    title: "Nikolus",
    text: "Their uncle in Moscow, gray-bearded and huge-handed: \"the Wolf.\" He answers every call on the second ring, and his first question is always \"Who do I need to bury?\" Sylus calls him every Sunday."
  },
  {
    group: "people",
    title: "Viktor",
    text: "Their cousin in Moscow and Sylus's best friend. Cold, precise and dry, the only person who can out-stubborn Ara. Their texts are mostly Viktor's one-word replies and Sylus's dog photos."
  },
  {
    group: "people",
    title: "Borscht",
    text: "Eighteen pounds of orange cat. Technically Ara's, but he sleeps on Sylus's chest every night. Sylus pretends to be annoyed and secretly buys him salmon. If Borscht likes you, Sylus takes it as a sign."
  },
  {
    group: "people",
    title: "Enzo Ricci",
    secret: true,
    text: "The man at the bar. He works for Dan and collects at his clubs. On his way out, he looked back, not at Sylus but at you, like he was memorizing your face. Sylus doesn't believe in coincidences."
  }
];

// Ara's house rules on the fridge.
// broken: true → already stamped BROKEN when the page loads.
var RULES = [
  { rule: "Don't answer my phone.", reply: "it was an EMERGENCY", broken: true },
  { rule: "Borscht is on a diet. No salmon.", reply: "he is big boned", broken: true },
  { rule: "No dogs. Not even \"just for one night.\"", reply: "Biscuit was ONE night", broken: true },
  { rule: "Eat something that isn't cereal.", reply: "you first, sestrichka" },
  { rule: "Duck under the doorframe.", reply: "the doorframe started it", broken: true },
  { rule: "Do NOT go near Dan. Dyadya's orders.", reply: "...ok" },
  { rule: "My friends are OFF LIMITS.", reply: "define off limits" }
];
