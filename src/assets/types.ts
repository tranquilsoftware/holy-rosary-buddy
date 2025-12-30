export type MysteryType = 'Joyful' | 'Sorrowful' | 'Glorious' | 'Luminous';

export interface Mystery {
  name: string;
  verse: string;
  reference: string;
}

export interface Prayer {
  text: string;
  type: string;
  count?: number;
  decade?: number;
  beadNum?: number;
  verse?: string;
  reference?: string;
}

export const MYSTERY_VERSES: Record<MysteryType, Mystery[]> = {
  Joyful: [
    {
      name: 'The Annunciation',
      verse: 'Now in the sixth month the angel Gabriel was sent by God to a city of Galilee named Nazareth, to a virgin betrothed to a man whose name was Joseph, of the house of David. The virgin\'s name was Mary. And having come in, the angel said to her, "Rejoice, highly favored one, the Lord is with you; blessed are you among women!" But when she saw him, she was troubled at his saying, and considered what manner of greeting this was. Then the angel said to her, "Do not be afraid, Mary, for you have found favor with God. And behold, you will conceive in your womb and bring forth a Son, and shall call His name Jesus."',
      reference: 'Luke 1:26-31'
    },
    {
      name: 'The Visitation',
      verse: 'Now Mary arose in those days and went into the hill country with haste, to a city of Judah, and entered the house of Zacharias and greeted Elizabeth. And it happened, when Elizabeth heard the greeting of Mary, that the babe leaped in her womb; and Elizabeth was filled with the Holy Spirit. Then she spoke out with a loud voice and said, "Blessed are you among women, and blessed is the fruit of your womb! But why is this granted to me, that the mother of my Lord should come to me?"',
      reference: 'Luke 1:39-43'
    },
    {
      name: 'The Nativity',
      verse: 'And she brought forth her firstborn Son, and wrapped Him in swaddling cloths, and laid Him in a manger, because there was no room for them in the inn. Now there were in the same country shepherds living out in the fields, keeping watch over their flock by night. And behold, an angel of the Lord stood before them, and the glory of the Lord shone around them, and they were greatly afraid. Then the angel said to them, "Do not be afraid, for behold, I bring you good tidings of great joy which will be to all people. For there is born to you this day in the city of David a Savior, who is Christ the Lord."',
      reference: 'Luke 2:7-11'
    },
    {
      name: 'The Presentation',
      verse: 'Now when the days of her purification according to the law of Moses were completed, they brought Him to Jerusalem to present Him to the Lord (as it is written in the law of the Lord, "Every male who opens the womb shall be called holy to the Lord"), and to offer a sacrifice according to what is said in the law of the Lord, "A pair of turtledoves or two young pigeons." And behold, there was a man in Jerusalem whose name was Simeon, and this man was just and devout, waiting for the Consolation of Israel, and the Holy Spirit was upon him.',
      reference: 'Luke 2:22-25'
    },
    {
      name: 'The Finding in the Temple',
      verse: 'Now so it was that after three days they found Him in the temple, sitting in the midst of the teachers, both listening to them and asking them questions. And all who heard Him were astonished at His understanding and answers. So when they saw Him, they were amazed; and His mother said to Him, "Son, why have You done this to us? Look, Your father and I have sought You anxiously." And He said to them, "Why did you seek Me? Did you not know that I must be about My Father\'s business?"',
      reference: 'Luke 2:46-49'
    }
  ],
  Sorrowful: [
    {
      name: 'The Agony in the Garden',
      verse: 'Then Jesus came with them to a place called Gethsemane, and said to the disciples, "Sit here while I go and pray over there." And He took with Him Peter and the two sons of Zebedee, and He began to be sorrowful and deeply distressed. Then He said to them, "My soul is exceedingly sorrowful, even to death. Stay here and watch with Me." He went a little farther and fell on His face, and prayed, saying, "O My Father, if it is possible, let this cup pass from Me; nevertheless, not as I will, but as You will."',
      reference: 'Matthew 26:36-39'
    },
    {
      name: 'The Scourging at the Pillar',
      verse: 'So then Pilate took Jesus and scourged Him. And the soldiers twisted a crown of thorns and put it on His head, and they put on Him a purple robe. Then they said, "Hail, King of the Jews!" And they struck Him with their hands.',
      reference: 'John 19:1-3'
    },
    {
      name: 'The Crowning with Thorns',
      verse: 'When the soldiers had twisted a crown of thorns, they put it on His head, and a reed in His right hand. And they bowed the knee before Him and mocked Him, saying, "Hail, King of the Jews!" Then they spat on Him, and took the reed and struck Him on the head.',
      reference: 'Matthew 27:29-30'
    },
    {
      name: 'The Carrying of the Cross',
      verse: 'And He, bearing His cross, went out to a place called the Place of a Skull, which is called in Hebrew, Golgotha. Now as they led Him away, they laid hold of a certain man, Simon a Cyrenian, who was coming from the country, and on him they laid the cross that he might bear it after Jesus. And a great multitude of the people followed Him, and women who also mourned and lamented Him.',
      reference: 'John 19:17, Luke 23:26-27'
    },
    {
      name: 'The Crucifixion',
      verse: 'Then they crucified Him, and divided His garments, casting lots, that it might be fulfilled which was spoken by the prophet: "They divided My garments among them, and for My clothing they cast lots." Now when the sixth hour had come, there was darkness over the whole land until the ninth hour. And at the ninth hour Jesus cried out with a loud voice, saying, "Eloi, Eloi, lama sabachthani?" which is translated, "My God, My God, why have You forsaken Me?" And Jesus cried out with a loud voice, and breathed His last.',
      reference: 'Matthew 27:35, Mark 15:33-34, 37'
    }
  ],
  Glorious: [
    {
      name: 'The Resurrection',
      verse: 'Now after the Sabbath, as the first day of the week began to dawn, Mary Magdalene and the other Mary came to see the tomb. And behold, there was a great earthquake; for an angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat on it. But the angel answered and said to the women, "Do not be afraid, for I know that you seek Jesus who was crucified. He is not here; for He is risen, as He said. Come, see the place where the Lord lay."',
      reference: 'Matthew 28:1-2, 5-6'
    },
    {
      name: 'The Ascension',
      verse: 'Now when He had spoken these things, while they watched, He was taken up, and a cloud received Him out of their sight. And while they looked steadfastly toward heaven as He went up, behold, two men stood by them in white apparel, who also said, "Men of Galilee, why do you stand gazing up into heaven? This same Jesus, who was taken up from you into heaven, will so come in like manner as you saw Him go into heaven."',
      reference: 'Acts 1:9-11'
    },
    {
      name: 'The Descent of the Holy Spirit',
      verse: 'When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting. Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues, as the Spirit gave them utterance.',
      reference: 'Acts 2:1-4'
    },
    {
      name: 'The Assumption',
      verse: 'Now a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a garland of twelve stars. Then being with child, she cried out in labor and in pain to give birth.',
      reference: 'Revelation 12:1-2'
    },
    {
      name: 'The Coronation of Mary',
      verse: 'And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.',
      reference: 'Revelation 12:1'
    }
  ],
  Luminous: [
    {
      name: 'The Baptism of Jesus',
      verse: 'When He had been baptized, Jesus came up immediately from the water; and behold, the heavens were opened to Him, and He saw the Spirit of God descending like a dove and alighting upon Him. And suddenly a voice came from heaven, saying, "This is My beloved Son, in whom I am well pleased."',
      reference: 'Matthew 3:16-17'
    },
    {
      name: 'The Wedding at Cana',
      verse: 'On the third day there was a wedding in Cana of Galilee, and the mother of Jesus was there. Now both Jesus and His disciples were invited to the wedding. And when they ran out of wine, the mother of Jesus said to Him, "They have no wine." Jesus said to her, "Woman, what does your concern have to do with Me? My hour has not yet come." His mother said to the servants, "Whatever He says to you, do it."',
      reference: 'John 2:1-5'
    },
    {
      name: 'The Proclamation of the Kingdom',
      verse: 'Now after John was put in prison, Jesus came to Galilee, preaching the gospel of the kingdom of God, and saying, "The time is fulfilled, and the kingdom of God is at hand. Repent, and believe in the gospel."',
      reference: 'Mark 1:14-15'
    },
    {
      name: 'The Transfiguration',
      verse: 'Now after six days Jesus took Peter, James, and John his brother, led them up on a high mountain by themselves; and He was transfigured before them. His face shone like the sun, and His clothes became as white as the light. And behold, Moses and Elijah appeared to them, talking with Him. While he was still speaking, behold, a bright cloud overshadowed them; and suddenly a voice came out of the cloud, saying, "This is My beloved Son, in whom I am well pleased. Hear Him!"',
      reference: 'Matthew 17:1-3, 5'
    },
    {
      name: 'The Institution of the Eucharist',
      verse: 'And as they were eating, Jesus took bread, blessed and broke it, and gave it to the disciples and said, "Take, eat; this is My body." Then He took the cup, and gave thanks, and gave it to them, saying, "Drink from it, all of you. For this is My blood of the new covenant, which is shed for many for the remission of sins."',
      reference: 'Matthew 26:26-28'
    }
  ]
};

export const PRAYER_TEXTS: Record<string, string> = {
  'Sign of the Cross': 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
  'Apostles\' Creed': 'I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified; died, and was buried. He descended into Hell; the third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  'Our Father': 'Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come. Thy Will be done, on earth as it is in Heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
  'Hail Mary': 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
  'Glory Be': 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
  'Fatima Prayer': 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those in most need of Thy mercy.',
  'Hail Holy Queen': 'Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.',
  'Final Prayer': 'Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ.'
};