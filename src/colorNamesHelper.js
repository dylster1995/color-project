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
worried`;


const nouns = `Actor	Gold	Painting
Advertisement	Grass	Parrot
Afternoon	Greece	Pencil
Airport	Guitar	Piano
Ambulance	Hair	Pillow
Animal	Hamburger	Pizza
Answer	Helicopter	Planet
Apple	Helmet	Plastic
Army	Holiday	Portugal
Australia	Honey	Potato
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
China	Kite	Soccer
Church	Knife	Spoon
Crayon	Lamp	Stone
Crowd	Lawyer	Sugar
Daughter	Leather	Sweden
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
Egg	Manchester	Uganda
Eggplant	Market	Umbrella
Egypt	Match	Van
Elephant	Microphone	Vase
Energy	Monkey	Vegetable
Engine	Morning	Vulture
England	Motorcycle	Wall
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
France	Oxygen	Girl
Furniture	Oyster	Glass
Garage	Ghost`;

const nounsArray = (nouns.replace(/\s/g, ' ').split(' '));
const adjArray = adjectives.replace(/\s/g, ' ').split(' ').map( str => str.charAt(0).toUpperCase() + str.slice(1));

export { nounsArray, adjArray };
