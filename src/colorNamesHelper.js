const adjectives = `attractive
bald
beautiful
chubby
clean
dazzling
drab
elegant
fancy
fit
flabby
glamorous
gorgeous
handsome
long
magnificent
muscular
plain
plump
quaint
scruffy
shapely
short
skinny
stocky
ugly
unkempt
unsightly
alive
better
careful
clever
dead
easy
famous
gifted
hallowed
helpful
important
inexpensive
mealy
mushy
odd
poor
powerful
rich
shy
tender
unimportant
uninterested
vast
wrong
aggressive
agreeable
ambitious
brave
calm
delightful
eager
faithful
gentle
happy
jolly
kind
lively
nice
obedient
polite
proud
silly
thankful
victorious
witty
wonderful
zealous
angry
bewildered
clumsy
defeated
embarrassed
fierce
grumpy
helpless
itchy
jealous
lazy
mysterious
nervous
obnoxious
panicky
pitiful
repulsive
scary
thoughtless
uptight
worried
awkward
baffling
amusing
blundering
comical
cranky
cheeky
ditsy
dramatic
dopey
enigmatic
evasive
flaky
frivolous
giddy
gawkish
gallant
noble
hapless
hypnotic
huffy
impulsive
inquisitive
jocular
jovial
judicious
jesting
knotty
knavish
ludicrous
mischievous
merry
mystified
nonchalant
nifty
nimble
oblique
ostentatious
plucky
puerile
quirky
quiant
quivering
rowdy
rustic
roving
tantalizing
tiresome
unruly
unabashed
unorthodox
vivacious
vague
verbose
wacky
wistful
zany
`;


const nouns = `Actor	Gold	Painting
Advertisement	Grass	Parrot
Afternoon	Greece	Pencil
Airport	Guitar	Piano
Ambulance	Hair	Pillow
Animal	Hamburger	Pizza
Answer	Helicopter	Planet
Apple	Helmet	Plastic
Army	Holiday	Portugal
Agriculture	Honey	Potato
Balloon	Horse	Queen
Banana	Hospital	Quill
Battery	House	Rain
Beach	Hydrogen	Rainbow
Beard	Ice	Raincoat
Bed	Insect	Refrigerator
Belgium	Insurance	Restaurant
Boy	Iron	River
Branch	Island	Rocket
Breakfast	Jackal	Room
Brother	Jelly	Rose
Camera	Jewellery	Russia
Candle	Jordan	Sandwich
Car	Juice	School
Caravan	Kangaroo	Scooter
Carpet	King	Shampoo
Cartoon	Kitchen	Shoe
Chart	Kite	Soccer
Church	Knife	Spoon
Crayon	Lamp	Stone
Crowd	Lawyer	Sugar
Daughter	Leather	Desk
Death	Library	Teacher
Denmark	Lighter	Telephone
Diamond	Lion	Television
Dinner	Lizard	Tent
Disease	Lock	Thailand
Doctor	London	Tomato
Dog	Lunch	Toothbrush
Dream	Machine	Traffic
Dress	Magazine	Train
Easter	Magician	Truck
Egg	Manchester	Camp
Eggplant	Market	Umbrella
Evaluation	Match	Van
Elephant	Microphone	Vase
Energy	Monkey	Vegetable
Engine	Morning	Vulture
Entropy	Motorcycle	Wall
Evening	Nail	Whale
Eye	Napkin	Window
Family	Needle	Wire
Finland	Nest	Xylophone
Fish	Nigeria	Yacht
Flag	Night	Yak
Flower	Notebook	Zebra
Football	Ocean	Zoo
Forest	Oil	Garden
Fountain	Orange	Gas
France	Oxygen	Geode
Furniture	Oyster	Glass
Garage	Ghost   Grape
Mixer   Guesser Party
Board   Museum  Mug
Grains  Submarine   Clouds
Spoon   Toaster Vehicle
Stool   Stamina Glory
Handle  Climber Snack
Void    Absence Idea
`;

const nounsArray = (nouns.replace(/\s/g, ' ')
    .split(' '))   
    .filter(noun => noun !== ' ')
    .filter(noun => noun !== '');
const adjArray = adjectives.replace(/\s/g, ' ')
    .split(' ')
    .map( str => str.charAt(0).toUpperCase() + str.slice(1))
    .filter(str => str.trim().length > 1);
export { nounsArray, adjArray };
