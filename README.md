# Holy Rosary Prayer Guide

A beautiful, interactive web application to help you pray the Holy Rosary with visual guidance and scripture meditation.

## What is the Rosary?

The Rosary is a Catholic devotional prayer that combines vocal prayers with meditation on the life of Jesus Christ. It consists of:
- **Introductory prayers** (Sign of the Cross, Apostles' Creed, Our Father, 3 Hail Marys, Glory Be)
- **Five decades** (groups of 10 Hail Marys), each focused on a mystery from Christ's life
- **Closing prayers** (Hail Holy Queen, Final Prayer)

## How to Use This App

### Visual Guidance
- **Left sidebar** shows your position on the rosary beads
- **Active bead** (blue, enlarged) = current prayer
- **Completed beads** (gray) = prayers you've already said
- **Progress tracker** shows your overall position

### Prayer Flow
1. Read the **mystery title and scripture verse** (NKJV translation)
2. Meditate on the mystery while praying
3. Say the prayer displayed on screen
4. Click **"Next"** to advance to the next prayer
5. Follow along until completion

### Auto-Detection
The app automatically selects today's mysteries based on the traditional schedule:
- **Sunday & Wednesday**: Glorious Mysteries
- **Monday & Saturday**: Joyful Mysteries
- **Tuesday & Friday**: Sorrowful Mysteries
- **Thursday**: Luminous Mysteries

## The Four Mystery Types

### Joyful Mysteries
Focus on Christ's early life and Mary's joy:
1. The Annunciation
2. The Visitation
3. The Nativity
4. The Presentation
5. The Finding in the Temple

### Sorrowful Mysteries
Meditate on Christ's passion and suffering:
1. The Agony in the Garden
2. The Scourging at the Pillar
3. The Crowning with Thorns
4. The Carrying of the Cross
5. The Crucifixion

### Glorious Mysteries
Celebrate Christ's resurrection and glory:
1. The Resurrection
2. The Ascension
3. The Descent of the Holy Spirit
4. The Assumption
5. The Coronation of Mary

### Luminous Mysteries
Reflect on Christ's public ministry:
1. The Baptism of Jesus
2. The Wedding at Cana
3. The Proclamation of the Kingdom
4. The Transfiguration
5. The Institution of the Eucharist

## Tips for Prayer

- **Take your time** - Don't rush through the prayers
- **Meditate deeply** - Read the scripture verse and imagine the scene
- **Pray with intention** - Offer each decade for a specific intention
- **Stay focused** - Use the visual beads to maintain your place
- **Pray daily** - The Rosary becomes more meaningful with regular practice

## Technical Details

### File Structure
```
├── app.tsx          # Main application UI and logic
└── types.ts         # Prayer texts, mysteries, and scripture verses (NKJV)
```

### Features
- Automatic mystery selection based on current date
- Full NKJV scripture passages for meditation
- Visual rosary bead tracker
- Progress indicator
- Clean, distraction-free interface
- Responsive design

## For Beginners

If you're new to the Rosary:
1. **Don't worry about memorization** - All prayers are displayed on screen
2. **Start slow** - It's okay to take 20-30 minutes
3. **Focus on one mystery at a time** - Read the scripture carefully
4. **Use the beads** - Visual tracking helps you stay engaged
5. **Make it a habit** - Try praying at the same time each day

---

Made by Brendan at (Tranquil Software)[tranquilsoftware.com]