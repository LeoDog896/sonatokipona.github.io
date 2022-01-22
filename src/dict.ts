interface DictionaryEntry {
	word: string;
	meanings: string[][]
	translation?: string
}

const arr: DictionaryEntry[] = [
	{
	  "word": "a",
	  "meanings": [
		[
		  "interj",
		  "ah! ha! oh! ooh! aw! (emotion word)"
		]
	  ],
	  "translation": "emotion"
	},
	{
	  "word": "akesi",
	  "meanings": [
		[
		  "n",
		  "non-cute animal, reptile, amphibian, dinosaur, monster"
		]
	  ],
	  "translation": "non-cute animal"
	},
	{
	  "word": "ala",
	  "meanings": [
		[
		  "mod",
		  "no, not, none, un-"
		],
		[
		  "n",
		  "nothingness, negation, zero"
		],
		[
		  "interj",
		  "no!"
		]
	  ],
	  "translation": "not"
	},
	{
	  "word": "alasa",
	  "meanings": [
		[
		  "mod",
		  "hunting-, -hunting, hunting"
		],
		[
		  "n",
		  "hunting"
		],
		[
		  "vt",
		  "to hunt, to forage"
		]
	  ],
	  "translation": "hunt"
	},
	{
	  "word": "ale (ali)",
	  "meanings": [
		[
		  "n",
		  "everything, anything, life, the universe"
		],
		[
		  "mod",
		  "all, every, complete, whole"
		]
	  ],
	  "translation": "all"
	},
	{
	  "word": "anpa",
	  "meanings": [
		[
		  "n",
		  "bottom, down, under, below, floor, beneath"
		],
		[
		  "mod",
		  "low, lower, bottom"
		],
		[
		  "vt",
		  "lower, down, defeat, overcome"
		]
	  ],
	  "translation": "low"
	},
	{
	  "word": "ante",
	  "meanings": [
		[
		  "n",
		  "difference"
		],
		[
		  "mod",
		  "different"
		],
		[
		  "cont",
		  "otherwise, or else"
		],
		[
		  "vt",
		  "change, alter, modify"
		]
	  ],
	  "translation": "difference/otherwise"
	},
	{
	  "word": "anu",
	  "meanings": [
		[
		  "conj",
		  "or"
		]
	  ],
	  "translation": "or"
	},
	{
	  "word": "awen",
	  "meanings": [
		[
		  "vi",
		  "stay, wait, remain"
		],
		[
		  "vt",
		  "keep"
		],
		[
		  "mod",
		  "remaining, stationary, permanent, sedentary"
		]
	  ],
	  "translation": "stay"
	},
	{
	  "word": "e",
	  "meanings": [
		[
		  "sep",
		  "(introduces a direct object)"
		]
	  ],
	  "translation": "such"
	},
	{
	  "word": "en",
	  "meanings": [
		[
		  "conj",
		  "and (used to coordinate head nouns)"
		]
	  ],
	  "translation": "and"
	},
	{
	  "word": "esun",
	  "meanings": [
		[
		  "n",
		  "market, shop, fair, bazaar, business, transaction"
		],
		[
		  "mod",
		  "commercial, trade, marketable, for sale, salable, deductible"
		],
		[
		  "vt",
		  "to buy, to sell, to barter, to swap"
		]
	  ],
	  "translation": "shop"
	},
	{
	  "word": "ijo",
	  "meanings": [
		[
		  "n",
		  "thing, something, stuff, anything, object"
		],
		[
		  "mod",
		  "of something"
		],
		[
		  "vt",
		  "objectify"
		]
	  ],
	  "translation": "thing"
	},
	{
	  "word": "ike",
	  "meanings": [
		[
		  "mod",
		  "bad, evil, wrong, evil, overly complex, (figuratively) unhealthy"
		],
		[
		  "interj",
		  "oh dear! woe! alas!"
		],
		[
		  "n",
		  "negativity, evil, badness"
		],
		[
		  "vt",
		  "to make bad, to worsen, to have a negative effect upon"
		],
		[
		  "vi",
		  "to be bad, to suck"
		]
	  ],
	  "translation": "bad"
	},
	{
	  "word": "ilo",
	  "meanings": [
		[
		  "n",
		  "tool, device, machine, thing used for a specific purpose"
		]
	  ],
	  "translation": "tool"
	},
	{
	  "word": "insa",
	  "meanings": [
		[
		  "n",
		  "inside, inner world, centre, stomach"
		],
		[
		  "mod",
		  "internal, central"
		]
	  ],
	  "translation": "tool"
	},
	{
	  "word": "jaki",
	  "meanings": [
		[
		  "mod",
		  "dirty, gross, filthy"
		],
		[
		  "n",
		  "dirt, pollution, filth"
		],
		[
		  "vt",
		  "pollute, dirty"
		],
		[
		  "interj",
		  "ew! yuck!"
		]
	  ],
	  "translation": "gross"
	},
	{
	  "word": "jan",
	  "meanings": [
		[
		  "n",
		  "person, people, human, being, somebody, anybody"
		],
		[
		  "mod",
		  "personal, human, somebody's, of people"
		],
		[
		  "vt",
		  "personify, humanize, personalize"
		]
	  ],
	  "translation": "person"
	},
	{
	  "word": "jelo",
	  "meanings": [
		[
		  "mod",
		  "yellow, light green"
		]
	  ],
	  "translation": "yellow"
	},
	{
	  "word": "jo",
	  "meanings": [
		[
		  "vt",
		  "have, contain"
		],
		[
		  "n",
		  "having"
		],
		[
		  "kama",
		  "receive, get, take, obtain"
		]
	  ],
	  "translation": "have"
	},
	{
	  "word": "kala",
	  "meanings": [
		[
		  "n",
		  "fish, sea creature"
		]
	  ],
	  "translation": "sea creature"
	},
	{
	  "word": "kalama",
	  "meanings": [
		[
		  "n",
		  "sound, noise, voice"
		],
		[
		  "vi",
		  "make noise"
		],
		[
		  "vt",
		  "sound, ring, play (an instrument)"
		]
	  ],
	  "translation": "sound"
	},
	{
	  "word": "kama",
	  "meanings": [
		[
		  "n",
		  "event, happening, chance, arrival, beginning"
		],
		[
		  "mod",
		  "coming, future"
		],
		[
		  "vi",
		  "come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to"
		],
		[
		  "vt",
		  "bring about, summon"
		]
	  ],
	  "translation": "event"
	},
	{
	  "word": "kasi",
	  "meanings": [
		[
		  "n",
		  "plant, leaf, herb, tree, wood"
		]
	  ],
	  "translation": "plant"
	},
	{
	  "word": "ken",
	  "meanings": [
		[
		  "n",
		  "possibility, ability, power to do things, permission"
		],
		[
		  "vi",
		  "can, is able to, is allowed to, may, is possible"
		],
		[
		  "vt",
		  "make possible, enable, allow, permit"
		],
		[
		  "cont",
		  "it is possible that"
		]
	  ],
	  "translation": "permission"
	},
	{
	  "word": "kepeken",
	  "meanings": [
		[
		  "vt",
		  "use"
		],
		[
		  "prep",
		  "with"
		]
	  ],
	  "translation": "with"
	},
	{
	  "word": "kili",
	  "meanings": [
		[
		  "n",
		  "fruit, pulpy vegetable, mushroom"
		]
	  ],
	  "translation": "fruit"
	},
	{
	  "word": "kin",
	  "meanings": [
		[
		  "mod",
		  "also, too, still, really, even, indeed"
		],
		[
		  "interj*",
		  "really!, truly!, indeed!"
		],
		[
		  "cont*",
		  "moreover, indeed, in addition"
		]
	  ],
	  "translation": "too"
	},
	{
	  "word": "kipisi",
	  "meanings": [
		[
		  "n*",
		  "section, fragment, slice"
		],
		[
		  "vt*",
		  "to cut"
		]
	  ],
	  "translation": "cut"
	},
	{
	  "word": "kiwen",
	  "meanings": [
		[
		  "n",
		  "hard thing, rock, stone, metal, mineral, clay"
		],
		[
		  "mod",
		  "hard, solid, stone-like, made of stone or metal"
		]
	  ],
	  "translation": "hard"
	},
	{
	  "word": "ko",
	  "meanings": [
		[
		  "n",
		  "semi-solid or squishy substance; clay, dough, glue, paste, powder, gum"
		],
		[
		  "vt",
		  "to squash, to pulverize"
		]
	  ],
	  "translation": "squish"
	},
	{
	  "word": "kon",
	  "meanings": [
		[
		  "n",
		  "air, wind, odour, soul"
		],
		[
		  "mod",
		  "air-like, ethereal, gaseous"
		]
	  ],
	  "translation": "air"
	},
	{
	  "word": "kule",
	  "meanings": [
		[
		  "n",
		  "color, paint"
		],
		[
		  "vt",
		  "color, paint"
		],
		[
		  "mod",
		  "colourful"
		]
	  ],
	  "translation": "color"
	},
	{
	  "word": "kulupu",
	  "meanings": [
		[
		  "n",
		  "group, community, society, company"
		],
		[
		  "mod",
		  "communal, shared, public, of the society"
		]
	  ],
	  "translation": "community"
	},
	{
	  "word": "kute",
	  "meanings": [
		[
		  "vt",
		  "listen, hear"
		],
		[
		  "mod",
		  "auditory, hearing"
		]
	  ],
	  "translation": "hear"
	},
	{
	  "word": "la",
	  "meanings": [
		[
		  "sep",
		  "(between adverb or phrase of context and sentence)"
		]
	  ],
	  "translation": "it's said"
	},
	{
	  "word": "lape",
	  "meanings": [
		[
		  "n, vi",
		  "sleep, rest"
		],
		[
		  "mod",
		  "sleeping, of sleep"
		]
	  ],
	  "translation": "sleep"
	},
	{
	  "word": "laso",
	  "meanings": [
		[
		  "mod",
		  "blue, blue-green"
		]
	  ],
	  "translation": "blue"
	},
	{
	  "word": "lawa",
	  "meanings": [
		[
		  "n",
		  "head, mind"
		],
		[
		  "mod",
		  "main, leading, in charge"
		],
		[
		  "vt",
		  "lead, control, rule, steer"
		]
	  ],
	  "translation": "head"
	},
	{
	  "word": "len",
	  "meanings": [
		[
		  "n",
		  "clothing, cloth, fabric"
		]
	  ],
	  "translation": "clothing"
	},
	{
	  "word": "lete",
	  "meanings": [
		[
		  "n",
		  "cold"
		],
		[
		  "mod",
		  "cold, uncooked, raw"
		],
		[
		  "vt",
		  "cool down, chill, freeze"
		]
	  ],
	  "translation": "cold"
	},
	{
	  "word": "li",
	  "meanings": [
		[
		  "sep",
		  "(between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)"
		]
	  ],
	  "translation": "is"
	},
	{
	  "word": "lili",
	  "meanings": [
		[
		  "mod",
		  "small, little, young, a bit, short, fes, less"
		],
		[
		  "vt",
		  "reduce, shorten, shrink, lessen"
		]
	  ],
	  "translation": "small"
	},
	{
	  "word": "linja",
	  "meanings": [
		[
		  "n",
		  "long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain"
		]
	  ],
	  "translation": "very thin"
	},
	{
	  "word": "lipu",
	  "meanings": [
		[
		  "n",
		  "flat and bendable thing, e.g. paper, card, ticket"
		]
	  ],
	  "translation": "paper-like"
	},
	{
	  "word": "loje",
	  "meanings": [
		[
		  "mod",
		  "red"
		]
	  ],
	  "translation": "red"
	},
	{
	  "word": "lon",
	  "meanings": [
		[
		  "prep",
		  "be located in/at/on"
		],
		[
		  "vi",
		  "be there, be present, be real/true, exist, be awake"
		]
	  ],
	  "translation": "in/at/on"
	},
	{
	  "word": "luka",
	  "meanings": [
		[
		  "n",
		  "hand, arm"
		],
		[
		  "mod",
		  "five"
		]
	  ],
	  "translation": "arm"
	},
	{
	  "word": "lukin",
	  "meanings": [
		[
		  "vt",
		  "see, look at, watch, read"
		],
		[
		  "vi",
		  "look, watch out, pay attention"
		],
		[
		  "mod",
		  "visual, to seek to, try to, look for"
		]
	  ],
	  "translation": "see"
	},
	{
	  "word": "lupa",
	  "meanings": [
		[
		  "n",
		  "hole, orifice, window, door"
		]
	  ],
	  "translation": "orifice"
	},
	{
	  "word": "ma",
	  "meanings": [
		[
		  "n",
		  "land, earth, country, (outdoor) area"
		]
	  ],
	  "translation": "land"
	},
	{
	  "word": "mama",
	  "meanings": [
		[
		  "n",
		  "parent, mother, father"
		],
		[
		  "mod",
		  "of the parent, parental, maternal, fatherly"
		]
	  ],
	  "translation": "parent"
	},
	{
	  "word": "mani",
	  "meanings": [
		[
		  "n",
		  "money, material wealth, currency, dollar, capital"
		]
	  ],
	  "translation": "money"
	},
	{
	  "word": "meli",
	  "meanings": [
		[
		  "n",
		  "woman, female, girl, wife, girlfriend"
		],
		[
		  "mod",
		  "female, feminine, womanly"
		]
	  ],
	  "translation": "female"
	},
	{
	  "word": "mi",
	  "meanings": [
		[
		  "n",
		  "I, we"
		],
		[
		  "mod",
		  "my, our"
		]
	  ],
	  "translation": "I/we"
	},
	{
	  "word": "mije",
	  "meanings": [
		[
		  "n",
		  "man, male, husband, boyfriend"
		],
		[
		  "mod",
		  "male, masculine, manly"
		]
	  ],
	  "translation": "man"
	},
	{
	  "word": "moku",
	  "meanings": [
		[
		  "n",
		  "food, meal"
		],
		[
		  "vt",
		  "eat, drink, swallow, ingest, consume"
		]
	  ],
	  "translation": "food"
	},
	{
	  "word": "moli",
	  "meanings": [
		[
		  "n",
		  "death"
		],
		[
		  "mod",
		  "dead, deadly, fatal"
		],
		[
		  "vt",
		  "kill"
		],
		[
		  "vi",
		  "die, be dead"
		]
	  ],
	  "translation": "death"
	},
	{
	  "word": "monsi",
	  "meanings": [
		[
		  "n",
		  "back, rear end, butt, behind"
		],
		[
		  "mod",
		  "back, rear"
		]
	  ],
	  "translation": "back"
	},
	{
	  "word": "monsuta",
	  "meanings": [
		[
		  "n*",
		  "monster, monstrosity, fearful thing, fright, mythical creatures, fear"
		]
	  ],
	  "translation": "monster"
	},
	{
	  "word": "mu",
	  "meanings": [
		[
		  "interj",
		  "woof! meow! moo! etc. (cute animal noise)"
		]
	  ],
	  "translation": "cute animal noise"
	},
	{
	  "word": "mun",
	  "meanings": [
		[
		  "n",
		  "moon, night sky object"
		],
		[
		  "mod",
		  "lunar"
		]
	  ],
	  "translation": "moon"
	},
	{
	  "word": "musi",
	  "meanings": [
		[
		  "n",
		  "fun, playing, game, recreation, art, entertainment"
		],
		[
		  "mod",
		  "artful, fun, recreational"
		],
		[
		  "vi",
		  "play, have fun"
		],
		[
		  "vt",
		  "amuse, entertain"
		]
	  ],
	  "translation": "fun"
	},
	{
	  "word": "mute",
	  "meanings": [
		[
		  "mod",
		  "many, several, very, much, a lot, abundant, numerous, more"
		],
		[
		  "n",
		  "amount, quantity"
		],
		[
		  "vt",
		  "make many or much"
		]
	  ],
	  "translation": "many"
	},
	{
	  "word": "namako",
	  "meanings": [
		[
		  "n*",
		  "spice, something extra, food additive, accessory"
		],
		[
		  "vt*",
		  "to spice, to flavor, to decorate"
		],
		[
		  "mod*",
		  "spicy, piquant"
		]
	  ],
	  "translation": "spicy"
	},
	{
	  "word": "nanpa",
	  "meanings": [
		[
		  "n",
		  "number"
		],
		[
		  "oth",
		  "-th (ordinal numbers)"
		]
	  ],
	  "translation": "number"
	},
	{
	  "word": "nasa",
	  "meanings": [
		[
		  "mod",
		  "silly, crazy, foolish, drunk, strange, stupid, weird"
		],
		[
		  "vt",
		  "drive crazy, make weird"
		]
	  ],
	  "translation": "stupid"
	},
	{
	  "word": "nasin",
	  "meanings": [
		[
		  "n",
		  "way, manner, custom, road, path, doctrine, system, method"
		]
	  ]
	},
	{
	  "word": "nena",
	  "meanings": [
		[
		  "n",
		  "bump, hill, mountain, button, nose"
		]
	  ],
	  "translation": "bump"
	},
	{
	  "word": "ni",
	  "meanings": [
		[
		  "mod",
		  "this, that"
		]
	  ],
	  "translation": "this/that"
	},
	{
	  "word": "nimi",
	  "meanings": [
		[
		  "n",
		  "word, name"
		]
	  ],
	  "translation": "word"
	},
	{
	  "word": "noka",
	  "meanings": [
		[
		  "n",
		  "leg, foot"
		]
	  ],
	  "translation": "leg"
	},
	{
	  "word": "o",
	  "meanings": [
		[
		  "sep",
		  "O (vocative or imperative)"
		],
		[
		  "interj",
		  "hey! (calling somebody's attention)"
		]
	  ],
	  "translation": "hey!"
	},
	{
	  "word": "oko",
	  "meanings": [
		[
		  "n",
		  "eye"
		]
	  ],
	  "translation": "eye"
	},
	{
	  "word": "olin",
	  "meanings": [
		[
		  "n",
		  "love"
		],
		[
		  "mod",
		  "love"
		],
		[
		  "vt",
		  "to love (a person)"
		]
	  ],
	  "translation": "love"
	},
	{
	  "word": "ona",
	  "meanings": [
		[
		  "n",
		  "he, she, it, they"
		],
		[
		  "mod",
		  "his, her, its, their"
		]
	  ],
	  "translation": "it"
	},
	{
	  "word": "open",
	  "meanings": [
		[
		  "vt",
		  "open, turn on"
		]
	  ],
	  "translation": "open"
	},
	{
	  "word": "pakala",
	  "meanings": [
		[
		  "n",
		  "blunder, accident, mistake, destruction, damage, breaking"
		],
		[
		  "vt",
		  "screw up, fuck up, botch, ruin, break, hurt, injure, damage, bungle, spoil, ruin"
		],
		[
		  "vi",
		  "screw up, fall apart, break"
		],
		[
		  "interj",
		  "damn! fuck!"
		]
	  ],
	  "translation": "break"
	},
	{
	  "word": "pali",
	  "meanings": [
		[
		  "n",
		  "activity, work, deed, project"
		],
		[
		  "mod",
		  "active, work-related, operating, working"
		],
		[
		  "vt",
		  "do, make, build, create"
		],
		[
		  "vi",
		  "act, work, function"
		]
	  ],
	  "translation": "work"
	},
	{
	  "word": "palisa",
	  "meanings": [
		[
		  "n",
		  "long, mostly hard object, e.g. rod, stick, branch"
		]
	  ],
	  "translation": "rod-like"
	},
	{
	  "word": "pan",
	  "meanings": [
		[
		  "n",
		  "cereal, grain, barley, corn, oat, rice, wheat, bread, pasta"
		]
	  ],
	  "translation": "grain"
	},
	{
	  "word": "pana",
	  "meanings": [
		[
		  "vt",
		  "give, put, send, place, release, emit, cause"
		],
		[
		  "n",
		  "giving, transfer, exchange"
		]
	  ],
	  "translation": "give"
	},
	{
	  "word": "pi",
	  "meanings": [
		[
		  "sep",
		  "of, belonging to"
		]
	  ],
	  "translation": "of"
	},
	{
	  "word": "pilin",
	  "meanings": [
		[
		  "n",
		  "feelings, emotion, heart"
		],
		[
		  "vi",
		  "feel"
		],
		[
		  "vt",
		  "feel, think, sense, touch"
		]
	  ],
	  "translation": "feel"
	},
	{
	  "word": "pimeja",
	  "meanings": [
		[
		  "mod",
		  "black, dark"
		],
		[
		  "n",
		  "darkness, shadows"
		],
		[
		  "vt",
		  "darken"
		]
	  ],
	  "translation": "black"
	},
	{
	  "word": "pini",
	  "meanings": [
		[
		  "n",
		  "end, tip"
		],
		[
		  "mod",
		  "completed, finished, past, done, ago"
		],
		[
		  "vt",
		  "finish, close, end, turn off"
		]
	  ],
	  "translation": "end"
	},
	{
	  "word": "pipi",
	  "meanings": [
		[
		  "n",
		  "bug, insect, spider"
		]
	  ],
	  "translation": "bug"
	},
	{
	  "word": "poka",
	  "meanings": [
		[
		  "n",
		  "side, hip, next to"
		],
		[
		  "mod",
		  "neighboring"
		],
		[
		  "prep",
		  "in the accompaniment of, with"
		]
	  ],
	  "translation": "side"
	},
	{
	  "word": "poki",
	  "meanings": [
		[
		  "n",
		  "container, box, bowl, cup, glass"
		]
	  ],
	  "translation": "container"
	},
	{
	  "word": "pona",
	  "meanings": [
		[
		  "n",
		  "good, simplicity, positivity"
		],
		[
		  "mod",
		  "good, simple, positive, nice, correct, right"
		],
		[
		  "interj",
		  "great! good! thanks! OK! cool! yay!"
		],
		[
		  "vt",
		  "improve, fix, repair, make good"
		]
	  ],
	  "translation": "good"
	},
	{
	  "word": "pu",
	  "meanings": [
		[
		  "n",
		  "buying and interacting with the official Toki Pona book"
		],
		[
		  "mod",
		  "buying and interacting with the official Toki Pona book"
		],
		[
		  "vt",
		  "to apply (the official Toki Pona book) to…"
		],
		[
		  "vi",
		  "to buy and to read (the official Toki Pona book)"
		]
	  ],
	  "translation": "Official Toki Pona Book"
	},
	{
	  "word": "sama",
	  "meanings": [
		[
		  "mod",
		  "same, similar, equal, of equal status or position"
		],
		[
		  "prep",
		  "like, as, seem"
		],
		[
		  "cont",
		  "similarly, in the same way that"
		]
	  ],
	  "translation": "like"
	},
	{
	  "word": "seli",
	  "meanings": [
		[
		  "n",
		  "fire, warmth, heat"
		],
		[
		  "mod",
		  "hot, warm, cooked"
		],
		[
		  "vt",
		  "heat, warm up, cook"
		]
	  ],
	  "translation": "heat"
	},
	{
	  "word": "selo",
	  "meanings": [
		[
		  "n",
		  "outside, surface, skin, shell, bark, shape, peel"
		]
	  ],
	  "translation": "outside"
	},
	{
	  "word": "seme",
	  "meanings": [
		[
		  "oth",
		  "what, which, wh- (question word)"
		]
	  ],
	  "translation": "what"
	},
	{
	  "word": "sewi",
	  "meanings": [
		[
		  "n",
		  "high, up, above, top, over, on"
		],
		[
		  "mod",
		  "superior, elevated, religious, formal"
		]
	  ],
	  "translation": "up"
	},
	{
	  "word": "sijelo",
	  "meanings": [
		[
		  "n",
		  "body, physical state"
		]
	  ],
	  "translation": "body"
	},
	{
	  "word": "sike",
	  "meanings": [
		[
		  "n",
		  "circle, wheel, sphere, ball, cycle"
		],
		[
		  "mod",
		  "round, cyclical"
		]
	  ],
	  "translation": "circle"
	},
	{
	  "word": "sin",
	  "meanings": [
		[
		  "mod",
		  "new, fresh, another, more"
		],
		[
		  "vt",
		  "renew, renovate, freshen"
		]
	  ],
	  "translation": "new"
	},
	{
	  "word": "sina",
	  "meanings": [
		[
		  "n",
		  "you"
		],
		[
		  "mod",
		  "your"
		]
	  ],
	  "translation": "you"
	},
	{
	  "word": "sinpin",
	  "meanings": [
		[
		  "n",
		  "front, chest, torso, wall"
		]
	  ],
	  "translation": "front"
	},
	{
	  "word": "sitelen",
	  "meanings": [
		[
		  "n",
		  "picture, image"
		],
		[
		  "vt",
		  "draw, write"
		]
	  ],
	  "translation": "image/draw"
	},
	{
	  "word": "sona",
	  "meanings": [
		[
		  "n",
		  "knowledge, wisdom, intelligence, understanding"
		],
		[
		  "vt",
		  "know, understand, know how to"
		],
		[
		  "vi",
		  "know, understand"
		],
		[
		  "kama",
		  "learn, study"
		]
	  ],
	  "translation": "knowledge"
	},
	{
	  "word": "soweli",
	  "meanings": [
		[
		  "n",
		  "animal, especially land mammal, lovable animal"
		]
	  ],
	  "translation": "(land?) animal"
	},
	{
	  "word": "suli",
	  "meanings": [
		[
		  "mod",
		  "big, tall, long, adult, important"
		],
		[
		  "vt",
		  "enlarge, lengthen"
		],
		[
		  "n",
		  "size"
		]
	  ],
	  "translation": "big"
	},
	{
	  "word": "suno",
	  "meanings": [
		[
		  "n",
		  "sun, light"
		]
	  ],
	  "translation": "sun"
	},
	{
	  "word": "supa",
	  "meanings": [
		[
		  "n",
		  "horizontal surface, e.g. furniture, table, chair, pillow, floor"
		]
	  ],
	  "translation": "horizontal surface"
	},
	{
	  "word": "suwi",
	  "meanings": [
		[
		  "n",
		  "candy, sweet food"
		],
		[
		  "mod",
		  "sweet, cute"
		],
		[
		  "vt",
		  "sweeten"
		]
	  ],
	  "translation": "sweet"
	},
	{
	  "word": "tan",
	  "meanings": [
		[
		  "prep",
		  "from, by, because of, since"
		],
		[
		  "n",
		  "origin, cause"
		]
	  ],
	  "translation": "because"
	},
	{
	  "word": "taso",
	  "meanings": [
		[
		  "mod",
		  "only, sole"
		],
		[
		  "conj",
		  "but"
		]
	  ],
	  "translation": "but"
	},
	{
	  "word": "tawa",
	  "meanings": [
		[
		  "prep",
		  "to, in order to, towards, for, until"
		],
		[
		  "n",
		  "movement, transportation"
		],
		[
		  "mod",
		  "moving, mobile"
		],
		[
		  "vi",
		  "go, leave, walk, travel, move"
		],
		[
		  "vt",
		  "move, displace"
		]
	  ],
	  "translation": "towards"
	},
	{
	  "word": "telo",
	  "meanings": [
		[
		  "n",
		  "water, liquid, juice, sauce"
		],
		[
		  "vt",
		  "water, wash with water"
		]
	  ],
	  "translation": "water"
	},
	{
	  "word": "tenpo",
	  "meanings": [
		[
		  "n",
		  "time, period of time, moment, duration, situation"
		]
	  ],
	  "translation": "time"
	},
	{
	  "word": "toki",
	  "meanings": [
		[
		  "n",
		  "language, talking, speech, communication"
		],
		[
		  "vt",
		  "say"
		],
		[
		  "vi",
		  "talk, chat, communicate"
		],
		[
		  "interj",
		  "hello! hi!"
		]
	  ],
	  "translation": "Hello!/Language"
	},
	{
	  "word": "tomo",
	  "meanings": [
		[
		  "n",
		  "indoor constructed space, e.g. house, home, room, building"
		],
		[
		  "mod",
		  "urban, domestic, household"
		]
	  ],
	  "translation": "home"
	},
	{
	  "word": "tonsi",
	  "meanings": [
		[
		  "mod*",
		  "queer, non-binary, gender non-conforming"
		]
	  ],
	  "translation": "gender non-confirming"
	},
	{
	  "word": "tu",
	  "meanings": [
		[
		  "mod",
		  "two"
		],
		[
		  "n",
		  "duo, pair"
		],
		[
		  "vt",
		  "double, separate/cut/divide in two"
		]
	  ],
	  "translation": "two"
	},
	{
	  "word": "unpa",
	  "meanings": [
		[
		  "n",
		  "sex, sexuality"
		],
		[
		  "mod",
		  "erotic, sexual"
		],
		[
		  "vt",
		  "have sex with, sleep with, fuck"
		],
		[
		  "vi",
		  "have sex"
		]
	  ],
	  "translation": "sex"
	},
	{
	  "word": "uta",
	  "meanings": [
		[
		  "n",
		  "mouth"
		],
		[
		  "mod",
		  "oral"
		]
	  ],
	  "translation": "mouth"
	},
	{
	  "word": "utala",
	  "meanings": [
		[
		  "n",
		  "conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence"
		],
		[
		  "vt",
		  "hit, strike, attack, compete against"
		]
	  ],
	  "translation": "conflict"
	},
	{
	  "word": "walo",
	  "meanings": [
		[
		  "mod",
		  "white, light (colour)"
		],
		[
		  "n",
		  "white thing/part, whiteness, lightness"
		]
	  ],
	  "translation": "white"
	},
	{
	  "word": "wan",
	  "meanings": [
		[
		  "mod",
		  "one, a"
		],
		[
		  "n",
		  "unit, element, particle, part, piece"
		],
		[
		  "vt",
		  "unite, make one"
		]
	  ],
	  "translation": "one"
	},
	{
	  "word": "waso",
	  "meanings": [
		[
		  "n",
		  "bird, winged animal"
		]
	  ],
	  "translation": "winged animal"
	},
	{
	  "word": "wawa",
	  "meanings": [
		[
		  "n",
		  "energy, strength, power"
		],
		[
		  "mod",
		  "energetic, strong, fierce, intense, sure, confident"
		],
		[
		  "vt",
		  "strengthen, energize, empower"
		]
	  ],
	  "translation": "power"
	},
	{
	  "word": "weka",
	  "meanings": [
		[
		  "mod",
		  "away, absent, missing"
		],
		[
		  "n",
		  "absence"
		],
		[
		  "vt",
		  "throw away, remove, get rid of"
		]
	  ],
	  "translation": "absent"
	},
	{
	  "word": "wile",
	  "meanings": [
		[
		  "vt",
		  "to want, need, wish, have to, must, will, should"
		],
		[
		  "n",
		  "desire, need, will"
		],
		[
		  "mod",
		  "necessary"
		]
	  ],
	  "translation": "want/need"
	}
  ]

  export default arr;