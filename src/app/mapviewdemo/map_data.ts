export const MAP_DATA = {
  "0": {
    id: "0",
    maps: [
      {
        type: "scenario",
        name: 3,
        reference: { tile: "13-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 2, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -5 },
              { x: 4, y: -6 },
              { x: 5, y: -6 },
              { x: 6, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "aan" },
              { x: 4, y: 0, levels: "aen" },
              { x: 1, y: -1, levels: "nnn" },
              { x: 4, y: -2, levels: "nen" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "2.1" },
                  id: "scenario/3/token/1",
                },
              },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Difficult Terrain" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Obstacle" },
              { x: 4, y: -1, type: "Obstacle" },
              { x: 3, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "2.1",
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 8, y: -7 }] },
          { name: "1g", orientation: 0, positions: [{ x: 8, y: -7 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 2, y: -1 },
              { x: 5, y: -1 },
              { x: 10, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "aae" },
              { x: 6, y: 0, levels: "aae" },
              { x: 11, y: 0, levels: "aen" },
              { x: 1, y: -2, levels: "nnn" },
              { x: 5, y: -5, levels: "nnn" },
              { x: 14, y: -6, levels: "ene" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 8, y: 0, type: "Corridor" },
              { x: 9, y: -2, type: "Corridor" },
              { x: 10, y: -4, type: "Corridor" },
              { x: 11, y: -6, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 8, y: -1, type: "Corridor" },
              { x: 9, y: -3, type: "Corridor" },
              { x: 10, y: -5, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: 8, y: -1, type: "Corridor" },
              { x: 9, y: -3, type: "Corridor" },
              { x: 10, y: -5, type: "Corridor" },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 6, y: -2, type: "Trap" },
              { x: 8, y: -3, type: "Trap" },
              { x: 9, y: -5 },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 10, y: 0, type: "Difficult Terrain" },
              { x: 3, y: -2, type: "Difficult Terrain" },
              { x: 2, y: -3, type: "Difficult Terrain" },
              { x: 3, y: -3, type: "Difficult Terrain" },
              { x: 8, y: -4, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 7, y: -1, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 11, y: -1, type: "Obstacle" },
              { x: 12, y: -2, type: "Obstacle" },
              { x: 13, y: -5, type: "Obstacle" },
              { x: 13, y: -6, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 12, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: -3, y: 2 },
        origin: { x: -8, y: 5 },
      },
      {
        name: "13-C",
        orientation: "180",
        center: { x: 3, y: 2 },
        origin: { x: 0, y: 5 },
      },
      {
        name: "13-A",
        orientation: "180",
        center: { x: 1, y: -6 },
        origin: { x: -2, y: -3 },
      },
    ],
  },
  "1": {
    id: "1",
    maps: [
      {
        type: "scenario",
        name: 4,
        reference: { tile: "09-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 7, y: -6 }] },
          { name: "loot", orientation: 0, positions: [{ x: 2, y: -6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 0, y: -5, levels: "aan" },
              { x: 1, y: -6, levels: "nnn" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 2, y: -3, levels: "nnn" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: 4, y: -5, levels: "nee" }],
          },
          {
            name: "City Guard",
            orientation: 0,
            positions: [{ x: 6, y: -5, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 7,
                y: -6,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "5.3" },
                  id: "scenario/4/token/1",
                },
              },
            ],
          },
          { name: "Log", orientation: 60, positions: [{ x: 3, y: -4 }] },
          { name: "Debris", orientation: 0, positions: [{ x: 5, y: -6 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "5.3",
        reference: { tile: "13-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -1, y: 5 },
              { x: -4, y: 4 },
              { x: -1, y: 0 },
              { x: 3, y: 0 },
              { x: -3, y: 6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "ann" },
              { x: -2, y: 3, levels: "eee" },
              { x: -3, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "nne" },
              { x: 1, y: 2, levels: "aan" },
              { x: -3, y: 1, levels: "nee" },
              { x: -1, y: 4, levels: "nnns3" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -2, y: 5, levels: "aans" },
              { x: 0, y: 1, levels: "nnns" },
            ],
          },
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: 0, y: 6, levels: "ann" },
              { x: 2, y: 6, levels: "nnn" },
              { x: 3, y: 2, levels: "aan" },
              { x: 4, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 4 },
              { x: 0, y: 2 },
              { x: 1, y: 0 },
              { x: -2, y: 6 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 3, type: "Difficult Terrain" },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Difficult Terrain" },
              { x: -5, y: 5, type: "Difficult Terrain" },
              { x: 0, y: 4, type: "Difficult Terrain" },
              { x: 1, y: 1, type: "Difficult Terrain" },
              { x: 2, y: 0, type: "Difficult Terrain" },
              { x: -1, y: 3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -5, y: 4, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: 1, y: 5, type: "Obstacle" },
              { x: 3, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "0",
        center: { x: 6, y: -1 },
        origin: { x: 9, y: -4 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 4, y: -4 },
      },
      {
        name: "09-A",
        orientation: "180",
        center: { x: -7, y: 2 },
        origin: { x: -9, y: 5 },
      },
    ],
  },
  "10": {
    id: "10",
    maps: [
      {
        type: "scenario",
        name: 14,
        reference: { tile: "13-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 3 },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 5 },
              { x: -6, y: 4 },
              { x: -5, y: 3 },
              { x: -5, y: 2 },
              { x: -4, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "eee" },
              { x: -2, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "ane" },
              { x: -2, y: 2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "65.3" },
                  mode: "all",
                  id: "scenario/14/token/1",
                },
              },
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "65.3" },
                  mode: "all",
                  id: "scenario/14/token/1",
                },
              },
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "65.3" },
                  mode: "all",
                  id: "scenario/14/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Objective" },
              { x: -2, y: 3, type: "Objective" },
              { x: -2, y: 1, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "65.3",
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -10, y: 5 },
              { x: -9, y: 3 },
              { x: -8, y: 1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -10, y: 5 },
              { x: -9, y: 3 },
              { x: -8, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -7, y: 6, levels: "ann" },
              { x: -7, y: 4, levels: "nnn" },
              { x: -4, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nnn" },
              { x: -4, y: 3, levels: "aan" },
              { x: -2, y: 1, levels: "nee" },
            ],
          },
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [{ x: -4, y: 5, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Objective" },
              { x: -4, y: 4, type: "Objective" },
              { x: -3, y: 0, type: "Objective" },
              {
                x: -6,
                y: 3,
                type: "Objective",
                condition: { players: [3, 4] },
                rename: "Ice Pillar A",
              },
              {
                x: -2,
                y: 2,
                type: "Objective",
                condition: { players: [4] },
                rename: "Ice Pillar B",
              },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 8, y: -3 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 0, y: -3 },
      },
    ],
  },
  "100": {
    id: "100",
    maps: [
      {
        type: "scenario",
        name: 123,
        reference: { tile: "04-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 4 },
              { x: -3, y: 3 },
              { x: -2, y: 3 },
              { x: -4, y: 2 },
              { x: -2, y: 2 },
              { x: -1, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "ann" },
              { x: 0, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -4, y: 4, levels: "aan" },
              { x: -2, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.3" },
                  id: "scenario/123/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Trap" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Obstacle" },
              { x: -2, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "102.1",
        reference: { tile: "01-F", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -4, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 4 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -8, y: 0 },
              { x: -7, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: 2, y: 0 },
              { x: -7, y: -1 },
              { x: 0, y: -2 },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "ann" },
              { x: -2, y: -1 },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: -6, y: 2 },
              { x: 2, y: -1 },
              { x: -4, y: -1 },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -1, y: 3 },
              { x: -2, y: 1 },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: 1 },
              { x: -3, y: 0, type: "Corridor" },
              { x: 0, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Trap" },
              { x: -1, y: -3, type: "Trap" },
              { x: 0, y: -3, type: "Trap" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 2, type: "Obstacle" },
              { x: -2, y: 2, type: "Obstacle" },
              { x: -3, y: -1, type: "Obstacle" },
              { x: 0, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 3, y: 0, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 4, y: -1, type: "Treasure" },
              { x: -1, y: -2, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "141.3",
        reference: { tile: "03-D", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: 5 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -1 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "nnn" },
              { x: -4, y: 1, levels: "ane" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: -6, y: 3, levels: "eee" },
              { x: -1, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "102.1" },
                  id: "section/141.3/token/2",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Trap" },
              { x: -3, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -3, y: 1, type: "Difficult Terrain" },
              { x: -2, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: -5, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "09-A",
        orientation: "0",
        center: { x: 3, y: -4 },
        origin: { x: 5, y: -7 },
      },
      {
        name: "04-C",
        orientation: "0",
        center: { x: -7, y: 9 },
        origin: { x: -5, y: 7 },
      },
      {
        name: "03-D",
        orientation: "0",
        center: { x: -2, y: 3 },
        origin: { x: 1, y: 1 },
      },
      {
        name: "01-F",
        orientation: "180",
        center: { x: 7, y: -4 },
        origin: { x: 5, y: -4 },
      },
      {
        name: "01-C",
        orientation: "180",
        center: { x: -1, y: -4 },
        origin: { x: -3, y: -4 },
      },
    ],
  },
  "101": {
    id: "101",
    maps: [
      {
        type: "scenario",
        name: 124,
        reference: { tile: "13-E", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "4", orientation: 0, positions: [{ x: 4, y: 0 }] },
          { name: "5", orientation: 0, positions: [{ x: 7, y: -6 }] },
          { name: "loot", orientation: 0, positions: [{ x: 6, y: -6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 2, y: -4 },
              { x: 3, y: -5 },
              { x: 3, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 5, y: -2, levels: "ann" },
              { x: 6, y: -4, levels: "nee" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "enn" },
              { x: 5, y: -4, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 6,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "126.2" },
                  id: "scenario/124/token/1",
                },
              },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Obstacle" },
              { x: 5, y: -5, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "126.2",
        reference: { tile: "05-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: 2 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: -6 }] },
          { name: "6", orientation: 0, positions: [{ x: -3, y: -5 }] },
          { name: "7", orientation: 0, positions: [{ x: -3, y: 1 }] },
          { name: "8", orientation: 0, positions: [{ x: 4, y: -1 }] },
          { name: "9", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "a", orientation: 0, positions: [{ x: -3, y: -2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -6, y: 1 },
              { x: 2, y: 0 },
              { x: 0, y: -4 },
              { x: 2, y: -4 },
              { x: 3, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nna" },
              { x: 5, y: -4, levels: "ann" },
              { x: 0, y: -5, levels: "enn" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 0, levels: "nen" },
              { x: 4, y: -2, levels: "nee" },
              { x: -3, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "nee" },
              { x: 3, y: 0, levels: "enn" },
              { x: 4, y: -4, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "194.4" },
                  id: "section/126.2/token/2",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: -1,
                y: -6,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "171.3" },
                  id: "section/126.2/token/3",
                },
              },
            ],
          },
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -2 }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: -1, type: "Corridor" },
              { x: 1, y: -3, type: "Corridor" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Difficult Terrain" },
              { x: 4, y: -3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: -1, type: "Obstacle" },
              { x: 3, y: -3, type: "Obstacle" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -4, y: 0, type: "Obstacle" },
              { x: -2, y: -4, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "171.3",
        reference: { tile: "01-H", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -7, y: 8 }] },
          { name: "12", orientation: 0, positions: [{ x: -2, y: 0 }] },
          { name: "1g", orientation: 0, positions: [{ x: -7, y: 8 }] },
          { name: "3", orientation: 0, positions: [{ x: -2, y: 2 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 2 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 8 }] },
          { name: "loot", orientation: 0, positions: [{ x: -4, y: 0 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "nen" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "aen" }],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "194.4",
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "10", orientation: 0, positions: [{ x: -7, y: 0 }] },
          { name: "11", orientation: 0, positions: [{ x: -6, y: 2 }] },
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -8, y: 2 },
              { x: -1, y: 2 },
              { x: -5, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "nen" },
              { x: 0, y: 0, levels: "aae" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "aan" },
              { x: -3, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: -6, y: 0, levels: "ann" }],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -4, y: 1, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
              { x: -2, y: 0, type: "Difficult Terrain" },
              { x: -1, y: 0, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: 1, y: 0 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "13-E",
        orientation: "180",
        center: { x: -5, y: 0 },
        origin: { x: -8, y: 3 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: -5, y: 6 },
        origin: { x: -1, y: 5 },
      },
      {
        name: "05-A",
        orientation: "180",
        center: { x: 6, y: 0 },
        origin: { x: 4, y: 2 },
      },
      {
        name: "01-H",
        orientation: "0",
        center: { x: 3, y: -6 },
        origin: { x: 5, y: -6 },
      },
    ],
  },
  "102": { id: "102", maps: [{ type: "scenario", name: 125, triggers: [] }] },
  "103": {
    id: "103",
    maps: [
      {
        type: "scenario",
        name: 127,
        reference: { tile: "09-C", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 3, y: 5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 2, y: -7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 3, y: 1 },
              { x: 2, y: -3 },
              { x: 2, y: 1 },
              { x: 3, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "nne" },
              { x: 4, y: 1, levels: "ann" },
              { x: 5, y: -6, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "30.4" },
                  id: "scenario/127/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: 2,
                y: -7,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "11.7" },
                  id: "scenario/127/token/2",
                },
              },
            ],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 300,
            positions: [
              { x: 2, y: 1, type: "Corridor" },
              { x: 3, y: -1, type: "Corridor" },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 300,
            positions: [
              { x: 3, y: -2, type: "Corridor" },
              { x: 4, y: -4, type: "Corridor" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: 3, type: "Objective" },
              { x: 1, y: -1, type: "Objective" },
              { x: 4, y: -1, type: "Objective" },
              { x: 3, y: -5, type: "Objective" },
              { x: -2, y: -1 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "11.7",
        reference: { tile: "01-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -4, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 2 }] },
        ],
        monsters: [
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [{ x: -4, y: 0, levels: "ane" }],
          },
        ],
        overlays: [
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "30.4",
        reference: { tile: "01-H", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [{ x: 2, y: 0, levels: "ane" }],
          },
        ],
        overlays: [
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "09-C",
        orientation: "180",
        center: { x: 0, y: -2 },
        origin: { x: -2, y: 1 },
      },
      {
        name: "09-B",
        orientation: "0",
        center: { x: 1, y: 2 },
        origin: { x: 3, y: -1 },
      },
      {
        name: "01-H",
        orientation: "180",
        center: { x: -1, y: 8 },
        origin: { x: -3, y: 8 },
      },
      {
        name: "01-B",
        orientation: "0",
        center: { x: 2, y: -8 },
        origin: { x: 4, y: -8 },
      },
    ],
  },
  "104": {
    id: "104",
    maps: [
      {
        type: "scenario",
        name: 128,
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "a", orientation: 0, positions: [{ x: -4, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 0 },
              { x: -4, y: 0 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "nne" },
              { x: -7, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "nee" },
              { x: -1, y: 2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "164.3" },
                  id: "scenario/128/token/1",
                },
              },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [{ x: -2, y: 1, type: "Difficult Terrain" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "14.2",
        reference: { tile: "16-C", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 7, y: -7 }] },
          { name: "2g", orientation: 0, positions: [{ x: 7, y: -7 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 4, y: -1 },
              { x: 5, y: -3 },
              { x: 6, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 1, y: -1, levels: "nee" }],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: 4, y: -2, levels: "nne" },
              { x: 2, y: -3, levels: "eee" },
              { x: 4, y: -3, levels: "ane" },
              { x: 3, y: -4, levels: "aan" },
              { x: 3, y: -6, levels: "nnn" },
            ],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: 6, y: -2, levels: "nee" }],
          },
          {
            name: "Savvas Icestorm",
            orientation: 0,
            positions: [{ x: 8, y: -5, levels: "aan" }],
          },
        ],
        overlays: [
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 7, y: -1, type: "Difficult Terrain" },
              { x: 7, y: -4, type: "Difficult Terrain" },
            ],
          },
          { name: "Tree", orientation: 180, positions: [{ x: 4, y: -6 }] },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: 3, y: -2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 0, y: 0, type: "Treasure" },
              { x: 7, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "164.3",
        reference: { tile: "09-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 7 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -3, y: 5 },
              { x: -2, y: 3 },
              { x: -1, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "nne" }],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nne" },
              { x: -4, y: 6, levels: "eee" },
              { x: -6, y: 5, levels: "ann" },
              { x: 0, y: 5, levels: "aan" },
            ],
          },
          {
            name: "Savvas Icestorm",
            orientation: 0,
            positions: [
              { x: -1, y: 6, levels: "nna" },
              { x: -1, y: 3, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -2, y: 6, type: "Difficult Terrain" },
              { x: -2, y: 4, type: "Difficult Terrain" },
              { x: 0, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "14.2" },
                  id: "section/164.3/token/2",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "180",
        center: { x: -3, y: 7 },
        origin: { x: -8, y: 10 },
      },
      {
        name: "09-B",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 3, y: -4 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 4, y: -7 },
        origin: { x: 8, y: -8 },
      },
    ],
  },
  "105": {
    id: "105",
    maps: [
      {
        type: "scenario",
        name: 129,
        reference: { tile: "02-I", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -12, y: -2 }] },
          { name: "a", orientation: 0, positions: [{ x: -13, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: -13, y: -2 }] },
          { name: "c", orientation: 0, positions: [{ x: -12, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 2, y: 0 },
              { x: 3, y: -1 },
              { x: 3, y: -2 },
              { x: 4, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Savvas Lavaflow",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "ann" },
              { x: -9, y: -2, levels: "aan" },
              { x: -5, y: -2, levels: "eee" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: -12, y: -1, levels: "nnn" },
              { x: -11, y: -2, levels: "ane" },
              { x: -2, y: -3, levels: "nne" },
              { x: -11, y: -3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -12,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "191.3" },
                  id: "scenario/129/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: -2, type: "Corridor" },
              { x: 0, y: -2, type: "Corridor" },
              { x: -4, y: -3, type: "Corridor" },
              { x: -3, y: -3, type: "Corridor" },
            ],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -3 },
            ],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -9, y: -1, type: "Trap" },
              { x: 1, y: -1, type: "Trap" },
              { x: -8, y: -2, type: "Trap" },
              { x: -3, y: -2, type: "Trap" },
              { x: -1, y: -3, type: "Trap" },
              { x: -6, y: -3, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -8, y: -1, type: "Difficult Terrain" },
              { x: -3, y: -1, type: "Difficult Terrain" },
              { x: -10, y: -2, type: "Difficult Terrain" },
              { x: -2, y: -2, type: "Difficult Terrain" },
              { x: 3, y: -3, type: "Difficult Terrain" },
              { x: -7, y: -3 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "191.3",
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [
              { x: -9, y: 6, levels: "nnn" },
              { x: -7, y: 3, levels: "ane" },
              { x: -3, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "aan" },
              { x: -5, y: 3, levels: "eee" },
              { x: -2, y: 1, levels: "ann" },
              { x: -6, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Lava",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Hazardous Terrain" },
              { x: -8, y: 5, type: "Hazardous Terrain" },
              { x: -3, y: 4, type: "Hazardous Terrain" },
              { x: -8, y: 3, type: "Hazardous Terrain" },
              { x: -5, y: 2, type: "Hazardous Terrain" },
              { x: -2, y: 0, type: "Hazardous Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "0",
        center: { x: -10, y: 0 },
        origin: { x: -5, y: -3 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: -2, y: 0 },
        origin: { x: 2, y: -1 },
      },
      {
        name: "02-I",
        orientation: "180",
        center: { x: 8, y: 0 },
        origin: { x: 6, y: 2 },
      },
      {
        name: "02-C",
        orientation: "180",
        center: { x: 4, y: 0 },
        origin: { x: 2, y: 2 },
      },
    ],
  },
  "106": {
    id: "106",
    maps: [
      {
        type: "scenario",
        name: 130,
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 1 },
              { x: -4, y: 1 },
              { x: -5, y: 0 },
              { x: -4, y: 0 },
              { x: -3, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "29.2" },
                  id: "scenario/130/token/5",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -8,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "8.1" },
                  id: "scenario/130/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: -6,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "184.4" },
                  id: "scenario/130/token/2",
                },
              },
              {
                x: -1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "189.2" },
                  id: "scenario/130/token/3",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "183.1" },
                  id: "scenario/130/token/4",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "8.1",
        reference: { tile: "02-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nee" },
              { x: 0, y: -1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Lava",
            orientation: 0,
            positions: [
              { x: 1, y: 0, type: "Hazardous Terrain" },
              { x: 1, y: -1, type: "Hazardous Terrain" },
              { x: 3, y: -3, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "29.2",
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [{ name: "5", orientation: 0, positions: [{ x: 5, y: -5 }] }],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [{ x: 3, y: -1, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "183.1",
        reference: { tile: "02-K", tileOrientation: "180" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: 0, y: -2 }] }],
        monsters: [
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nee" },
              { x: 2, y: -1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Trap" },
              { x: 3, y: -3, type: "Trap" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "184.4",
        reference: { tile: "02-C", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 16, y: -2 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 16, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nee" },
              { x: 3, y: -2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: 2, y: -2, type: "Obstacle" }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 1, y: -3, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 12, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "189.2",
        reference: { tile: "02-I", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nee" },
              { x: 3, y: -2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Difficult Terrain" },
              { x: 1, y: -1, type: "Difficult Terrain" },
              { x: 2, y: -1, type: "Difficult Terrain" },
              { x: 1, y: -2, type: "Difficult Terrain" },
              { x: 2, y: -3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 4, y: -3, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "10-B",
        orientation: "180",
        center: { x: -3, y: 5 },
        origin: { x: -6, y: 7 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 4, y: -1 },
      },
      {
        name: "02-K",
        orientation: "180",
        center: { x: 6, y: 0 },
        origin: { x: 4, y: 2 },
      },
      {
        name: "02-I",
        orientation: "180",
        center: { x: 5, y: -5 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "02-C",
        orientation: "180",
        center: { x: -1, y: -5 },
        origin: { x: -3, y: -3 },
      },
      {
        name: "02-A",
        orientation: "180",
        center: { x: -6, y: 0 },
        origin: { x: -8, y: 2 },
      },
    ],
  },
  "107": {
    id: "107",
    maps: [
      {
        type: "scenario",
        name: 131,
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 2, y: 1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              {
                x: 4,
                y: -2,
                trigger: {
                  type: "pressure",
                  display: "Section 168.4",
                  action: "reveal",
                  what: { type: "section", name: "168.4" },
                  id: "scenario/131/token/a",
                },
              },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 3, y: -4 },
              { x: 4, y: -4 },
              { x: 5, y: -4 },
              { x: 6, y: -4 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  locked: true,
                  what: {},
                  id: "scenario/131/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "95.2",
        reference: { tile: "06-B", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 6, y: -9 }] },
          { name: "1g", orientation: 0, positions: [{ x: 6, y: -9 }] },
          { name: "2", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 1 }] },
        ],
        monsters: [
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "aae" },
              { x: -2, y: -1, levels: "eee" },
              { x: -1, y: -1, levels: "aae" },
              { x: -1, y: -2, levels: "aee" },
              { x: 0, y: -2, levels: "eee" },
              { x: 1, y: -7, levels: "eee" },
              { x: 2, y: -7, levels: "aae" },
              { x: 2, y: -8, levels: "aee" },
              { x: 3, y: -8, levels: "eee" },
              { x: 6, y: -8, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [{ x: 1, y: 1, type: "Door" }],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: -1, type: "Corridor" },
              { x: 3, y: -7, type: "Corridor" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Obstacle" },
              { x: 5, y: -6, type: "Obstacle" },
            ],
          },
        ],
        triggers: [
          {
            type: "alldead",
            action: "reveal",
            what: { type: "section", name: "188.1" },
            also: [{ action: "open", what: "section/150.3/token/2" }],
            id: "section/95.2/global/room2enemies",
          },
        ],
      },
      {
        type: "section",
        name: "103.1",
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "3", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -9, y: 6, levels: "eee" },
              { x: -1, y: 0, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [{ x: -1, y: 3, type: "Door" }],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -7, y: 4 }] },
          {
            name: "Bookshelf",
            orientation: 240,
            positions: [{ x: -3, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "alldead",
            action: "reveal",
            what: { type: "section", name: "11.5" },
            also: [
              {
                action: "attachTrigger",
                what: "section/188.1/token/c",
                trigger: {
                  type: "pressure",
                  dedupMode: "first",
                  action: "reveal",
                  what: { type: "section", name: "155.1" },
                },
              },
            ],
            id: "section/103.1/global/room3enemies",
          },
        ],
      },
      {
        type: "section",
        name: "116.1",
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "d", orientation: 0, positions: [{ x: -4, y: 3 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "aan" },
              { x: -3, y: 5, levels: "ann" },
              { x: -1, y: 1, levels: "ann" },
              { x: 0, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Living Doom",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Sarcophagus",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -2, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [
          {
            type: "alldead",
            action: "reveal",
            what: { type: "section", name: "188.3" },
            id: "section/116.1/global/room4ennemies",
          },
        ],
      },
      {
        type: "section",
        name: "149.4",
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          {
            name: "d",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 3,
                trigger: {
                  type: "pressure",
                  action: "reveal",
                  what: { type: "section", name: "116.1" },
                  id: "section/149.4/token/d",
                },
              },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Sarcophagus",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -2, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "150.3",
        reference: { tile: "06-B", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 6, y: -9 }] },
          { name: "1g", orientation: 0, positions: [{ x: 6, y: -9 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          {
            name: "b",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: -4,
                trigger: {
                  type: "pressure",
                  display: "Section 95.2",
                  action: "reveal",
                  what: { type: "section", name: "95.2" },
                  id: "section/150.3/token/b",
                },
              },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  locked: true,
                  what: {},
                  id: "section/150.3/token/2",
                },
              },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Obstacle" },
              { x: 5, y: -6, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "155.1",
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "3", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -8, y: 6, levels: "nnn" },
              { x: -5, y: 6, levels: "ann" },
              { x: -5, y: 0, levels: "ann" },
              { x: -2, y: 0, levels: "nan" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -10, y: 6, levels: "ann" },
              { x: -3, y: 6, levels: "nnn" },
              { x: -7, y: 0, levels: "nnn" },
              { x: 0, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [{ x: -1, y: 3, type: "Door" }],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -7, y: 4 }] },
          {
            name: "Bookshelf",
            orientation: 240,
            positions: [{ x: -3, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "alldead",
            action: "reveal",
            what: { type: "section", name: "149.4" },
            also: [{ action: "open", what: "section/188.1/token/3" }],
            id: "section/155.1/global/room3enemies2",
          },
        ],
      },
      {
        type: "section",
        name: "168.4",
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 2, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 2, y: 1 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nnn" },
              { x: 3, y: 0, levels: "nan" },
              { x: 1, y: -1, levels: "aan" },
              { x: 5, y: -1, levels: "ann" },
              { x: 2, y: -3, levels: "nnn" },
              { x: 6, y: -3, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [{ x: 2, y: 1, type: "Door" }],
          },
        ],
        triggers: [
          {
            type: "alldead",
            action: "reveal",
            what: { type: "section", name: "150.3" },
            also: [{ action: "open", what: "scenario/131/token/1" }],
            id: "section/168.4/global/room1enemies",
          },
        ],
      },
      {
        type: "section",
        name: "188.1",
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "c",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 3,
                trigger: {
                  type: "pressure",
                  dedupMode: "first",
                  action: "reveal",
                  what: { type: "section", name: "103.1" },
                  id: "section/188.1/token/c",
                },
              },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  locked: true,
                  what: {},
                  id: "section/188.1/token/3",
                },
              },
            ],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -7, y: 4 }] },
          {
            name: "Bookshelf",
            orientation: 240,
            positions: [{ x: -3, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "0",
        center: { x: -2, y: 7 },
        origin: { x: 3, y: 4 },
      },
      {
        name: "13-E",
        orientation: "0",
        center: { x: 5, y: 7 },
        origin: { x: 8, y: 4 },
      },
      {
        name: "10-B",
        orientation: "180",
        center: { x: 4, y: -10 },
        origin: { x: 1, y: -8 },
      },
      {
        name: "06-B",
        orientation: "180",
        center: { x: 0, y: -2 },
        origin: { x: -3, y: 2 },
      },
      {
        name: "01-D",
        orientation: "0",
        center: { x: -2, y: -6 },
        origin: { x: 0, y: -6 },
      },
      {
        name: "01-B",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: -3, y: 0 },
      },
    ],
  },
  "108": {
    id: "108",
    maps: [
      {
        type: "scenario",
        name: 132,
        reference: { tile: "16-B", tileOrientation: "180" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 8, y: -7 },
              { x: 7, y: -7 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 6, y: 0 },
              { x: 8, y: -2 },
              { x: 5, y: -4 },
              { x: 9, y: -4 },
              { x: 3, y: -6 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 3, y: 0 },
              { x: 2, y: -1 },
              { x: 3, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 5, y: -1, levels: "ann" },
              { x: 3, y: -3, levels: "nnn" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 7, y: -2, levels: "eee" },
              { x: 6, y: -3, levels: "aan" },
              { x: 2, y: -4, levels: "aan" },
              { x: 4, y: -5, levels: "nne" },
              { x: 9, y: -5, levels: "nnn" },
              { x: 6, y: -6, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 7,
                y: -7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "140.1" },
                  mode: "all",
                  id: "scenario/132/token/1",
                },
              },
              {
                x: 8,
                y: -7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "140.1" },
                  mode: "all",
                  id: "scenario/132/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 7, y: 0, type: "Trap" },
              { x: 5, y: -3, type: "Trap" },
              { x: 8, y: -3, type: "Trap" },
              { x: 7, y: -4, type: "Trap" },
              { x: 7, y: -5, type: "Trap" },
              { x: 4, y: -6, type: "Trap" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 6, y: -4, type: "Obstacle" },
              { x: 5, y: -5, type: "Obstacle" },
              { x: 6, y: -5, type: "Obstacle" },
              { x: 9, y: -6, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 10, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "140.1",
        reference: { tile: "11-B", tileOrientation: "240" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: 3, y: 6 },
              { x: 4, y: 6 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 3, y: 6 },
              { x: 4, y: 6 },
            ],
          },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: 2 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 2 }] },
          { name: "loot", orientation: 0, positions: [{ x: 2, y: 5 }] },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 4, y: 4, levels: "nnn" },
              { x: 2, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 3, y: 5, levels: "aan" },
              { x: 3, y: 3, levels: "nne" },
              { x: 6, y: 3, levels: "nne" },
              { x: 0, y: 1, levels: "eee" },
              { x: 2, y: 1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "192.4" },
                  id: "section/140.1/token/3",
                },
              },
              {
                x: 5,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "165.5" },
                  id: "section/140.1/token/2",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 3, y: 4, type: "Trap" },
              { x: 0, y: 3, type: "Trap" },
              { x: 2, y: -1 },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Hazardous Terrain" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 5, y: 4, type: "Difficult Terrain" },
              { x: 2, y: 2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: 2, y: 4, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "165.5",
        reference: { tile: "04-A", tileOrientation: "300" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -2, y: 5 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: 5 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -2, y: 2 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 0, y: 3, levels: "eee" },
              { x: 0, y: 1, levels: "aan" },
              { x: 2, y: 1, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Trap" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [{ x: -1, y: 3, type: "Hazardous Terrain" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 1, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: -1, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 2, y: 2, type: "Treasure" },
              { x: 1, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "192.4",
        reference: { tile: "11-D", tileOrientation: "300" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -2, y: 8 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 8 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -5, y: 6 },
              { x: -3, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -4, y: 8, levels: "eee" },
              { x: -4, y: 4, levels: "ann" },
              { x: -1, y: 3, levels: "aan" },
              { x: -1, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -5, y: 10, type: "Trap" },
              { x: 1, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 6, type: "Hazardous Terrain" },
              { x: -3, y: 4, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -3, y: 5, type: "Difficult Terrain" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -3, y: 7, type: "Obstacle" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: -1, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "180",
        center: { x: -1, y: 7 },
        origin: { x: -6, y: 10 },
      },
      {
        name: "11-D",
        orientation: "300",
        center: { x: -3, y: -4 },
        origin: { x: -1, y: -9 },
      },
      {
        name: "11-B",
        orientation: "240",
        center: { x: 1, y: -1 },
        origin: { x: -2, y: -3 },
      },
      {
        name: "04-A",
        orientation: "300",
        center: { x: 5, y: -4 },
        origin: { x: 5, y: -6 },
      },
    ],
  },
  "109": {
    id: "109",
    maps: [
      {
        type: "scenario",
        name: 133,
        reference: { tile: "08-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 5, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 2, y: -1 },
              { x: 2, y: -2 },
              { x: 3, y: -2 },
              { x: 3, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "aee" },
              { x: 0, y: -1, levels: "eee" },
              { x: 5, y: -3, levels: "eee" },
              { x: 2, y: -4, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "186.2" },
                  also: [{ action: "trigger", what: "scenario/133/global/1" }],
                  id: "scenario/133/token/2",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 120,
            positions: [
              {
                x: 0,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "172.5" },
                  also: [{ action: "trigger", what: "scenario/133/global/1" }],
                  id: "scenario/133/token/4",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: 5,
                y: -5,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "166.3" },
                  also: [{ action: "trigger", what: "scenario/133/global/1" }],
                  id: "scenario/133/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 300,
            positions: [
              {
                x: 5,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "162.1" },
                  also: [{ action: "trigger", what: "scenario/133/global/1" }],
                  id: "scenario/133/token/3",
                },
              },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: 3, y: -4, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "broadcast",
            message: "Read Section 195.2",
            id: "scenario/133/global/1",
          },
        ],
      },
      {
        type: "section",
        name: "162.1",
        reference: { tile: "04-B", tileOrientation: "300" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "a", orientation: 0, positions: [{ x: -1, y: 4 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 2, y: 2, levels: "nee" }],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [{ x: 0, y: 3, levels: "ann" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "eaa" },
              { x: 1, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 0, y: 4, type: "Obstacle" }],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [{ x: -1, y: 4 }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 1, y: 3, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 12, y: -19 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "166.3",
        reference: { tile: "12-D", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: 6 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 6 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -2, y: 3 },
              { x: -5, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -7, y: 1, levels: "aae" },
              { x: 0, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -7, y: 5, levels: "aan" },
              { x: -4, y: 3, levels: "nnn" },
              { x: -7, y: 2, levels: "eea" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 60,
            positions: [{ x: -8, y: 4, type: "Door" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -1, y: 2, type: "Obstacle" },
              { x: -6, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [
              { x: -2, y: 3, type: "Obstacle" },
              { x: -5, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -6, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "172.5",
        reference: { tile: "04-D", tileOrientation: "0" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: -1, y: 4 }] },
          { name: "a", orientation: 0, positions: [{ x: -1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: -4, y: 2, levels: "nnn" }],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -4, y: 4, levels: "aan" },
              { x: -1, y: 2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 240,
            positions: [{ x: 1, y: 0, type: "Door" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Obstacle" }],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [{ x: -1, y: 0, type: "Obstacle" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 120,
            positions: [{ x: -3, y: 1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "186.2",
        reference: { tile: "12-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 5, y: -6 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: -6 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 5, y: -1 },
              { x: 2, y: -3 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 5, y: 0 },
              { x: 6, y: 0 },
              { x: 7, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 0, y: -1, levels: "nee" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 5, y: -2, levels: "nnn" },
              { x: 3, y: -3, levels: "nnn" },
              { x: 4, y: -3, levels: "nee" },
              { x: 5, y: -3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 240,
            positions: [{ x: 8, y: -4 }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 6, y: -1, type: "Obstacle" },
              { x: 1, y: -2, type: "Obstacle" },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [{ x: 2, y: -2 }],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [{ x: 6, y: -2, type: "Obstacle" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-D",
        orientation: "0",
        center: { x: 3, y: -7 },
        origin: { x: 7, y: -9 },
      },
      {
        name: "12-A",
        orientation: "180",
        center: { x: -4, y: 7 },
        origin: { x: -8, y: 9 },
      },
      {
        name: "08-A",
        orientation: "180",
        center: { x: -1, y: 0 },
        origin: { x: -3, y: 2 },
      },
      {
        name: "04-D",
        orientation: "0",
        center: { x: -4, y: -3 },
        origin: { x: -2, y: -5 },
      },
      {
        name: "04-B",
        orientation: "300",
        center: { x: 3, y: 3 },
        origin: { x: 3, y: 1 },
      },
    ],
  },
  "11": {
    id: "11",
    maps: [
      {
        type: "scenario",
        name: 15,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 6 },
              { x: -3, y: 5 },
              { x: -2, y: 5 },
              { x: -2, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Stormcaller",
            orientation: 0,
            positions: [{ x: -9, y: 3, levels: "bbb" }],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "nnn" },
              { x: -6, y: -1, levels: "aan" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: -9, y: 6, levels: "ann" },
              { x: -2, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [{ x: -7, y: 6 }],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [{ x: -4, y: 0, type: "Corridor" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -6, y: 5, type: "Hazardous Terrain" },
              { x: -3, y: 3, type: "Hazardous Terrain" },
              { x: -5, y: -1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -6, y: 2, type: "Obstacle" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -7, y: 4, type: "Obstacle" },
              { x: -5, y: 2, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: -8, y: 5 }],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: -6, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -5, y: -2 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 5, y: -3 },
      },
      {
        name: "11-A",
        orientation: "300",
        center: { x: -2, y: 0 },
        origin: { x: 0, y: -5 },
      },
    ],
  },
  "110": {
    id: "110",
    maps: [
      {
        type: "scenario",
        name: 134,
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -5, y: 6 },
              { x: -5, y: 0 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -8, y: 3 },
              { x: -2, y: 3 },
            ],
          },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -8, y: 6 },
              { x: -2, y: 0 },
            ],
          },
          { name: "d", orientation: 0, positions: [{ x: -6, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 6 },
              { x: -3, y: 6 },
              { x: -3, y: 5 },
              { x: -1, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "nee" },
              { x: -4, y: 3, levels: "anns" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "nnes" },
              { x: -5, y: 2, levels: "eees" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -7, y: 4, levels: "aan" },
              { x: -6, y: 2, levels: "aan" },
              { x: -7, y: 3, levels: "nnas" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -6, y: 3, type: "Corridor" },
              { x: -3, y: 3, type: "Corridor" },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [
              { x: -5, y: 5 },
              { x: -5, y: 2 },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [
              { x: -6, y: 4 },
              { x: -3, y: 1 },
            ],
          },
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Difficult Terrain" },
              { x: -3, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [{ x: -2, y: 2 }],
          },
          {
            name: "Large Water",
            orientation: 300,
            positions: [{ x: -6, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Difficult Terrain" },
              { x: -4, y: 5, type: "Difficult Terrain" },
              { x: -8, y: 4, type: "Difficult Terrain" },
              { x: -3, y: 4, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -5, y: 3, type: "Obstacle" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -8, y: 6, type: "Obstacle" },
              { x: -5, y: 6, type: "Obstacle" },
              { x: -8, y: 3, type: "Obstacle" },
              { x: -2, y: 3, type: "Obstacle" },
              { x: -5, y: 0, type: "Obstacle" },
              { x: -2, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "186.3",
        reference: { tile: "01-F", tileOrientation: "0" },
        tokens: [
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: -1, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Doom",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "nne" }],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -3, y: 1, levels: "nne" },
              { x: -2, y: 0, levels: "ana" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: -3, y: -1, type: "Corridor" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "0",
        center: { x: 0, y: -2 },
        origin: { x: 5, y: -5 },
      },
      {
        name: "01-F",
        orientation: "0",
        center: { x: -1, y: 3 },
        origin: { x: 1, y: 3 },
      },
    ],
  },
  "111": {
    id: "111",
    maps: [
      {
        type: "scenario",
        name: 135,
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 2 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 4 },
              { x: 0, y: 2 },
              { x: 0, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "aan" },
              { x: -4, y: 4, levels: "nnn" },
              { x: -3, y: 2, levels: "nnn" },
              { x: -4, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "eee" },
              { x: -5, y: 4, levels: "aae" },
              { x: -4, y: 2, levels: "aee" },
              { x: -2, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "182.2" },
                  mode: "all",
                  id: "scenario/135/token/1",
                },
              },
              {
                x: -5,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "182.2" },
                  mode: "all",
                  id: "scenario/135/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -5, y: 5, type: "Trap" },
              { x: -4, y: 5, type: "Trap" },
              { x: -3, y: 1, type: "Trap" },
              { x: -2, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Wall" }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: 3 },
              { x: -1, y: 3 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "138.2",
        reference: { tile: "11-D", tileOrientation: "240" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 6, y: 2 },
              { x: 10, y: -6 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 6, y: 2 },
              { x: 10, y: -6 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 2, y: -1 },
              { x: 3, y: -3 },
              { x: 2, y: -4 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 0, y: 4 },
              { x: 12, y: -9 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 6, y: -6, levels: "ann" },
              { x: 7, y: -7, levels: "nnn" },
              { x: 8, y: -8, levels: "nnn" },
              { x: 8, y: -9, levels: "aan" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "ann" },
              { x: 1, y: 4, levels: "eee" },
              { x: 2, y: 3, levels: "nne" },
              { x: 2, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [
              { x: 3, y: 5, type: "Obstacle" },
              { x: 10, y: -9 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "182.2",
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -1, y: 4 },
              { x: 0, y: 2 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -1, y: 4 },
              { x: 0, y: 2 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -10, y: 7 },
              { x: -6, y: -1 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -9, y: 4 },
              { x: -8, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Savvas Icestorm",
            orientation: 0,
            positions: [
              { x: -7, y: 6, levels: "eee" },
              { x: -4, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -10,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "138.2" },
                  id: "section/182.2/token/2",
                },
              },
              {
                x: -6,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "138.2" },
                  id: "section/182.2/token/2",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Trap" },
              { x: -5, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -5, y: 6, type: "Obstacle" },
              { x: -7, y: 4, type: "Obstacle" },
              { x: -6, y: 2, type: "Obstacle" },
              { x: -2, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -8, y: 3 },
              { x: -7, y: 3 },
              { x: -6, y: 3 },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: 3 },
              { x: -2, y: 3 },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 5, y: -3 },
      },
      {
        name: "15-B",
        orientation: "0",
        center: { x: 7, y: 0 },
        origin: { x: 10, y: -3 },
      },
      {
        name: "11-D",
        orientation: "240",
        center: { x: -7, y: 4 },
        origin: { x: -10, y: 2 },
      },
      {
        name: "11-B",
        orientation: "0",
        center: { x: -3, y: -4 },
        origin: { x: 2, y: -7 },
      },
    ],
  },
  "112": {
    id: "112",
    maps: [
      {
        type: "scenario",
        name: 136,
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "ann" },
              { x: -1, y: 3, levels: "eee" },
              { x: 0, y: 2, levels: "aan" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "eee" },
              { x: -1, y: 0, levels: "nne" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -5, y: 3, levels: "eee" },
              { x: -4, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "97.1" },
                  id: "scenario/136/token/1",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "97.1",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "eee" },
              { x: -3, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "nne" },
              { x: -6, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "156.2" },
                  id: "section/97.1/token/2",
                },
              },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -5, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 1, type: "Difficult Terrain" },
              { x: -4, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Trap" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -5, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "156.2",
        reference: { tile: "14-B", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -2, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: 2 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -3, y: 7, levels: "nne" },
              { x: 2, y: 2, levels: "nee" },
            ],
          },
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: -2, y: 8, levels: "ann" },
              { x: 0, y: 6, levels: "eee" },
              { x: -2, y: 4, levels: "eee" },
              { x: 2, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -1, y: 3, type: "Difficult Terrain" },
              { x: 1, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Trap" },
              { x: 1, y: 2, type: "Trap" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -2, y: 7, type: "Obstacle" },
              { x: 1, y: 3, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -3, y: 8 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-B",
        orientation: "0",
        center: { x: -6, y: -1 },
        origin: { x: -3, y: -4 },
      },
      {
        name: "14-B",
        orientation: "270",
        center: { x: 6, y: 2 },
        origin: { x: 7, y: -3 },
      },
      {
        name: "07-A",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 5, y: -2 },
      },
    ],
  },
  "113": {
    id: "113",
    maps: [
      {
        type: "scenario",
        name: 137,
        reference: { tile: "06-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: -3 },
              { x: 0, y: -4 },
              { x: 1, y: -4 },
              { x: 1, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: 3, y: -6 },
            ],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "nee" },
              { x: -1, y: 0 },
              { x: 2, y: -8, levels: "ann" },
              { x: 3, y: -8 },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "154.1" },
                  id: "scenario/137/token/1",
                },
              },
              {
                x: 4,
                y: -7,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "112.1" },
                  id: "scenario/137/token/2",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 2, y: -6, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "112.1",
        reference: { tile: "02-E", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -4, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 2 }] },
          { name: "goal", orientation: 0, positions: [{ x: 0, y: 0 }] },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [{ x: -2, y: 0, levels: "nee" }],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -1, y: 2, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "154.1" },
                  id: "section/112.1/token/4",
                },
              },
              {
                x: 0,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "146.5" },
                  id: "section/112.1/token/5",
                },
              },
            ],
          },
          { name: "Log", orientation: 60, positions: [{ x: -1, y: 1 }] },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "146.5",
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "goal", orientation: 0, positions: [{ x: -1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "nee" },
              { x: -4, y: 0, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -2, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          { name: "Log", orientation: 300, positions: [{ x: -6, y: 1 }] },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -5, y: 0, type: "Obstacle" }],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -3, y: 0, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "154.1",
        reference: { tile: "13-C", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "goal", orientation: 0, positions: [{ x: 4, y: -1 }] },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nnn" },
              { x: 2, y: -2, levels: "ann" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 2, y: -1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 5, y: -4, type: "Obstacle" },
              { x: 3, y: -5, type: "Obstacle" },
            ],
          },
          { name: "Tree", orientation: 180, positions: [{ x: 3, y: -2 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: -1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      { type: "section", name: "183.2", triggers: [] },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "180",
        center: { x: -3, y: 3 },
        origin: { x: -6, y: 6 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: 6, y: -3 },
        origin: { x: 10, y: -4 },
      },
      {
        name: "06-A",
        orientation: "180",
        center: { x: -5, y: 0 },
        origin: { x: -6, y: 4 },
      },
      {
        name: "04-C",
        orientation: "240",
        center: { x: 4, y: 2 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "02-E",
        orientation: "0",
        center: { x: 0, y: -3 },
        origin: { x: 2, y: -5 },
      },
    ],
  },
  "114": {
    id: "114",
    maps: [
      {
        type: "scenario",
        name: 138,
        reference: { tile: "13-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -2, y: 4 },
              { x: -1, y: 3 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -4, y: 0 },
            ],
          },
          { name: "c", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "d", orientation: 0, positions: [{ x: -5, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -6, y: 5 },
              { x: -4, y: 1 },
              { x: -3, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "ann" },
              { x: -5, y: 3, levels: "aan" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -3, y: 4, levels: "nee" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "ane" },
              { x: -2, y: 3, levels: "nnn" },
              { x: 0, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: { id: "scenario/138/token/1" },
              },
              {
                x: -2,
                y: 4,
                type: "Door",
                trigger: { id: "scenario/138/token/1" },
              },
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: { id: "scenario/138/token/1" },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 6,
                type: "Objective",
                trigger: {
                  type: "on-death",
                  action: "trigger",
                  what: "scenario/138/global/pillars",
                  id: "scenario/138/token/b",
                },
              },
              { x: -4, y: 4, type: "Objective" },
              {
                x: -1,
                y: 2,
                type: "Objective",
                trigger: {
                  type: "on-death",
                  action: "trigger",
                  what: "scenario/138/global/pillars",
                  id: "scenario/138/token/b",
                },
              },
              { x: -3, y: 1, type: "Objective" },
            ],
          },
        ],
        triggers: [
          {
            type: "countDown",
            current: 2,
            action: "reveal",
            what: { type: "section", name: "159.1" },
            also: [{ action: "open", what: "scenario/138/token/1" }],
            id: "scenario/138/global/pillars",
          },
        ],
      },
      {
        type: "section",
        name: "159.1",
        reference: { tile: "13-C", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -7, y: 5 },
              { x: -6, y: 3 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -7, y: 5 },
              { x: -6, y: 3 },
            ],
          },
          { name: "e", orientation: 0, positions: [{ x: -3, y: 6 }] },
          { name: "f", orientation: 0, positions: [{ x: -3, y: 0 }] },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "ann" },
              { x: -4, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "nee" },
              { x: -3, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "nnn" },
              { x: -2, y: 4, levels: "aae" },
              { x: -1, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -6, y: 5, type: "Difficult Terrain" },
              { x: -6, y: 4, type: "Difficult Terrain" },
              { x: -5, y: 3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -3, y: 5, type: "Objective" },
              { x: -5, y: 4, type: "Objective" },
              { x: -1, y: 2, type: "Objective" },
              { x: -2, y: 0, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 5, y: -3 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 0, y: -3 },
      },
    ],
  },
  "115": {
    id: "115",
    maps: [
      { type: "scenario", name: 139, triggers: [] },
      {
        type: "scenario",
        name: 140,
        reference: { tile: "13-A", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -10, y: 10 },
              { x: 0, y: 2 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -6, y: 10 },
              { x: -5, y: 3 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 2 },
              { x: -4, y: 1 },
              { x: -4, y: 0 },
              { x: -3, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "aan" },
              { x: -1, y: 1, levels: "nnn" },
              { x: -7, y: 6, levels: "nnns2" },
            ],
          },
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "aee" },
              { x: -2, y: 4, levels: "nnes" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -6, y: 9, levels: "aan" },
              { x: -10, y: 5, levels: "nne" },
              { x: 2, y: 2, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 7, type: "Corridor" },
              { x: -5, y: 7, type: "Corridor" },
              { x: -7, y: 6 },
              { x: -7, y: 5, type: "Corridor" },
              { x: 0, y: 2, type: "Corridor" },
              { x: -1, y: 4, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 3 },
              { x: -7, y: 6 },
              { x: -2, y: 4 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 3 },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -9, y: 8, type: "Objective" },
              { x: -6, y: 8, type: "Objective" },
              { x: -10, y: 6, type: "Objective" },
              { x: -3, y: 6, type: "Objective" },
              { x: -5, y: 5, type: "Objective" },
              { x: 0, y: 4, type: "Objective" },
              { x: -2, y: 3, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-A",
        orientation: "0",
        center: { x: 0, y: -1 },
        origin: { x: 3, y: -4 },
      },
      {
        name: "11-C",
        orientation: "240",
        center: { x: -5, y: 3 },
        origin: { x: -8, y: 1 },
      },
      {
        name: "02-G",
        orientation: "180",
        center: { x: 4, y: -1 },
        origin: { x: 2, y: 1 },
      },
    ],
  },
  "116": {
    id: "116",
    maps: [
      {
        type: "scenario",
        name: 140,
        reference: { tile: "13-C", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -15, y: 6 }] },
          { name: "b", orientation: 0, positions: [{ x: -1, y: 1 }] },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -12, y: 6 },
              { x: -10, y: 0 },
            ],
          },
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -4, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 4 },
              { x: -2, y: 4 },
              { x: -2, y: 3 },
              { x: -2, y: 2 },
              { x: -1, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -6, y: 3, levels: "aans" },
              { x: -5, y: 0, levels: "nnes" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -9, y: 3, levels: "nnns3" }],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -9, y: 5, levels: "nee" },
              { x: -8, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -15, y: 6, type: "Corridor" },
              { x: -14, y: 5 },
              { x: -13, y: 4, type: "Corridor" },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Corridor" },
              { x: -1, y: 1 },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [{ x: -6, y: 3 }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 300,
            positions: [{ x: -3, y: 2 }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -10, y: 4, type: "Corridor" },
              { x: -11, y: 3, type: "Corridor" },
              { x: -7, y: 2, type: "Corridor" },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -4, y: 0 },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Difficult Terrain" },
              { x: -9, y: 4, type: "Difficult Terrain" },
              { x: -8, y: 3, type: "Difficult Terrain" },
              { x: -6, y: 1, type: "Difficult Terrain" },
              { x: -5, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [
              { x: -7, y: 4 },
              { x: -5, y: 3 },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -12, y: 4, type: "Obstacle" },
              { x: -3, y: 3, type: "Obstacle" },
              { x: -10, y: 2, type: "Obstacle" },
              { x: -4, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 141, triggers: [] },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "13-C",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 7, y: -3 },
      },
    ],
  },
  "117": {
    id: "117",
    maps: [
      {
        type: "scenario",
        name: 142,
        reference: { tile: "10-D", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -9 }] },
          { name: "2g", orientation: 0, positions: [{ x: 10, y: -9 }] },
          { name: "a", orientation: 0, positions: [{ x: 8, y: -11 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 3, y: 0 },
              { x: 4, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: 1, y: -2, levels: "nnn" },
              { x: 5, y: -2, levels: "eee" },
              { x: 2, y: -3, levels: "eee" },
              { x: 2, y: -4, levels: "aan" },
              { x: 6, y: -4, levels: "nnn" },
              { x: 7, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 4, y: -3, levels: "eee" },
              { x: 4, y: -7, levels: "nne" },
              { x: 8, y: -7, levels: "nee" },
              { x: 7, y: -12, levels: "eee" },
              { x: 10, y: -12, levels: "eee" },
            ],
          },
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [
              { x: 8, y: -8, levels: "ane" },
              { x: 5, y: -10, levels: "nnn" },
              { x: 6, y: -10, levels: "aan" },
              { x: 8, y: -10, levels: "eee" },
            ],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: 4, y: -4, levels: "nnn" },
              { x: 6, y: -6, levels: "nnn" },
              { x: 7, y: -8, levels: "nee" },
              { x: 6, y: -9, levels: "nee" },
              { x: 8, y: -12, levels: "aan" },
              { x: 9, y: -12, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 4,
                y: -9,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "168.6" },
                  id: "scenario/142/token/1",
                },
              },
              {
                x: 10,
                y: -9,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "36.3" },
                  id: "scenario/142/token/2",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 6, y: -5, type: "Obstacle" }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -5 }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 4, y: -5 }],
          },
          { name: "Bear Trap", orientation: 0, positions: [{ x: 8, y: -11 }] },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 5, y: -4 },
              { x: 5, y: -8 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "36.3",
        reference: { tile: "02-G", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -12, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -12, y: -2 }] },
          { name: "3", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "a", orientation: 0, positions: [{ x: -10, y: 0 }] },
        ],
        monsters: [
          { name: "Hound", orientation: 0, positions: [{ x: -12, y: 0 }] },
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [{ x: -10, y: -2 }],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -9, y: -1 },
              { x: -9, y: -3 },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -11, y: -2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "168.6",
        reference: { tile: "02-G", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -17, y: 12 },
              { x: 0, y: 2 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -17, y: 12 },
              { x: 0, y: 2 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -15, y: 9 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "nne" }],
          },
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "nee" }],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "eee" },
              { x: -1, y: 0, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Trap" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 4, y: -4 },
      },
      {
        name: "10-D",
        orientation: "180",
        center: { x: -3, y: 6 },
        origin: { x: -6, y: 8 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: -4, y: -1 },
        origin: { x: -2, y: -3 },
      },
      {
        name: "02-E",
        orientation: "180",
        center: { x: 6, y: -1 },
        origin: { x: 4, y: 1 },
      },
    ],
  },
  "118": {
    id: "118",
    maps: [
      {
        type: "scenario",
        name: 143,
        reference: { tile: "03-D", tileOrientation: "60" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -2, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: -1 },
              { x: -4, y: -2 },
              { x: -3, y: -2 },
              { x: -3, y: -3 },
              { x: -2, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "eee" },
              { x: 0, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -1, y: -2, levels: "nnn" },
              { x: 0, y: -2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "125.2" },
                  id: "scenario/143/token/1",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "118.2",
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -2, y: 6 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: 6 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "ann" },
              { x: -4, y: 3, levels: "nne" },
              { x: -2, y: 2, levels: "nnn" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "eee" },
              { x: 0, y: 1, levels: "ane" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nne" },
              { x: -3, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -3, y: 4, type: "Difficult Terrain" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Obstacle" },
              { x: -5, y: 3, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "125.2",
        reference: { tile: "12-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -7, y: 0 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "aan" },
              { x: -2, y: 3, levels: "nnn" },
              { x: -3, y: 2, levels: "nee" },
            ],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -7, y: 3, levels: "eee" },
              { x: -6, y: 0, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -7,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "118.2" },
                  id: "section/125.2/token/2",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 5, type: "Difficult Terrain" },
              { x: -7, y: 2, type: "Difficult Terrain" },
              { x: -6, y: 1, type: "Difficult Terrain" },
              { x: -2, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [{ x: -6, y: 4, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-B",
        orientation: "0",
        center: { x: -4, y: -1 },
        origin: { x: -1, y: -4 },
      },
      {
        name: "12-B",
        orientation: "0",
        center: { x: 0, y: 4 },
        origin: { x: 4, y: 2 },
      },
      {
        name: "03-D",
        orientation: "60",
        center: { x: 4, y: -2 },
        origin: { x: 6, y: -1 },
      },
    ],
  },
  "119": {
    id: "119",
    maps: [
      {
        type: "scenario",
        name: 144,
        reference: { tile: "13-C", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 2, y: 1 }] },
          { name: "a", orientation: 0, positions: [{ x: 5, y: -6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 4, y: -5 },
              { x: 5, y: -5 },
              { x: 4, y: -6 },
              { x: 6, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nee" }],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [{ x: 3, y: -2, levels: "nnn" }],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [{ x: 4, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "96.2" },
                  id: "scenario/144/token/1",
                },
              },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: 5, y: -3, type: "Obstacle" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 2, y: -1 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "96.2",
        reference: { tile: "04-C", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -3 }] },
        ],
        monsters: [
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [{ x: 0, y: 2, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 1, y: 3 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -1 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [
              { x: 1, y: 2 },
              { x: 2, y: 0 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "161.2",
        reference: { tile: "02-E", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 2 }] },
          { name: "b", orientation: 0, positions: [{ x: -9, y: 11 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -8, y: 11, levels: "aan" },
              { x: -7, y: 9, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nnn" },
              { x: -4, y: 3, levels: "nne" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -4, y: 7, levels: "nnn" },
              { x: -5, y: 5, levels: "nee" },
              { x: -2, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [{ x: -6, y: 11, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: -4, y: 4, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: -4, y: 4, type: "Corridor" }],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [{ x: -5, y: 8 }],
          },
          {
            name: "Large Water",
            orientation: 300,
            positions: [
              { x: -6, y: 9, type: "Difficult Terrain" },
              { x: -4, y: 5, type: "Difficult Terrain" },
              { x: -2, y: 2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -7, y: 11, type: "Difficult Terrain" },
              { x: -3, y: 4, type: "Difficult Terrain" },
              { x: -1, y: 3, type: "Difficult Terrain" },
              { x: -1, y: 2, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 3 },
        origin: { x: 3, y: 0 },
      },
      {
        name: "13-C",
        orientation: "180",
        center: { x: 7, y: -11 },
        origin: { x: 4, y: -8 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -8, y: 9 },
        origin: { x: -5, y: 6 },
      },
      {
        name: "04-C",
        orientation: "240",
        center: { x: 4, y: -4 },
        origin: { x: 2, y: -4 },
      },
      {
        name: "02-E",
        orientation: "0",
        center: { x: -5, y: 3 },
        origin: { x: -3, y: 1 },
      },
    ],
  },
  "12": {
    id: "12",
    maps: [
      {
        type: "scenario",
        name: 16,
        reference: { tile: "16-C", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 9, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 2, y: -3 },
              { x: 2, y: -4 },
              { x: 3, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "ane" },
              { x: 4, y: 0, levels: "eee" },
              { x: 6, y: 0, levels: "nne" },
              { x: 5, y: -6, levels: "ane" },
              { x: 7, y: -6, levels: "eee" },
              { x: 9, y: -6, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 9,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "34.1" },
                  id: "scenario/16/token/1",
                },
              },
            ],
          },
          {
            name: "Barricade",
            orientation: 60,
            positions: [
              { x: 4, y: -5 },
              { x: 6, y: -5 },
              { x: 8, y: -5 },
            ],
          },
          {
            name: "Barricade",
            orientation: 300,
            positions: [
              { x: 2, y: -1, type: "Obstacle" },
              { x: 4, y: -1, type: "Obstacle" },
              { x: 6, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 0, y: 0, type: "Obstacle" },
              { x: 7, y: 0, type: "Obstacle" },
              { x: 3, y: -6, type: "Obstacle" },
              { x: 10, y: -6, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "34.1",
        reference: { tile: "11-E", tileOrientation: "300" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: 5 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 5 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 2, y: 8, levels: "nee" },
              { x: 5, y: 2, levels: "nee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 2, y: 6, levels: "aae" },
              { x: 2, y: 5 },
              { x: 3, y: 4, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Dungeon Corridor",
            orientation: 60,
            positions: [{ x: -2, y: 8 }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 300,
            positions: [{ x: 1, y: 2, type: "Corridor" }],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 0, y: 8, type: "Trap" },
              { x: -4, y: 7, type: "Trap" },
              { x: -3, y: 7, type: "Trap" },
              { x: -2, y: 3, type: "Trap" },
              { x: -1, y: 3, type: "Trap" },
              { x: 3, y: 2, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 9, type: "Difficult Terrain" },
              { x: 0, y: 6, type: "Difficult Terrain" },
              { x: 0, y: 2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: 5, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "180",
        center: { x: -6, y: 0 },
        origin: { x: -11, y: 3 },
      },
      {
        name: "15-C",
        orientation: "0",
        center: { x: 5, y: 0 },
        origin: { x: 8, y: -3 },
      },
      {
        name: "11-E",
        orientation: "300",
        center: { x: 1, y: 0 },
        origin: { x: 3, y: -5 },
      },
    ],
  },
  "120": {
    id: "120",
    maps: [
      {
        type: "scenario",
        name: 145,
        reference: { tile: "10-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -7, y: 4 },
              { x: -6, y: 2 },
              { x: -4, y: 0 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nee" },
              { x: -2, y: 4, levels: "eee" },
              { x: -4, y: 3, levels: "nne" },
              { x: -1, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "nee" },
              { x: -1, y: 2, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "101.1" },
                  id: "scenario/145/token/1",
                },
              },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
              { x: -1, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "101.1",
        reference: { tile: "04-D", tileOrientation: "300" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -2, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -2, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 6, y: -3 }] },
        ],
        monsters: [
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "eee" },
              { x: 2, y: 2, levels: "ane" },
              { x: 5, y: -4, levels: "nne" },
            ],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "nee" },
              { x: -1, y: 1, levels: "nnn" },
              { x: 1, y: 1, levels: "nnn" },
              { x: 0, y: 0, levels: "ann" },
              { x: 2, y: -2, levels: "nee" },
              { x: 2, y: -4, levels: "ann" },
              { x: 4, y: -4, levels: "nne" },
              { x: 2, y: -1, levels: "nnes" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 6,
                y: -3,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "157.1" },
                  id: "section/101.1/token/2",
                },
              },
            ],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 2, y: -1 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "157.1",
        reference: { tile: "02-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -2 }] },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nne" },
              { x: 3, y: -2, levels: "nne" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: 2, y: -1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: 3, y: -1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "10-B",
        orientation: "0",
        center: { x: -5, y: -2 },
        origin: { x: -2, y: -4 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 5, y: -2 },
      },
      {
        name: "04-D",
        orientation: "300",
        center: { x: -1, y: 4 },
        origin: { x: -1, y: 2 },
      },
      {
        name: "02-A",
        orientation: "180",
        center: { x: 7, y: -1 },
        origin: { x: 5, y: 1 },
      },
    ],
  },
  "121": {
    id: "121",
    maps: [
      {
        type: "scenario",
        name: 146,
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 5 },
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: -5, y: 3 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
              { x: -4, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [
              { x: -3, y: 5, levels: "nee" },
              { x: -1, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "aan" },
              { x: -2, y: 3, levels: "eee" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "115.2" },
                  id: "scenario/146/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "76.2",
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 5, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: -5 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: -1,
                trigger: {
                  type: "door",
                  display: "Section 100.1",
                  action: "reveal",
                  what: { type: "section", name: "100.1" },
                  id: "section/76.2/token/a",
                },
              },
              {
                x: 4,
                y: -1,
                type: "Corridor",
                trigger: {
                  type: "door",
                  display: "Section 123.1",
                  action: "reveal",
                  what: { type: "section", name: "123.1" },
                  id: "section/76.2/token/b",
                },
              },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: 3, y: -3, type: "Obstacle" },
              { x: 6, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "115.2",
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 3 }] },
        ],
        monsters: [
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "nnn" },
              { x: -1, y: 1, levels: "ane" },
              { x: 0, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "ann" },
              { x: -6, y: 1, levels: "nan" },
              { x: -5, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "76.2" },
                  id: "section/115.2/token/2",
                },
              },
            ],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -5, y: 2, type: "Trap" },
              { x: -4, y: 2, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "123.1",
        reference: { tile: "15-C", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -5, y: 6 }] },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 6 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 2 }] },
        ],
        monsters: [
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "ann" },
              { x: -5, y: 2, levels: "aan" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -2, y: 1, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Sarcophagus",
            orientation: 60,
            positions: [{ x: -1, y: 2 }],
          },
          {
            name: "Sarcophagus",
            orientation: 300,
            positions: [{ x: -3, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: 5, y: -6 },
        origin: { x: 8, y: -9 },
      },
      {
        name: "13-E",
        orientation: "0",
        center: { x: -5, y: 1 },
        origin: { x: -2, y: -2 },
      },
      {
        name: "10-B",
        orientation: "180",
        center: { x: -2, y: 6 },
        origin: { x: -5, y: 8 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 1, y: 1 },
        origin: { x: 5, y: 0 },
      },
    ],
  },
  "122": {
    id: "122",
    maps: [
      {
        type: "scenario",
        name: 147,
        reference: { tile: "02-K", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -3, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 3 },
              { x: -1, y: 2 },
              { x: 0, y: 1 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "98.1" },
                  id: "scenario/147/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: -1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "152.1" },
                  id: "scenario/147/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -4, y: 3, type: "Hazardous Terrain" },
              { x: -3, y: 1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [{ x: -1, y: 1 }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: -3, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "8.4",
        reference: { tile: "11-B", tileOrientation: "300" },
        tokens: [{ name: "6", orientation: 0, positions: [{ x: -5, y: 5 }] }],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "eee" },
              { x: -3, y: 3, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "aae" },
              { x: 1, y: 1, levels: "ene" },
            ],
          },
        ],
        overlays: [
          { name: "Cave Door", orientation: 0, positions: [{ x: -3, y: 7 }] },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Trap" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [{ x: -1, y: 3, type: "Hazardous Terrain" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Difficult Terrain" }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 3, type: "Icy Terrain" },
              { x: -2, y: 2, type: "Icy Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Obstacle" },
              { x: -4, y: 5, type: "Obstacle" },
              { x: -3, y: 4, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -4, y: 7 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 5,
                type: "Treasure",
                trigger: {
                  type: "door",
                  display: "Section 109.3",
                  action: "reveal",
                  what: { type: "section", name: "109.3" },
                  id: "section/8.4/token/goal",
                },
              },
              { x: 0, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "98.1",
        reference: { tile: "15-C", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
        ],
        monsters: [
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -4, y: 6 },
              { x: -6, y: 5, levels: "aee" },
              { x: -2, y: 5, levels: "aee" },
              { x: 0, y: 2, levels: "nnn" },
              { x: -4, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 6, type: "Hazardous Terrain" },
              { x: -6, y: 4, type: "Hazardous Terrain" },
              { x: 0, y: 1, type: "Hazardous Terrain" },
              { x: -3, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -5, y: 5, type: "Obstacle" },
              { x: -2, y: 4, type: "Obstacle" },
              { x: -4, y: 2, type: "Obstacle" },
              { x: -2, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "145.1",
        reference: { tile: "11-B", tileOrientation: "300" },
        tokens: [{ name: "5", orientation: 0, positions: [{ x: -3, y: 7 }] }],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "eee" },
              { x: -3, y: 3, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "aae" },
              { x: 1, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Trap" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [{ x: -1, y: 3, type: "Hazardous Terrain" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Difficult Terrain" }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 3, type: "Icy Terrain" },
              { x: -2, y: 2, type: "Icy Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Obstacle" },
              { x: -4, y: 5, type: "Obstacle" },
              { x: -3, y: 4, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -4, y: 7 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 5,
                type: "Treasure",
                trigger: {
                  type: "door",
                  display: "Section 109.3",
                  action: "reveal",
                  what: { type: "section", name: "109.3" },
                  id: "section/145.1/token/goal",
                },
              },
              { x: 0, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "151.1",
        reference: { tile: "12-B", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 7 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 7 }] },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: 6, levels: "nee" },
              { x: 1, y: 4, levels: "nne" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 3, y: 2, levels: "nen" },
              { x: 5, y: 2, levels: "nnn" },
              { x: 5, y: -1, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 2, y: 5, type: "Trap" },
              { x: 5, y: 0, type: "Trap" },
              { x: 3, y: -1, type: "Trap" },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: 3, type: "Hazardous Terrain" },
              { x: 2, y: 1, type: "Hazardous Terrain" },
              { x: 1, y: -1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 4, y: 1, type: "Difficult Terrain" },
              { x: 1, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 1, type: "Icy Terrain" },
              { x: 2, y: -1 },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 4, type: "Icy Terrain" },
              { x: 4, y: 0 },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 2, y: 3, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: -1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "152.1",
        reference: { tile: "12-B", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 7 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 7 }] },
          { name: "3g", orientation: 0, positions: [{ x: 6, y: 1 }] },
          { name: "e", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "f", orientation: 0, positions: [{ x: 0, y: 6 }] },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 1, y: 4, levels: "nne" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 1, y: 6, levels: "aan" },
              { x: 5, y: 2, levels: "nnn" },
              { x: 1, y: 1, levels: "nen" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "179.2" },
                  also: [{ action: "lock", what: "section/152.1/token/4" }],
                  id: "section/152.1/token/3",
                },
              },
              {
                x: 2,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "172.1" },
                  also: [{ action: "lock", what: "section/152.1/token/3" }],
                  id: "section/152.1/token/4",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 2, y: 5, type: "Trap" },
              { x: 5, y: 0, type: "Trap" },
              { x: 3, y: -1, type: "Trap" },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: 3, type: "Hazardous Terrain" },
              { x: 2, y: 1, type: "Hazardous Terrain" },
              { x: 1, y: -1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 4, y: 1, type: "Difficult Terrain" },
              { x: 1, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 1 },
              { x: 2, y: -1, type: "Icy Terrain" },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 4, type: "Icy Terrain" },
              { x: 4, y: 0, type: "Icy Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 2, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "172.1",
        reference: { tile: "07-A", tileOrientation: "180" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: 0, y: 1 }] }],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 7, y: -2, levels: "eee" },
              { x: 4, y: -2, levels: "ann" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nnn" },
              { x: 2, y: -2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 8,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "8.4" },
                  id: "section/172.1/token/6",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 1, y: -2, type: "Trap" },
              { x: 5, y: -2, type: "Trap" },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 5, y: 0, type: "Hazardous Terrain" },
              { x: 7, y: -1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Difficult Terrain" }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 4, y: 0, type: "Icy Terrain" },
              { x: 4, y: -1, type: "Icy Terrain" },
              { x: 6, y: -1, type: "Icy Terrain" },
              { x: 6, y: -2, type: "Icy Terrain" },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: 3, y: -1, type: "Icy Terrain" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 6, y: 0, type: "Obstacle" },
              { x: 2, y: -1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "179.2",
        reference: { tile: "01-F", tileOrientation: "240" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "c", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "d", orientation: 0, positions: [{ x: 1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "nnn" }],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "eee" },
              { x: 1, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 5, y: 0, levels: "aee" },
              { x: 5, y: -1, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "145.1" },
                  id: "section/179.2/token/5",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [{ x: 2, y: 1 }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 3, y: 1, type: "Obstacle" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: 4, y: -2 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: -7, y: 12 },
        origin: { x: -4, y: 9 },
      },
      {
        name: "12-B",
        orientation: "240",
        center: { x: -1, y: -2 },
        origin: { x: -3, y: -4 },
      },
      {
        name: "11-B",
        orientation: "300",
        center: { x: 10, y: -8 },
        origin: { x: 12, y: -13 },
      },
      {
        name: "07-A",
        orientation: "180",
        center: { x: 3, y: -8 },
        origin: { x: -1, y: -7 },
      },
      {
        name: "02-K",
        orientation: "0",
        center: { x: -4, y: 6 },
        origin: { x: -2, y: 4 },
      },
      {
        name: "01-F",
        orientation: "240",
        center: { x: 4, y: -2 },
        origin: { x: 4, y: -4 },
      },
    ],
  },
  "123": {
    id: "123",
    maps: [
      {
        type: "scenario",
        name: 148,
        reference: { tile: "12-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 0 },
              { x: -5, y: 0 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "nne" },
              { x: -7, y: 5, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "104.2" },
                  id: "scenario/148/token/1",
                },
              },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 0,
            positions: [{ x: -5, y: 3, type: "Obstacle" }],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -6, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "countDown",
            current: 2,
            action: "unlock",
            what: "section/104.2/token/4",
            also: [{ action: "broadcast", message: "Door 4 is now unlocked" }],
            id: "scenario/148/global/door4",
          },
        ],
      },
      { type: "scenario", name: 149, triggers: [] },
      {
        type: "section",
        name: "104.2",
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 6 }] },
        ],
        monsters: [
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "nne" },
              { x: -1, y: 2, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  locked: true,
                  what: { type: "section", name: "128.4" },
                  id: "section/104.2/token/4",
                },
              },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Obstacle" },
              { x: -2, y: 3, type: "Obstacle" },
              { x: -4, y: 2, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -5, y: 4, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "128.4",
        reference: { tile: "04-B", tileOrientation: "120" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: 2, y: -5 }] }],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [{ x: -1, y: -2, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Control Console",
            orientation: 0,
            positions: [{ x: 0, y: -3, type: "Obstacle" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -2, y: 0 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "158.1",
        reference: { tile: "11-F", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -5, y: 2, levels: "eee" },
              { x: -3, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -9, y: 6, levels: "ane" },
              { x: -10, y: 5, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -9,
                y: 5,
                type: "Pressure Plate",
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/148/global/door4",
                  id: "section/158.1/token/a",
                },
              },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [{ x: -6, y: 3, type: "Obstacle" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -4, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "193.3",
        reference: { tile: "03-B", tileOrientation: "60" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -4, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -4, y: -3 }] },
        ],
        monsters: [
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -2, y: -1, levels: "eee" },
              { x: 0, y: -3, levels: "ane" },
            ],
          },
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "eee" },
              { x: 0, y: 0, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/148/global/door4",
                  id: "section/193.3/token/a",
                },
              },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Obstacle" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -2, y: -2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 1, y: -1 },
        origin: { x: 4, y: -4 },
      },
      {
        name: "12-C",
        orientation: "0",
        center: { x: 5, y: -9 },
        origin: { x: 9, y: -11 },
      },
      {
        name: "11-F",
        orientation: "0",
        center: { x: -7, y: 1 },
        origin: { x: -2, y: -2 },
      },
      {
        name: "04-B",
        orientation: "120",
        center: { x: -3, y: 6 },
        origin: { x: -3, y: 8 },
      },
      {
        name: "03-B",
        orientation: "60",
        center: { x: 4, y: 4 },
        origin: { x: 6, y: 5 },
      },
    ],
  },
  "124": {
    id: "124",
    maps: [
      {
        type: "scenario",
        name: 149,
        reference: { tile: "09-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -5, y: 6 },
              { x: -6, y: 5 },
              { x: -5, y: 5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "nne" },
              { x: 0, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -1, y: 5, levels: "eee" },
              { x: 0, y: 1, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Door" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Hazardous Terrain" },
              { x: -1, y: 3, type: "Hazardous Terrain" },
              { x: -2, y: 1, type: "Hazardous Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "119.4",
        reference: { tile: "13-C", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: -7 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 2, y: -3, levels: "ane" },
              { x: 5, y: -3, levels: "eee" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "ann" },
              { x: 4, y: 0, levels: "nnn" },
              { x: 3, y: -6, levels: "nne" },
              { x: 7, y: -6, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: -7,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "195.3" },
                  id: "section/119.4/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 1, y: 0, type: "Hazardous Terrain" },
              { x: 4, y: -1, type: "Hazardous Terrain" },
              { x: 2, y: -4, type: "Hazardous Terrain" },
              { x: 6, y: -6, type: "Hazardous Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "195.3",
        reference: { tile: "04-C", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 3 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nne" },
              { x: 4, y: -1, levels: "nee" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "nee" },
              { x: 2, y: 2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          { name: "Glowing Orb", orientation: 0, positions: [{ x: 3, y: -2 }] },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: 1, type: "Hazardous Terrain" },
              { x: 0, y: 0, type: "Hazardous Terrain" },
              { x: 2, y: -2 },
              { x: 4, y: -2 },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "180",
        center: { x: 0, y: 0 },
        origin: { x: -3, y: 3 },
      },
      {
        name: "09-A",
        orientation: "0",
        center: { x: -4, y: 8 },
        origin: { x: -2, y: 5 },
      },
      {
        name: "04-C",
        orientation: "240",
        center: { x: 4, y: -7 },
        origin: { x: 2, y: -7 },
      },
    ],
  },
  "125": {
    id: "125",
    maps: [
      {
        type: "scenario",
        name: 150,
        reference: { tile: "12-C", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 5, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 5, y: 1 }] },
          { name: "b", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "c", orientation: 0, positions: [{ x: 6, y: -2 }] },
          { name: "d", orientation: 0, positions: [{ x: 3, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 4, y: -4 },
              { x: 5, y: -4 },
              { x: 6, y: -4 },
              { x: 4, y: -5 },
              { x: 5, y: -5 },
              { x: 6, y: -5 },
              { x: 7, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "ann" },
              { x: 2, y: -1, levels: "nne" },
              { x: 7, y: -1, levels: "nnn" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "ann" },
              { x: 5, y: 0, levels: "eee" },
              { x: 6, y: 0, levels: "ane" },
              { x: 5, y: -2, levels: "nnn" },
              { x: 2, y: -3, levels: "nnn" },
              { x: 7, y: -3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [{ x: 5, y: 1, type: "Door" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "108.1",
        reference: { tile: "16-D", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -6, y: 5 }] },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -6, y: 3, levels: "aan" },
              { x: -5, y: 3, levels: "nee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -8, y: 5, levels: "eee" },
              { x: -5, y: 4, levels: "ane" },
              { x: -3, y: 4, levels: "eee" },
              { x: -7, y: 3, levels: "aan" },
              { x: -6, y: 1, levels: "nee" },
              { x: -6, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Control Console",
            orientation: 0,
            positions: [
              { x: -7, y: 6, type: "Obstacle" },
              { x: -5, y: 6, type: "Obstacle" },
              { x: -7, y: 2, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -9, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "158.4",
        reference: { tile: "02-F", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2", orientation: 0, positions: [{ x: -2, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: 4 }] },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "eee" },
              { x: 0, y: 1, levels: "aan" },
              { x: -2, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -1, y: 3, levels: "eee" },
              { x: -3, y: 2, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Door" }],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -3, y: 3, type: "Trap" },
              { x: -2, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -1, y: 2, type: "Obstacle" },
              { x: -3, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "0",
        center: { x: -3, y: 6 },
        origin: { x: 2, y: 3 },
      },
      {
        name: "12-C",
        orientation: "180",
        center: { x: 3, y: -6 },
        origin: { x: -1, y: -4 },
      },
      {
        name: "02-F",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 4, y: -2 },
      },
    ],
  },
  "126": {
    id: "126",
    maps: [
      { type: "scenario", name: 151, triggers: [] },
      {
        type: "scenario",
        name: 152,
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -6, y: 7 }] },
          { name: "b", orientation: 0, positions: [{ x: -7, y: 10 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: 3 }] },
          { name: "d", orientation: 0, positions: [{ x: -2, y: 0 }] },
          { name: "e", orientation: 0, positions: [{ x: -6, y: 5 }] },
          {
            name: "f",
            orientation: 0,
            positions: [
              { x: -12, y: 10 },
              { x: -11, y: 8 },
              { x: -9, y: 5 },
              { x: -8, y: 2 },
              { x: -7, y: 0 },
            ],
          },
          { name: "g", orientation: 0, positions: [{ x: -7, y: 1 }] },
          { name: "h", orientation: 0, positions: [{ x: -11, y: 9 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -10, y: 8 },
              { x: -10, y: 7 },
              { x: -10, y: 6 },
              { x: -9, y: 4 },
              { x: -7, y: 2 },
              { x: -8, y: 3 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 3, type: "Corridor" },
              { x: -5, y: 3, type: "Corridor" },
              { x: -3, y: 3, type: "Trap" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 3 },
              { x: -3, y: 3, type: "Trap" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: -2, y: 3 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 60,
            positions: [{ x: -4, y: 2 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: -8, y: 8 }],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -5, y: 7, type: "Trap" },
              { x: -5, y: 6, type: "Trap" },
              { x: -5, y: 5, type: "Trap" },
              { x: -4, y: 4, type: "Trap" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -7, y: 6, type: "Obstacle" },
              { x: -7, y: 5, type: "Obstacle" },
              { x: -6, y: 4, type: "Obstacle" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 240,
            positions: [{ x: -3, y: 5, type: "Obstacle" }],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Objective" },
              { x: -4, y: 5, type: "Objective" },
              { x: -3, y: 4, type: "Objective" },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: -4, y: 7, type: "Objective" },
              { x: -2, y: 4, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: -1, y: 3 },
        origin: { x: -6, y: 6 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: 2, y: -3 },
        origin: { x: 6, y: -4 },
      },
    ],
  },
  "127": {
    id: "127",
    maps: [
      {
        type: "scenario",
        name: 153,
        reference: { tile: "02-D", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 13 },
              { x: -8, y: 12 },
              { x: -7, y: 12 },
              { x: -8, y: 11 },
              { x: -7, y: 11 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "aan" },
              { x: -2, y: 6, levels: "nee" },
              { x: 0, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -4, y: 9, levels: "eee" },
              { x: -5, y: 7, levels: "aee" },
              { x: -3, y: 5, levels: "nnn" },
              { x: -3, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Corridor" }],
          },
          {
            name: "Stairs",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 4,
                type: "Difficult Terrain",
                trigger: {
                  type: "door",
                  display: "Go Below Deck",
                  action: "reveal",
                  what: { type: "section", name: "153.1" },
                  id: "scenario/153/token/a",
                },
              },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -6, y: 8, type: "Obstacle" },
              { x: -3, y: 7, type: "Obstacle" },
            ],
          },
          {
            name: "Barricade",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Obstacle" }],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [{ x: -3, y: 1, type: "Obstacle" }],
          },
          {
            name: "Mast",
            orientation: 0,
            positions: [{ x: -6, y: 10, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "109.2",
        reference: { tile: "02-B", tileOrientation: "0" },
        tokens: [{ name: "d", orientation: 0, positions: [{ x: -1, y: 0 }] }],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "eee" },
              { x: -2, y: 1, levels: "nee" },
              { x: 0, y: 1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Crate",
            orientation: 0,
            positions: [{ x: -1, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 3 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "153.1",
        reference: { tile: "07-G", tileOrientation: "180" },
        tokens: [{ name: "b", orientation: 0, positions: [{ x: 3, y: 0 }] }],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "nee" },
              { x: 6, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nnn" },
              { x: 6, y: -2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Stairs",
            orientation: 90,
            positions: [
              {
                x: 4,
                y: -2,
                type: "Difficult Terrain",
                trigger: {
                  type: "door",
                  display: "Go Lower Below Deck",
                  action: "reveal",
                  what: { type: "section", name: "109.2" },
                  id: "section/153.1/token/c",
                },
              },
            ],
          },
          {
            name: "Stairs",
            orientation: 270,
            positions: [{ x: 3, y: 0, type: "Difficult Terrain" }],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: 7, y: 0, type: "Obstacle" },
              { x: 1, y: -2, type: "Obstacle" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [
              { x: 5, y: 0, type: "Obstacle" },
              { x: 3, y: -2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-A",
        orientation: "90",
        center: { x: -5, y: 3 },
        origin: { x: -1, y: -2 },
      },
      {
        name: "07-G",
        orientation: "180",
        center: { x: 3, y: 2 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "02-D",
        orientation: "0",
        center: { x: -1, y: -5 },
        origin: { x: 1, y: -7 },
      },
      {
        name: "02-B",
        orientation: "0",
        center: { x: 6, y: -3 },
        origin: { x: 8, y: -5 },
      },
    ],
  },
  "128": {
    id: "128",
    maps: [
      { type: "scenario", name: 154, triggers: [] },
      {
        type: "scenario",
        name: 155,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 3 }] },
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "3", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "4g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "a", orientation: 0, positions: [{ x: -3, y: 5 }] },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 3 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -4, y: 5 },
              { x: -2, y: 4 },
              { x: -1, y: 2 },
              { x: -2, y: 1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 4 },
              { x: -3, y: 4 },
              { x: -3, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: -3, y: 0, levels: "aan" },
              { x: -2, y: 0, levels: "nnn" },
              { x: -1, y: 0, levels: "nen" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "ann" },
              { x: -4, y: 6, levels: "nnn" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "aan" },
              { x: -5, y: 3, levels: "nna" },
              { x: -5, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              { x: -6, y: 3, type: "Door" },
              { x: 0, y: 3, type: "Door" },
              { x: -1, y: -1, type: "Door" },
              { x: -1, y: 1, type: "Door" },
            ],
          },
          {
            name: "Huge Water",
            orientation: 180,
            positions: [{ x: -6, y: 5 }],
          },
          { name: "Large Water", orientation: 60, positions: [{ x: 0, y: 2 }] },
          {
            name: "Large Water",
            orientation: 300,
            positions: [{ x: -2, y: 5, type: "Difficult Terrain" }],
          },
        ],
        triggers: [
          {
            type: "round",
            when: { round: 2, state: 0 },
            action: "reveal",
            what: { type: "section", name: "170.1" },
            id: "scenario/155/global/round2",
          },
        ],
      },
      {
        type: "section",
        name: "139.1",
        reference: { tile: "02-G", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 0, y: 2 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: 2 }] },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "nen" },
              { x: -3, y: 1, levels: "aan" },
              { x: -2, y: 0, levels: "aen" },
              { x: -1, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "nnn" },
              { x: 0, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "aan" },
              { x: 0, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "170.1",
        triggers: [
          {
            type: "round",
            when: { round: 3, state: 0 },
            action: "reveal",
            what: { type: "section", name: "152.2" },
            id: "section/170.1/global/round3",
          },
        ],
      },
      {
        type: "section",
        name: "176.3",
        reference: { tile: "01-A", tileOrientation: "180" },
        tokens: [],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nnn" },
              { x: 3, y: 0, levels: "aan" },
              { x: 1, y: -1, levels: "nnn" },
              { x: 2, y: -1, levels: "ann" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "aee" },
              { x: 3, y: -1, levels: "ene" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -2, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 4, y: -2, type: "Corridor" }],
          },
          { name: "Large Water", orientation: 60, positions: [{ x: 4, y: 0 }] },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "02-I",
        orientation: "180",
        center: { x: 5, y: 0 },
        origin: { x: 3, y: 2 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: -3, y: -2 },
      },
      {
        name: "01-C",
        orientation: "0",
        center: { x: 4, y: -6 },
        origin: { x: 6, y: -6 },
      },
      {
        name: "01-A",
        orientation: "0",
        center: { x: -7, y: 6 },
        origin: { x: -5, y: 6 },
      },
    ],
  },
  "129": {
    id: "129",
    maps: [
      {
        type: "scenario",
        name: 155,
        reference: { tile: "10-D", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 13, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 14, y: -6 }] },
          { name: "3g", orientation: 0, positions: [{ x: 12, y: -7 }] },
          { name: "a", orientation: 0, positions: [{ x: 1, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 5, y: 0 },
              { x: 7, y: 0 },
              { x: 10, y: 0 },
              { x: 10, y: -1 },
              { x: 2, y: -3 },
              { x: 2, y: -4 },
              { x: 10, y: -6 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 13,
                y: -3,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "156.4" },
                  id: "scenario/155/token/1",
                },
              },
              {
                x: 14,
                y: -6,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "154.2" },
                  id: "scenario/155/token/2",
                },
              },
              {
                x: 12,
                y: -7,
                type: "Difficult Terrain",
                trigger: { id: "scenario/155/token/3" },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 8, y: -4, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 6, y: -2, type: "Corridor" },
              { x: 7, y: -3 },
              { x: 7, y: -4 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: 6, y: -2, type: "Corridor" },
              { x: 7, y: -3 },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 4, y: -2, type: "Icy Terrain" },
              { x: 12, y: -3 },
              { x: 7, y: -4 },
            ],
          },
          { name: "Log", orientation: 300, positions: [{ x: 11, y: -6 }] },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 11, y: -1 }],
          },
          {
            name: "Tree",
            orientation: 180,
            positions: [
              { x: 10, y: -3 },
              { x: 3, y: -4 },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: 7, y: -2, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "round",
            when: { round: 4, state: 0 },
            action: "reveal",
            what: { type: "section", name: "148.5" },
            also: [{ action: "open", what: "scenario/155/token/3" }],
            id: "scenario/155/global/round4",
          },
        ],
      },
      { type: "scenario", name: 156, triggers: [] },
      {
        type: "section",
        name: "148.5",
        reference: { tile: "02-G", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "3g", orientation: 0, positions: [{ x: -3, y: 4 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "ann" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nnn" }],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "nne" },
              { x: -1, y: 2, levels: "nen" },
              { x: -3, y: 1, levels: "nan" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "154.2",
        reference: { tile: "03-D", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -7, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -7, y: 4 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 3, levels: "nnn" },
              { x: -3, y: 2, levels: "nnn" },
              { x: -4, y: 1, levels: "nnn" },
              { x: -3, y: 1, levels: "ane" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "aan" },
              { x: 0, y: 1, levels: "nnn" },
              { x: 0, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "156.4",
        reference: { tile: "01-G", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "eee" },
              { x: 3, y: -1, levels: "nee" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: 4, y: 0, levels: "ane" },
              { x: 1, y: -1, levels: "eee" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: -1, y: 1 },
        origin: { x: 2, y: -2 },
      },
      {
        name: "10-D",
        orientation: "180",
        center: { x: -8, y: 2 },
        origin: { x: -11, y: 4 },
      },
      {
        name: "03-D",
        orientation: "0",
        center: { x: 7, y: -4 },
        origin: { x: 10, y: -6 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: 2, y: -5 },
        origin: { x: 4, y: -7 },
      },
      {
        name: "01-G",
        orientation: "180",
        center: { x: 4, y: 2 },
        origin: { x: 2, y: 2 },
      },
    ],
  },
  "13": {
    id: "13",
    maps: [
      {
        type: "scenario",
        name: 17,
        reference: { tile: "01-A", tileOrientation: "180" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 7, y: 5 },
              { x: 10, y: -1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 6 },
              { x: 0, y: 5 },
              { x: 0, y: 4 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: 5, y: 6, levels: "aee" },
              { x: 5, y: 5, levels: "eaa" },
              { x: 6, y: 4, levels: "aee" },
              { x: 7, y: 0, levels: "eee" },
              { x: 7, y: -1, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 5, y: 0 }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 5, y: -1, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 5, y: -1, type: "Corridor" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 1, y: 6, type: "Difficult Terrain" },
              { x: 3, y: 5, type: "Difficult Terrain" },
              { x: 6, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 7,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "44.1" },
                  id: "scenario/17/token/1",
                },
              },
              {
                x: 10,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "44.1" },
                  id: "scenario/17/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "12.6",
        reference: { tile: "01-G", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -5, y: -1 }] },
        ],
        monsters: [
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [{ x: -2, y: -1, levels: "nee" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "aan" },
              { x: 2, y: -1, levels: "eee" },
              { x: 4, y: -1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: 0 }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: -1, type: "Corridor" },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 0, y: -1, type: "Corridor" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Difficult Terrain" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "38.2",
        reference: { tile: "07-D", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -1 }] },
        ],
        monsters: [
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "nne" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 6, y: 0, levels: "eee" },
              { x: 6, y: -1, levels: "ann" },
              { x: 5, y: -2, levels: "ann" },
              { x: 8, y: -2, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Difficult Terrain" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "44.1",
        reference: { tile: "06-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -1, y: 1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -1, y: 1 },
            ],
          },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 7 }] },
          { name: "3g", orientation: 0, positions: [{ x: 2, y: 1 }] },
        ],
        monsters: [
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "eee" },
              { x: 1, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: -4, y: 12, levels: "nne" },
              { x: -5, y: 11, levels: "nnn" },
              { x: -2, y: 10, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "38.2" },
                  id: "section/44.1/token/2",
                },
              },
              {
                x: 2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "12.6" },
                  id: "section/44.1/token/3",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: -3, y: 9, type: "Corridor" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -4, y: 11, type: "Difficult Terrain" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 13 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "07-D",
        orientation: "180",
        center: { x: 3, y: 2 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "07-B",
        orientation: "180",
        center: { x: -8, y: 2 },
        origin: { x: -12, y: 3 },
      },
      {
        name: "06-A",
        orientation: "0",
        center: { x: -1, y: -1 },
        origin: { x: 0, y: -5 },
      },
      {
        name: "02-E",
        orientation: "180",
        center: { x: -4, y: 6 },
        origin: { x: -6, y: 8 },
      },
      {
        name: "01-G",
        orientation: "180",
        center: { x: 9, y: -3 },
        origin: { x: 7, y: -3 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: 4, y: -3 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: 4, y: -3 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "01-C",
        orientation: "180",
        center: { x: -4, y: -3 },
        origin: { x: -6, y: -3 },
      },
      {
        name: "01-A",
        orientation: "180",
        center: { x: -9, y: -3 },
        origin: { x: -11, y: -3 },
      },
    ],
  },
  "130": {
    id: "130",
    maps: [
      { type: "scenario", name: 157, triggers: [] },
      {
        type: "scenario",
        name: 158,
        reference: { tile: "01-C", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "10", orientation: 0, positions: [{ x: -3, y: -2 }] },
          { name: "11", orientation: 0, positions: [{ x: 3, y: -11 }] },
          { name: "12", orientation: 0, positions: [{ x: 2, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "2", orientation: 0, positions: [{ x: 1, y: -7 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -7 }] },
          { name: "3", orientation: 0, positions: [{ x: 7, y: -8 }] },
          { name: "3g", orientation: 0, positions: [{ x: 7, y: -8 }] },
          { name: "4", orientation: 0, positions: [{ x: 1, y: -4 }] },
          { name: "5", orientation: 0, positions: [{ x: 6, y: -11 }] },
          { name: "6", orientation: 0, positions: [{ x: 9, y: -6 }] },
          { name: "7", orientation: 0, positions: [{ x: 5, y: -6 }] },
          { name: "8", orientation: 0, positions: [{ x: 1, y: -9 }] },
          { name: "9", orientation: 0, positions: [{ x: 4, y: -9 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -4, y: 1 },
              { x: -3, y: 1 },
              { x: -2, y: 1 },
              { x: -1, y: 1 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: 5, y: -4 },
              { x: 6, y: -5 },
              { x: 6, y: -6 },
            ],
          },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -2, y: -4 },
              { x: -1, y: -5 },
              { x: -1, y: -6 },
            ],
          },
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: 3, y: -4 },
              { x: 1, y: -5 },
              { x: 3, y: -6 },
            ],
          },
          { name: "e", orientation: 0, positions: [{ x: 0, y: -8 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: -3 },
              { x: 5, y: -8 },
              { x: 4, y: -11 },
              { x: 7, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [{ x: 6, y: -7, levels: "ann" }],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: 2, y: -4, levels: "aaes" },
              { x: 0, y: -5, levels: "eees" },
              { x: 2, y: -5, levels: "aeas" },
              { x: 4, y: -5, levels: "eees" },
              { x: 2, y: -6, levels: "aaes" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "aan" },
              { x: 10, y: -6, levels: "nnn" },
              { x: 2, y: -11, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: -1 },
              { x: 4, y: -9, type: "Obstacle" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 7, y: -6 },
              { x: 1, y: -9 },
              { x: 5, y: -9 },
              { x: -2, y: -1 },
              { x: 3, y: -9 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 5, y: -9 }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: -4 },
              { x: 3, y: -6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Huge Water",
            orientation: 180,
            positions: [{ x: 0, y: -5 }],
          },
          { name: "Huge Water", orientation: 0, positions: [{ x: -2, y: -4 }] },
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: 2, y: -4 },
              { x: 3, y: -5 },
              { x: 0, y: -6 },
              { x: 2, y: -6 },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 4, y: -4, type: "Difficult Terrain" },
              { x: 5, y: -4, type: "Difficult Terrain" },
              { x: 5, y: -5 },
              { x: 6, y: -5 },
              { x: 4, y: -6, type: "Difficult Terrain" },
              { x: 5, y: -6, type: "Difficult Terrain" },
              { x: 6, y: -6, type: "Difficult Terrain" },
              { x: 2, y: -4 },
              { x: 3, y: -4 },
              { x: 1, y: -5 },
              { x: 0, y: -5 },
              { x: 2, y: -5 },
              { x: 4, y: -5 },
              { x: 2, y: -6 },
              { x: 3, y: -6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 3, y: -3, type: "Obstacle" },
              { x: 0, y: -7, type: "Difficult Terrain" },
              { x: 4, y: -8 },
            ],
          },
          {
            name: "Tree",
            orientation: 180,
            positions: [
              { x: 6, y: -4 },
              { x: 2, y: -10 },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: 0, y: -2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 9, y: -4, type: "Treasure" }],
          },
        ],
        triggers: [
          {
            type: "round",
            when: { round: 5, state: 0 },
            action: "reveal",
            what: { type: "section", name: "170.1" },
            id: "scenario/158/global/round5",
          },
        ],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: -1, y: 0 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "02-J",
        orientation: "0",
        center: { x: 5, y: 0 },
        origin: { x: 7, y: -2 },
      },
      {
        name: "01-E",
        orientation: "0",
        center: { x: 1, y: -6 },
        origin: { x: 3, y: -6 },
      },
      {
        name: "01-C",
        orientation: "0",
        center: { x: -5, y: 5 },
        origin: { x: -3, y: 5 },
      },
    ],
  },
  "131": {
    id: "131",
    maps: [
      {
        type: "scenario",
        name: 158,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -5, y: 2 }] },
          { name: "b", orientation: 0, positions: [{ x: -6, y: 5 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: 6 }] },
          { name: "d", orientation: 0, positions: [{ x: -1, y: 4 }] },
          { name: "e", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "f", orientation: 0, positions: [{ x: -2, y: 0 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 5 },
              { x: -4, y: 4 },
              { x: -3, y: 4 },
              { x: -3, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [{ x: -1, y: 3, levels: "ene" }],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "nee" },
              { x: -3, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Obstacle" },
              { x: -5, y: 4, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
              { x: -4, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [
          {
            type: "round",
            when: { round: 3, state: 0 },
            action: "reveal",
            what: { type: "section", name: "120.2" },
            id: "scenario/158/global/round3",
          },
          {
            type: "round",
            when: { round: 5, state: 0 },
            action: "reveal",
            what: { type: "section", name: "181.5" },
            id: "scenario/158/global/round5",
          },
          {
            type: "round",
            when: { round: 7, state: 0 },
            action: "reveal",
            what: { type: "section", name: "185.1" },
            id: "scenario/158/global/round7",
          },
          {
            type: "round",
            when: { round: 8, state: 0 },
            action: "reveal",
            what: { type: "section", name: "194.2" },
            id: "scenario/158/global/round7",
          },
        ],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
    ],
  },
  "132": {
    id: "132",
    maps: [
      {
        type: "scenario",
        name: 160,
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: 0 },
              { x: 5, y: -1 },
              { x: 6, y: -2 },
              { x: 6, y: -3 },
              { x: 7, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "ann" },
              { x: 2, y: -1, levels: "eee" },
              { x: 3, y: -2, levels: "aae" },
              { x: 3, y: -4, levels: "nnn" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "eee" },
              { x: 1, y: -2, levels: "ann" },
              { x: 2, y: -3, levels: "nne" },
              { x: 4, y: -4, levels: "aan" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "110.2",
        reference: { tile: "07-E", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 4, y: -1 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nee" },
              { x: 3, y: -2, levels: "nee" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "aae" },
              { x: 1, y: -1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [{ x: 0, y: -1, type: "Door" }],
          },
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 8, y: -1, type: "Corridor" }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 4, y: -1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "129.4",
        reference: { tile: "16-C", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 9, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 9, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 2, y: -3 },
              { x: 2, y: -4 },
              { x: 3, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 4, y: 0, levels: "nee" },
              { x: 5, y: -2, levels: "nnn" },
              { x: 6, y: -4, levels: "aae" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nnn" },
              { x: 7, y: -4, levels: "nnn" },
              { x: 6, y: -6, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 4, y: -2, levels: "aae" },
              { x: 3, y: -3, levels: "ann" },
              { x: 4, y: -4, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Trap" },
              { x: 7, y: -1, type: "Trap" },
              { x: 3, y: -4, type: "Trap" },
              { x: 7, y: -6, type: "Trap" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 6, y: 0, type: "Icy Terrain" },
              { x: 2, y: -1, type: "Icy Terrain" },
              { x: 4, y: -1, type: "Icy Terrain" },
              { x: 8, y: -2, type: "Icy Terrain" },
              { x: 5, y: -3, type: "Icy Terrain" },
              { x: 4, y: -5, type: "Icy Terrain" },
              { x: 7, y: -5, type: "Icy Terrain" },
              { x: 9, y: -5, type: "Icy Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "171.1",
        reference: { tile: "07-E", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 4, y: -1 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 8, y: -1, type: "Corridor" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "180",
        center: { x: -7, y: 0 },
        origin: { x: -12, y: 3 },
      },
      {
        name: "10-B",
        orientation: "180",
        center: { x: 7, y: 1 },
        origin: { x: 4, y: 3 },
      },
      {
        name: "07-E",
        orientation: "180",
        center: { x: 1, y: 0 },
        origin: { x: -3, y: 1 },
      },
    ],
  },
  "133": {
    id: "133",
    maps: [
      {
        type: "scenario",
        name: 161,
        reference: { tile: "09-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -7, y: 6 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 6 }] },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: -5, y: 7 },
              { x: -4, y: 7 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nne" },
              { x: -3, y: 6, levels: "nne" },
              { x: 0, y: 5, levels: "nne" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -1, y: 6, levels: "aan" },
              { x: -3, y: 4, levels: "nnn" },
              { x: -2, y: 4, levels: "ann" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "ann" },
              { x: -1, y: 5, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 7,
                type: "Door",
                trigger: { id: "scenario/161/token/3" },
              },
              {
                x: -4,
                y: 7,
                type: "Door",
                trigger: { id: "scenario/161/token/3" },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -7,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "173.3" },
                  id: "scenario/161/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "186.1" },
                  id: "scenario/161/token/2",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: -5, y: 5, type: "Trap" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -3, y: 5, type: "Obstacle" }],
          },
        ],
        triggers: [
          {
            type: "countDown",
            current: "playerCount",
            action: "open",
            what: "scenario/161/token/3",
            also: [
              { action: "reveal", what: { type: "section", name: "124.2" } },
            ],
            id: "scenario/161/global/plates",
          },
        ],
      },
      {
        type: "section",
        name: "124.2",
        reference: { tile: "04-D", tileOrientation: "120" },
        tokens: [
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: 1, y: -5 },
              { x: 2, y: -5 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 1, y: -5 },
              { x: 2, y: -5 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -2, y: 0 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
              { x: -2, y: -1 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: -1, y: -1, levels: "ane" },
              { x: 0, y: -1, levels: "eee" },
              { x: -1, y: -3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -2, y: -2, type: "Obstacle" },
              { x: 0, y: -3, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: -2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "173.3",
        reference: { tile: "10-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 0 }] },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nne" }],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "nee" },
              { x: -3, y: 3, levels: "ann" },
              { x: -3, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "aan" },
              { x: -5, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 4,
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/161/global/plates",
                  id: "section/173.3/overlay/Pressure Plate",
                },
                type: "Pressure Plate",
              },
              {
                x: -3,
                y: 0,
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/161/global/plates",
                  id: "section/173.3/overlay/Pressure Plate",
                },
                type: "Pressure Plate",
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -4, y: 3, type: "Trap" },
              { x: -1, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Obstacle" },
              { x: -1, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "186.1",
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: 6 }] },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [{ x: -3, y: 5, levels: "nee" }],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "nee" },
              { x: -5, y: 4, levels: "aan" },
              { x: -4, y: 1, levels: "eee" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "aan" }],
          },
        ],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 6,
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/161/global/plates",
                  id: "section/186.1/overlay/Pressure Plate",
                },
                type: "Pressure Plate",
              },
              {
                x: -4,
                y: 0,
                trigger: {
                  type: "door",
                  action: "trigger",
                  what: "scenario/161/global/plates",
                  id: "section/186.1/overlay/Pressure Plate",
                },
                type: "Pressure Plate",
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -6, y: 5, type: "Trap" },
              { x: -2, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -3, y: 4, type: "Obstacle" },
              { x: -4, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-E",
        orientation: "0",
        center: { x: 6, y: 0 },
        origin: { x: 9, y: -3 },
      },
      {
        name: "10-B",
        orientation: "0",
        center: { x: -6, y: -1 },
        origin: { x: -3, y: -3 },
      },
      {
        name: "09-B",
        orientation: "0",
        center: { x: 1, y: -3 },
        origin: { x: 3, y: -6 },
      },
      {
        name: "04-D",
        orientation: "120",
        center: { x: -3, y: 4 },
        origin: { x: -3, y: 6 },
      },
    ],
  },
  "134": {
    id: "134",
    maps: [
      { type: "scenario", name: 162, triggers: [] },
      {
        type: "scenario",
        name: 163,
        reference: { tile: "12-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 7, y: -13 }] },
          { name: "c", orientation: 0, positions: [{ x: 6, y: -6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -5 },
              { x: 6, y: -5 },
              { x: 5, y: -6 },
              { x: 7, y: -6 },
              { x: 6, y: -7 },
              { x: 7, y: -7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [{ x: 5, y: 0, levels: "nee" }],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [{ x: 5, y: -10, levels: "nee" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nee" },
              { x: 7, y: -2, levels: "nne" },
              { x: 7, y: -11, levels: "nne" },
              { x: 11, y: -12, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "33.3" },
                  id: "scenario/163/token/1",
                },
              },
              {
                x: 5,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "147.4" },
                  id: "scenario/163/token/2",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 180,
            positions: [
              {
                x: 12,
                y: -13,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "44.3" },
                  id: "scenario/163/token/4",
                },
              },
              {
                x: 7,
                y: -13,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "128.1" },
                  id: "scenario/163/token/3",
                },
              },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [{ x: 6, y: -6 }],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [{ x: 7, y: -6 }],
          },
          { name: "Altar", orientation: 0, positions: [{ x: 6, y: -6 }] },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Objective" },
              { x: 5, y: -2, type: "Objective" },
              { x: 5, y: -8 },
              { x: 9, y: -10 },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: 3, y: -4, type: "Objective" },
              { x: 10, y: -9 },
            ],
          },
        ],
        triggers: [
          {
            type: "countDown",
            current: 4,
            action: "reveal",
            what: { type: "section", name: "154.4" },
            id: "scenario/163/global/plates",
          },
        ],
      },
      {
        type: "section",
        name: "33.3",
        reference: { tile: "01-G", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 0,
                type: "Pressure Plate",
                trigger: {
                  action: "reveal",
                  what: { type: "section", name: "30.5" },
                  also: [
                    { action: "trigger", what: "scenario/163/global/plates" },
                  ],
                  id: "section/33.3/token/b",
                },
              },
            ],
          },
          {
            name: "Nest",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "44.3",
        reference: { tile: "01-E", tileOrientation: "0" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: -4, y: 2 }] }],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 0,
                type: "Pressure Plate",
                trigger: {
                  action: "reveal",
                  what: { type: "section", name: "11.6" },
                  also: [
                    { action: "trigger", what: "scenario/163/global/plates" },
                  ],
                  id: "section/44.3/token/a",
                },
              },
            ],
          },
          {
            name: "Nest",
            orientation: 0,
            positions: [{ x: -4, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "128.1",
        reference: { tile: "01-B", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 3, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: 1 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: -1,
                trigger: {
                  action: "reveal",
                  what: { type: "section", name: "11.6" },
                  also: [
                    { action: "trigger", what: "scenario/163/global/plates" },
                  ],
                  id: "section/128.1/token/a",
                },
              },
            ],
          },
          { name: "Nest", orientation: 0, positions: [{ x: 3, y: -1 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "147.4",
        reference: { tile: "01-D", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -3, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -3, y: -1 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                type: "Pressure Plate",
                trigger: {
                  action: "reveal",
                  what: { type: "section", name: "30.5" },
                  also: [
                    { action: "trigger", what: "scenario/163/global/plates" },
                  ],
                  id: "section/147.4/token/b",
                },
              },
            ],
          },
          {
            name: "Nest",
            orientation: 0,
            positions: [{ x: -3, y: 0, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-C",
        orientation: "0",
        center: { x: 0, y: -2 },
        origin: { x: 4, y: -4 },
      },
      {
        name: "12-A",
        orientation: "180",
        center: { x: -4, y: 6 },
        origin: { x: -8, y: 8 },
      },
      {
        name: "01-G",
        orientation: "180",
        center: { x: -10, y: 11 },
        origin: { x: -12, y: 11 },
      },
      {
        name: "01-E",
        orientation: "0",
        center: { x: 6, y: -7 },
        origin: { x: 8, y: -7 },
      },
      {
        name: "01-E",
        orientation: "0",
        center: { x: 6, y: -7 },
        origin: { x: 8, y: -7 },
      },
      {
        name: "01-D",
        orientation: "0",
        center: { x: -2, y: 10 },
        origin: { x: 0, y: 10 },
      },
      {
        name: "01-B",
        orientation: "180",
        center: { x: -2, y: -6 },
        origin: { x: -4, y: -6 },
      },
    ],
  },
  "135": {
    id: "135",
    maps: [
      { type: "scenario", name: 163, triggers: [] },
      {
        type: "scenario",
        name: 164,
        reference: { tile: "12-B", tileOrientation: "120" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 5, y: 1 },
              { x: -1, y: 1 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 4, y: -1 },
              { x: -1, y: -3 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: 8, y: -1 },
              { x: 0, y: -2 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 2, y: 0 },
              { x: 9, y: 0 },
              { x: 10, y: -2 },
              { x: 3, y: -2 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 6, y: -2 },
              { x: 7, y: -2 },
              { x: 6, y: -6 },
              { x: 6, y: -7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 3, y: -5, levels: "nne" }],
          },
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [{ x: 3, y: -1, levels: "nne" }],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: 6, y: 0, levels: "ann" },
              { x: 8, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: 1, y: -3, levels: "ann" },
              { x: 0, y: -4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                trigger: {
                  type: "door",
                  locked: true,
                  action: "none",
                  what: {},
                  id: "scenario/164/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: 1,
                trigger: {
                  type: "door",
                  locked: true,
                  action: "none",
                  what: {},
                  id: "scenario/164/token/1",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: 0,
                trigger: {
                  type: "pressure",
                  mode: "occupy",
                  action: "trigger",
                  what: "scenario/164/global/platesC",
                  id: "scenario/164/token/c",
                },
              },
              {
                x: -1,
                y: 0,
                trigger: {
                  type: "pressure",
                  mode: "occupy",
                  action: "trigger",
                  what: "scenario/164/global/platesC",
                  id: "scenario/164/token/c",
                },
              },
            ],
          },
          { name: "Spike Pit", orientation: 0, positions: [{ x: 2, y: -6 }] },
          { name: "Bookshelf", orientation: 0, positions: [{ x: 7, y: -1 }] },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -1, y: -2 },
              { x: 0, y: -3, type: "Obstacle" },
              { x: 1, y: -4, type: "Obstacle" },
              { x: 2, y: -7 },
            ],
          },
        ],
        triggers: [
          {
            type: "countDown",
            current: 2,
            action: "reveal",
            what: { type: "section", name: "87.2" },
            also: [{ action: "open", what: "scenario/164/token/1" }],
            id: "scenario/164/global/platesC",
          },
          {
            type: "countDown",
            current: 2,
            action: "reveal",
            what: { type: "section", name: "195.1" },
            also: [{ action: "open", what: "section/87.2/token/2" }],
            id: "scenario/164/global/platesF",
          },
        ],
      },
      {
        type: "section",
        name: "87.2",
        reference: { tile: "06-B", tileOrientation: "180" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: 6, y: -9 },
              { x: 0, y: -9 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 6, y: -9 },
              { x: 0, y: -9 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: -3, y: -3 },
            ],
          },
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: 3, y: -6 },
              { x: -1, y: -7 },
            ],
          },
          {
            name: "e",
            orientation: 0,
            positions: [
              { x: 4, y: -4 },
              { x: 1, y: -6 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -3, y: -5 },
              { x: -3, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 1, y: -8, levels: "nee" }],
          },
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [
              { x: 1, y: -2, levels: "ann" },
              { x: 3, y: -4, levels: "nnn" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [{ x: 4, y: -6, levels: "nne" }],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: -1, y: -5, levels: "aan" },
              { x: -2, y: -6, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  locked: true,
                  action: "none",
                  what: {},
                  id: "section/87.2/token/2",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 90,
            positions: [
              {
                x: 0,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  locked: true,
                  action: "none",
                  what: {},
                  id: "section/87.2/token/2",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: -1,
                type: "Pressure Plate",
                trigger: {
                  type: "pressure",
                  mode: "occupy",
                  action: "trigger",
                  what: "scenario/164/global/platesF",
                  id: "section/87.2/token/f",
                },
              },
              {
                x: -2,
                y: -4,
                type: "Pressure Plate",
                trigger: {
                  type: "pressure",
                  mode: "occupy",
                  action: "trigger",
                  what: "scenario/164/global/platesF",
                  id: "section/87.2/token/f",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 3, y: -5, type: "Trap" },
              { x: 4, y: -5, type: "Trap" },
              { x: -1, y: -6 },
            ],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: 3, y: -2 }] },
          { name: "Snow Rock", orientation: 0, positions: [{ x: 0, y: -7 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "195.1",
        reference: { tile: "04-B", tileOrientation: "240" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 6, y: -4 },
              { x: 3, y: -6 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 6, y: -4 },
              { x: 3, y: -6 },
            ],
          },
          { name: "goal", orientation: 0, positions: [{ x: 1, y: 2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 4, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: 3, y: -4, levels: "ann" },
              { x: 5, y: -5, levels: "nne" },
            ],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: 3, y: 1, levels: "aan" },
              { x: 3, y: -1, levels: "eee" },
              { x: 4, y: -4, levels: "ann" },
            ],
          },
          {
            name: "Savvas Lavaflow",
            orientation: 0,
            positions: [{ x: 1, y: 1, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 1, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-B",
        orientation: "120",
        center: { x: 2, y: -8 },
        origin: { x: 0, y: -4 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 6, y: -5 },
        origin: { x: 10, y: -6 },
      },
      {
        name: "06-B",
        orientation: "180",
        center: { x: 2, y: 2 },
        origin: { x: -1, y: 6 },
      },
      {
        name: "04-B",
        orientation: "240",
        center: { x: -5, y: 9 },
        origin: { x: -7, y: 9 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: -2, y: 0 },
        origin: { x: -4, y: 0 },
      },
      {
        name: "01-B",
        orientation: "0",
        center: { x: -3, y: 4 },
        origin: { x: -1, y: 4 },
      },
    ],
  },
  "136": {
    id: "136",
    maps: [
      {
        type: "scenario",
        name: 165,
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "a", orientation: 0, positions: [{ x: -8, y: 3 }] },
          { name: "b", orientation: 0, positions: [{ x: -8, y: 5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -10, y: 6 },
              { x: -9, y: 6 },
              { x: -9, y: 5 },
              { x: -9, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nne" },
              { x: -6, y: 4, levels: "nee" },
              { x: -7, y: 1, levels: "nee" },
              { x: -5, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "ann" },
              { x: -3, y: 4, levels: "nnn" },
              { x: -4, y: 0, levels: "nnn" },
              { x: 0, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "170.2" },
                  id: "scenario/165/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Corridor" },
              { x: -7, y: 3, type: "Corridor" },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [{ x: -9, y: 6, type: "Corridor" }],
          },
          {
            name: "Large Metal Corridor",
            orientation: 60,
            positions: [{ x: -9, y: 5 }],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Trap" },
              { x: -3, y: 3, type: "Trap" },
              { x: -3, y: 1, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "170.2",
        reference: { tile: "11-B", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: -4 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -4 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -2 }] },
          { name: "c", orientation: 0, positions: [{ x: -1, y: 1 }] },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -5, y: -3, levels: "ane" },
              { x: 0, y: -3, levels: "nee" },
              { x: -1, y: -4, levels: "aae" },
              { x: -1, y: -5, levels: "eee" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "nnn" },
              { x: -1, y: -2, levels: "nee" },
              { x: -3, y: -3, levels: "nne" },
              { x: -3, y: -5, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 240,
            positions: [
              {
                x: 1,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "180.4" },
                  id: "section/170.2/token/2",
                },
              },
            ],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -2, y: -2, type: "Trap" },
              { x: -1, y: -3, type: "Trap" },
              { x: -4, y: -4, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "180.4",
        reference: { tile: "10-B", tileOrientation: "60" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 0 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -4, y: 2 },
              { x: -2, y: 1 },
              { x: 0, y: 0 },
              { x: -4, y: -3 },
              { x: 0, y: -3 },
              { x: -1, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -4, y: 1, levels: "nne" },
              { x: -3, y: 1, levels: "ann" },
              { x: -3, y: -3, levels: "nnn" },
              { x: -2, y: -3, levels: "nne" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "nee" },
              { x: -1, y: -2, levels: "eee" },
              { x: -1, y: -3, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -3, y: 0, type: "Obstacle" },
              { x: -2, y: -4, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: -2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: -7, y: -1 },
        origin: { x: -2, y: -4 },
      },
      {
        name: "11-B",
        orientation: "60",
        center: { x: 0, y: 1 },
        origin: { x: 3, y: 3 },
      },
      {
        name: "10-B",
        orientation: "60",
        center: { x: 7, y: 0 },
        origin: { x: 9, y: 1 },
      },
    ],
  },
  "137": {
    id: "137",
    maps: [
      {
        type: "scenario",
        name: 166,
        reference: { tile: "12-B", tileOrientation: "300" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -7, y: 7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -5, y: 7, levels: "nnn" },
              { x: -4, y: 7, levels: "nee" },
              { x: -2, y: 6, levels: "aen" },
              { x: 0, y: 5, levels: "nne" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -3, y: 5, levels: "aan" },
              { x: 0, y: 3, levels: "nnn" },
              { x: -5, y: 6, levels: "nnns3" },
              { x: 1, y: 4, levels: "aees" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -2, y: 7, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -7,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "191.2" },
                  id: "scenario/166/token/1",
                },
              },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: -1, y: 4 }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 6, type: "Trap" },
              { x: -1, y: 5, type: "Trap" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -6, y: 7, type: "Difficult Terrain" },
              { x: -6, y: 6, type: "Difficult Terrain" },
              { x: 1, y: 3, type: "Difficult Terrain" },
              { x: -5, y: 6 },
              { x: 1, y: 4 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -3, y: 7, type: "Obstacle" },
              { x: -4, y: 5, type: "Obstacle" },
              { x: 0, y: 4, type: "Obstacle" },
              { x: -1, y: 3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "112.2",
        reference: { tile: "14-A", tileOrientation: "60" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: 9 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 9 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -6, y: 12 },
              { x: -9, y: 11 },
              { x: -9, y: 10 },
              { x: -6, y: 7 },
              { x: -3, y: 6 },
              { x: -1, y: 6 },
              { x: -6, y: 5 },
              { x: -5, y: 3 },
              { x: -2, y: 3 },
              { x: -1, y: 3 },
              { x: -4, y: 2 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nnn" },
              { x: -2, y: 5, levels: "ann" },
              { x: -4, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "ann" },
              { x: -3, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -2, y: 7, levels: "nee" },
              { x: 0, y: 7, levels: "aan" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -10, y: 12, levels: "nee" },
              { x: -8, y: 10, levels: "aan" },
              { x: -5, y: 8, levels: "nnn" },
              { x: -3, y: 5, levels: "aan" },
              { x: -4, y: 4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: -6, y: 9 }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [{ x: -4, y: 10 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 60,
            positions: [
              { x: -5, y: 11 },
              { x: -3, y: 10 },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -4, y: 11, type: "Trap" },
              { x: -6, y: 10, type: "Trap" },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Barricade",
            orientation: 300,
            positions: [
              { x: -4, y: 8, type: "Obstacle" },
              { x: -2, y: 6, type: "Obstacle" },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: -3, y: 1, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: -4, y: 9, type: "Obstacle" }],
          },
          {
            name: "Mast",
            orientation: 0,
            positions: [{ x: -4, y: 5, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -7, y: 11, type: "Obstacle" },
              { x: -2, y: 8, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "191.2",
        reference: { tile: "04-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 5, y: -4 }] },
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -4 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -3 }] },
        ],
        monsters: [
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nnn" },
              { x: 1, y: -1, levels: "aee" },
              { x: 0, y: -2, levels: "nnn" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "nee" },
              { x: 2, y: -4, levels: "anes" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: -2, levels: "eee" },
              { x: 4, y: -2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 120,
            positions: [
              {
                x: 0,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "112.2" },
                  id: "section/191.2/token/2",
                },
              },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: 3, y: -2 }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Trap" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 1, y: -3, type: "Difficult Terrain" },
              { x: 3, y: -4, type: "Difficult Terrain" },
              { x: 4, y: -4, type: "Difficult Terrain" },
              { x: 2, y: -4 },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Obstacle" }],
          },
          {
            name: "Large Ice Crystal",
            orientation: 180,
            positions: [{ x: 2, y: -3 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-A",
        orientation: "90",
        center: { x: -4, y: -2 },
        origin: { x: 0, y: -7 },
      },
      {
        name: "12-B",
        orientation: "300",
        center: { x: 9, y: -2 },
        origin: { x: 11, y: -6 },
      },
      {
        name: "11-B",
        orientation: "180",
        center: { x: -5, y: 2 },
        origin: { x: -10, y: 5 },
      },
      {
        name: "04-A",
        orientation: "180",
        center: { x: 1, y: 3 },
        origin: { x: -1, y: 5 },
      },
    ],
  },
  "138": { id: "138", maps: [{ type: "scenario", name: 170, triggers: [] }] },
  "139": { id: "139", maps: [{ type: "scenario", name: 171, triggers: [] }] },
  "14": {
    id: "14",
    maps: [
      {
        type: "scenario",
        name: 18,
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -3, y: 3 }] },
          { name: "b", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: -10, y: 6 }] },
          { name: "d", orientation: 0, positions: [{ x: -15, y: 6 }] },
          { name: "e", orientation: 0, positions: [{ x: -2, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -13, y: 2 },
              { x: -12, y: 1 },
              { x: -12, y: 0 },
              { x: -11, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [
              { x: -14, y: 6, levels: "ann" },
              { x: -13, y: 6, levels: "nnn" },
              { x: -6, y: 0, levels: "aan" },
              { x: -2, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -9, y: 4, levels: "aans" },
              { x: -13, y: 4, levels: "eees" },
              { x: -7, y: 4, levels: "nees" },
              { x: -12, y: 3, levels: "nnes" },
              { x: -6, y: 3, levels: "anes" },
              { x: -8, y: 0, levels: "eees" },
              { x: -4, y: 0, levels: "anns" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -12, y: 6, levels: "nee" },
              { x: -6, y: 5, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [{ x: -8, y: 2 }],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [{ x: -10, y: 5, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -10, y: 4, type: "Corridor" },
              { x: -7, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -10, y: 4, type: "Corridor" },
              { x: -7, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Huge Water",
            orientation: 180,
            positions: [
              { x: -9, y: 4 },
              { x: -13, y: 3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [{ x: -9, y: 3 }],
          },
          {
            name: "Large Water",
            orientation: 300,
            positions: [{ x: -10, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -10, y: 6, type: "Difficult Terrain" },
              { x: -3, y: 4, type: "Difficult Terrain" },
              { x: -2, y: 3, type: "Difficult Terrain" },
              { x: -5, y: 2, type: "Difficult Terrain" },
              { x: -2, y: 2, type: "Difficult Terrain" },
              { x: -5, y: 1, type: "Difficult Terrain" },
              { x: -2, y: 1, type: "Difficult Terrain" },
              { x: -10, y: 0, type: "Difficult Terrain" },
              { x: -3, y: 0, type: "Difficult Terrain" },
              { x: -7, y: 4 },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [
              { x: -5, y: 5 },
              { x: -4, y: 3 },
              { x: -7, y: 2 },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: -11, y: 4, type: "Obstacle" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -8, y: 6, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 8, y: -3 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 0, y: -3 },
      },
    ],
  },
  "140": {
    id: "140",
    maps: [
      {
        type: "scenario",
        name: 172,
        reference: { tile: "07-B", tileOrientation: "180" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: 5, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: 9, y: -4 }] },
          { name: "d", orientation: 0, positions: [{ x: 3, y: -6 }] },
          { name: "e", orientation: 0, positions: [{ x: 7, y: -10 }] },
          { name: "f", orientation: 0, positions: [{ x: 11, y: -10 }] },
          { name: "start", orientation: 0, positions: [{ x: 6, y: -5 }] },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: 4, y: -5, levels: "nnn" },
              { x: 8, y: -5, levels: "nnn" },
              { x: 6, y: -7, levels: "nnn" },
              { x: 8, y: -7, levels: "nnn" },
              { x: 4, y: -3, levels: "nnns" },
              { x: 6, y: -3, levels: "nnns" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 8, y: -10, levels: "nnn" }],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nnn" },
              { x: 6, y: 0, levels: "nnn" },
              { x: 11, y: -8, levels: "eee" },
              { x: 9, y: -10, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: -3, type: "Corridor" },
              { x: 5, y: -3 },
              { x: 7, y: -3 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 8, y: -3, type: "Corridor" },
              { x: 4, y: -3 },
              { x: 6, y: -3 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 8, y: -3, type: "Corridor" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 5, y: -2, type: "Difficult Terrain" },
              { x: 5, y: -5, type: "Difficult Terrain" },
              { x: 9, y: -7 },
            ],
          },
        ],
        triggers: [],
      },
    ],
  },
  "141": { id: "141", maps: [{ type: "scenario", name: 174, triggers: [] }] },
  "142": { id: "142", maps: [{ type: "scenario", name: 175, triggers: [] }] },
  "143": { id: "143", maps: [{ type: "scenario", name: 176, triggers: [] }] },
  "144": {
    id: "144",
    maps: [
      {
        type: "scenario",
        name: 177,
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -3, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -3, y: 1 }] },
        ],
        monsters: [
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [{ x: -9, y: 1, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: -8, y: 1, type: "Corridor" }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -8, y: 2, type: "Corridor" },
              { x: -7, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
  },
  "145": {
    id: "145",
    maps: [
      {
        type: "scenario",
        name: 179,
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Lava",
            orientation: 0,
            positions: [
              { x: -6, y: 5, type: "Hazardous Terrain" },
              { x: -2, y: 5, type: "Hazardous Terrain" },
              { x: -4, y: 1, type: "Hazardous Terrain" },
              { x: 0, y: 1, type: "Hazardous Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
  },
  "146": {
    id: "146",
    maps: [
      {
        type: "scenario",
        name: 180,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "start", orientation: 0, positions: [{ x: -18, y: 3 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -8, y: 6, levels: "nnn" },
              { x: -5, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [
              { x: -12, y: 3, levels: "nnn" },
              { x: -8, y: 3, levels: "nnn" },
              { x: -1, y: 3, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              { x: -6, y: 3, type: "Door" },
              { x: -11, y: 3, type: "Door" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -9, y: 5, type: "Obstacle" },
              { x: -9, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
  },
  "147": { id: "147", maps: [{ type: "scenario", name: 182, triggers: [] }] },
  "148": { id: "148", maps: [{ type: "scenario", name: 183, triggers: [] }] },
  "149": { id: "149", maps: [{ type: "scenario", name: 184, triggers: [] }] },
  "15": {
    id: "15",
    maps: [
      { type: "scenario", name: 19, triggers: [] },
      {
        type: "scenario",
        name: 20,
        reference: { tile: "06-B", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -9, y: 5 },
              { x: -8, y: 5 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: -9, y: 7 }] },
          { name: "c", orientation: 0, positions: [{ x: -5, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -10, y: 3 },
              { x: -9, y: 3 },
              { x: -9, y: 2 },
              { x: -9, y: 1 },
              { x: -8, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [{ x: 2, y: 1, levels: "eee" }],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -10, y: 5, levels: "aan" },
              { x: -7, y: 5, levels: "eee" },
              { x: -7, y: 3, levels: "ann" },
              { x: -5, y: 1, levels: "ane" },
              { x: -5, y: -1, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [{ x: -6, y: 8, type: "Corridor" }],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -6, y: 7 },
              { x: 0, y: 1, type: "Corridor" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -8, y: 7, type: "Difficult Terrain" },
              { x: -5, y: 7, type: "Difficult Terrain" },
              { x: -5, y: 6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [{ x: 3, y: 0, type: "Obstacle" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -9, y: 4, type: "Obstacle" },
              { x: -7, y: 4, type: "Obstacle" },
              { x: -7, y: 0, type: "Obstacle" },
              { x: -5, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 3, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: -2, y: -1 },
        origin: { x: 1, y: -4 },
      },
      {
        name: "06-B",
        orientation: "0",
        center: { x: 2, y: 1 },
        origin: { x: 5, y: -3 },
      },
      {
        name: "02-H",
        orientation: "180",
        center: { x: 7, y: -2 },
        origin: { x: 5, y: 0 },
      },
      {
        name: "01-B",
        orientation: "180",
        center: { x: -4, y: 5 },
        origin: { x: -6, y: 5 },
      },
    ],
  },
  "150": { id: "150", maps: [{ type: "scenario", name: 185, triggers: [] }] },
  "151": {
    id: "151",
    maps: [
      {
        type: "scenario",
        name: 186,
        reference: { tile: "02-K", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -6 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -6 }] },
          { name: "2", orientation: 0, positions: [{ x: 4, y: -10 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -10 }] },
          { name: "3", orientation: 0, positions: [{ x: 8, y: -10 }] },
          { name: "3g", orientation: 0, positions: [{ x: 8, y: -10 }] },
          { name: "a", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: 1, y: -2 }] },
          { name: "c", orientation: 0, positions: [{ x: 3, y: -2 }] },
          { name: "start", orientation: 0, positions: [{ x: 5, y: -8 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [{ x: 2, y: -2, levels: "nnn" }],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [{ x: 6, y: -11, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [{ x: 9, y: -10 }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 3, y: -3, type: "Difficult Terrain" },
              { x: 7, y: -11 },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 4, y: -6 },
              { x: 8, y: -10 },
              { x: 4, y: -10, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
  },
  "152": { id: "152", maps: [{ type: "scenario", name: 188, triggers: [] }] },
  "153": { id: "153", maps: [{ type: "scenario", name: 189, triggers: [] }] },
  "154": {
    id: "154",
    maps: [
      {
        type: "scenario",
        name: 190,
        reference: { tile: "15-C", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -4, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 0 },
              { x: -1, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [],
        triggers: [],
      },
    ],
  },
  "16": {
    id: "16",
    maps: [
      {
        type: "scenario",
        name: 21,
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -5, y: 5 },
              { x: -1, y: 3 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 2 }] },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -4, y: 3 },
              { x: -1, y: 1 },
            ],
          },
          { name: "d", orientation: 0, positions: [{ x: -4, y: 6 }] },
          { name: "e", orientation: 0, positions: [{ x: -3, y: 5 }] },
          { name: "f", orientation: 0, positions: [{ x: -1, y: 0 }] },
          {
            name: "g",
            orientation: 0,
            positions: [
              { x: -3, y: 6 },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "h",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -3, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 4 },
              { x: -3, y: 4 },
              { x: -3, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -7, y: 9, levels: "nne" },
              { x: -5, y: 9, levels: "nee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "ann" },
              { x: -1, y: 4, levels: "nne" },
              { x: -5, y: 3, levels: "eee" },
              { x: -5, y: 2, levels: "aan" },
              { x: 0, y: 2, levels: "nee" },
            ],
          },
        ],
        overlays: [],
        triggers: [
          {
            type: "round",
            when: { round: 2, state: 0 },
            action: "reveal",
            what: { type: "section", name: "90.3" },
            id: "scenario/21/global/round2",
          },
          {
            type: "round",
            when: { round: 4, state: 0 },
            action: "reveal",
            what: { type: "section", name: "27.2" },
            id: "scenario/21/global/round4",
          },
          {
            type: "round",
            when: { round: 7, state: 0 },
            action: "reveal",
            what: { type: "section", name: "44.2" },
            id: "scenario/21/global/round7",
          },
          {
            type: "round",
            when: { round: 9, state: 0 },
            action: "reveal",
            what: { type: "section", name: "15.3" },
            id: "scenario/21/global/round9",
          },
          {
            type: "round",
            when: { round: 12, state: 0 },
            action: "reveal",
            what: { type: "section", name: "39.1" },
            also: [
              {
                action: "addTrigger",
                what: "scenario/21/global/enemiesdead",
                trigger: {
                  type: "alldead",
                  action: "reveal",
                  what: { type: "section", name: "48.2" },
                },
              },
            ],
            id: "scenario/21/global/round12",
          },
        ],
      },
      {
        type: "section",
        name: "27.2",
        reference: { tile: "01-D", tileOrientation: "0" },
        tokens: [],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -3, y: 1, levels: "ane" },
              { x: -1, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "44.2",
        reference: { tile: "01-B", tileOrientation: "180" },
        tokens: [],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nne" },
              { x: 2, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "01-D",
        orientation: "0",
        center: { x: 2, y: -6 },
        origin: { x: 4, y: -6 },
      },
      {
        name: "01-B",
        orientation: "180",
        center: { x: -2, y: 6 },
        origin: { x: -4, y: 6 },
      },
    ],
  },
  "17": {
    id: "17",
    maps: [
      {
        type: "scenario",
        name: 22,
        reference: { tile: "09-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -4, y: 7 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 6 }] },
          { name: "3g", orientation: 0, positions: [{ x: -7, y: 6 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 5 }] },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -4, y: 5 },
              { x: -2, y: 5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 3 },
              { x: -2, y: 3 },
              { x: -1, y: 3 },
              { x: -2, y: 2 },
              { x: -1, y: 2 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "62.3" },
                  id: "scenario/22/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -7,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "42.3" },
                  id: "scenario/22/token/3",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "25.3" },
                  id: "scenario/22/token/2",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: -3, y: 5, type: "Pressure Plate" },
              { x: -4, y: 5, type: "Pressure Plate" },
              { x: -2, y: 5, type: "Pressure Plate" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "17.3",
        reference: { tile: "02-C", tileOrientation: "180" },
        tokens: [
          { name: "5", orientation: 0, positions: [{ x: 4, y: -4 }] },
          { name: "goal", orientation: 0, positions: [{ x: 1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Living Doom",
            orientation: 0,
            positions: [{ x: 2, y: -2, levels: "eee" }],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "aan" },
              { x: 2, y: -1, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "19.3",
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -7, y: 2 }] },
          { name: "b", orientation: 0, positions: [{ x: -6, y: 1 }] },
          { name: "c", orientation: 0, positions: [{ x: -7, y: 1 }] },
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: -6, y: 2 },
              { x: -6, y: 0 },
            ],
          },
          {
            name: "e",
            orientation: 0,
            positions: [
              { x: -4, y: 2 },
              { x: -3, y: 2 },
              { x: -3, y: 1 },
              { x: -2, y: 1 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "17.3" },
                  id: "section/19.3/token/5",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: -7, y: 2, type: "Pressure Plate" },
              { x: -6, y: 1, type: "Pressure Plate" },
              { x: -4, y: 2, type: "Pressure Plate" },
              { x: -3, y: 2, type: "Pressure Plate" },
              { x: -3, y: 1, type: "Pressure Plate" },
              { x: -2, y: 1, type: "Pressure Plate" },
              { x: -7, y: 1, type: "Pressure Plate" },
              { x: -6, y: 2, type: "Pressure Plate" },
              { x: -6, y: 0, type: "Pressure Plate" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "25.3",
        reference: { tile: "02-I", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -2 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 2, y: -1 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: 2, y: -2 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 2, y: -1, type: "Pressure Plate" },
              { x: 2, y: -2, type: "Pressure Plate" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "42.3",
        reference: { tile: "02-K", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "3g", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "a", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 2, y: -2 }] },
          { name: "d", orientation: 0, positions: [{ x: 2, y: -1 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Pressure Plate" },
              { x: 2, y: -2, type: "Pressure Plate" },
              { x: 2, y: -1, type: "Pressure Plate" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "62.3",
        reference: { tile: "02-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "1g", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "a", orientation: 0, positions: [{ x: 3, y: -2 }] },
          { name: "d", orientation: 0, positions: [{ x: 2, y: -1 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "19.3" },
                  id: "section/62.3/token/4",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Pressure Plate" },
              { x: 2, y: -1, type: "Pressure Plate" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "09-B",
        orientation: "0",
        center: { x: 2, y: -6 },
        origin: { x: 4, y: -9 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: 0, y: 5 },
        origin: { x: 4, y: 4 },
      },
      {
        name: "02-K",
        orientation: "180",
        center: { x: -5, y: -3 },
        origin: { x: -7, y: -1 },
      },
      {
        name: "02-I",
        orientation: "180",
        center: { x: 6, y: -3 },
        origin: { x: 4, y: -1 },
      },
      {
        name: "02-C",
        orientation: "180",
        center: { x: -2, y: 9 },
        origin: { x: -4, y: 11 },
      },
      {
        name: "02-A",
        orientation: "180",
        center: { x: -1, y: 0 },
        origin: { x: -3, y: 2 },
      },
    ],
  },
  "18": {
    id: "18",
    maps: [
      {
        type: "scenario",
        name: 23,
        reference: { tile: "11-A", tileOrientation: "60" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -4 }] },
          { name: "a", orientation: 0, positions: [{ x: -1, y: -5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -2, y: 0 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
              { x: 0, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -6, y: -3, levels: "nne" },
              { x: 0, y: -4, levels: "ann" },
              { x: -3, y: -4, levels: "eee" },
              { x: -3, y: -5, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -2, y: -2, type: "Trap" },
              { x: -1, y: -3, type: "Trap" },
              { x: -5, y: -4, type: "Trap" },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -3, y: -3, type: "Difficult Terrain" },
              { x: -1, y: -4, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: -4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "91.2" },
                  id: "scenario/23/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "54.1",
        reference: { tile: "11-C", tileOrientation: "300" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 1, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 2 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -4, y: 9, levels: "eee" }],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -3, y: 9, levels: "aan" },
              { x: -5, y: 8, levels: "nnn" },
              { x: -3, y: 6, levels: "nee" },
              { x: -3, y: 4, levels: "aan" },
              { x: -2, y: 2, levels: "eee" },
              { x: 0, y: 1, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 5, type: "Hazardous Terrain" },
              { x: -1, y: 1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Difficult Terrain" },
              { x: -2, y: 4, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "91.2",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 0 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nee" },
              { x: -3, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "54.1" },
                  id: "section/91.2/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 4, type: "Hazardous Terrain" },
              { x: -4, y: 2, type: "Hazardous Terrain" },
              { x: -1, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 4, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "11-C",
        orientation: "300",
        center: { x: -4, y: 0 },
        origin: { x: -2, y: -5 },
      },
      {
        name: "11-A",
        orientation: "60",
        center: { x: 6, y: 2 },
        origin: { x: 9, y: 4 },
      },
    ],
  },
  "19": {
    id: "19",
    maps: [
      { type: "scenario", name: 24, triggers: [] },
      {
        type: "scenario",
        name: 25,
        reference: { tile: "07-A", tileOrientation: "180" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 7, y: -1 }] },
          { name: "c", orientation: 0, positions: [{ x: 11, y: -9 }] },
          { name: "d", orientation: 0, positions: [{ x: 5, y: -9 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -4 },
              { x: 6, y: -4 },
              { x: 6, y: -5 },
              { x: 6, y: -6 },
              { x: 7, y: -6 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: 8, y: -3 }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: -3 },
              { x: 5, y: -3, type: "Corridor" },
              { x: 7, y: -3, type: "Corridor" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 4, y: -5, type: "Objective" },
              { x: 8, y: -5, type: "Objective" },
              { x: 6, y: -7 },
              { x: 8, y: -7 },
              { x: 4, y: -3, type: "Objective" },
              { x: 6, y: -3, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 1, y: -3 },
        origin: { x: 6, y: -6 },
      },
      {
        name: "07-A",
        orientation: "180",
        center: { x: -2, y: 3 },
        origin: { x: -6, y: 4 },
      },
    ],
  },
  "2": {
    id: "2",
    maps: [
      {
        type: "scenario",
        name: 5,
        reference: { tile: "11-A", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 6, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 1 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 2, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 5, y: 5, levels: "nne" },
              { x: 6, y: 3, levels: "nnn" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 1, y: 4, levels: "ane" },
              { x: 1, y: 3, levels: "eee" },
              { x: 2, y: 3, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "27.1" },
                  id: "scenario/5/token/1",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 4, y: 5, type: "Obstacle" },
              { x: 2, y: 4, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "6.1",
        reference: { tile: "14-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 2 }] },
          { name: "a", orientation: 0, positions: [{ x: -5, y: -3 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -4, y: -1, levels: "nne" }],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -4, y: 2, levels: "ann" },
              { x: 0, y: 0, levels: "ann" },
              { x: -5, y: -1, levels: "nne" },
              { x: -2, y: -1, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: -5, y: -3, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -6, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "27.1",
        reference: { tile: "11-C", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 7, y: -5 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 8, y: -3, levels: "eee" },
              { x: 7, y: -4, levels: "nee" },
              { x: 8, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: 1, y: -2, levels: "nnn" }],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [{ x: 5, y: -1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 7,
                y: -5,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "6.1" },
                  id: "section/27.1/token/2",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Obstacle" },
              { x: 6, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-B",
        orientation: "30",
        center: { x: 2, y: -5 },
        origin: { x: 6, y: -4 },
      },
      {
        name: "11-C",
        orientation: "180",
        center: { x: 2, y: 1 },
        origin: { x: -3, y: 4 },
      },
      {
        name: "11-A",
        orientation: "240",
        center: { x: -5, y: 5 },
        origin: { x: -8, y: 3 },
      },
    ],
  },
  "20": {
    id: "20",
    maps: [
      { type: "scenario", name: 25, triggers: [] },
      {
        type: "scenario",
        name: 26,
        reference: { tile: "02-I", tileOrientation: "60" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -15, y: 10 },
              { x: -1, y: -2 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -7, y: 10 },
              { x: -9, y: -2 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -11, y: 5 },
              { x: -10, y: 5 },
              { x: -10, y: 4 },
              { x: -10, y: 3 },
              { x: -9, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -7, y: 5, levels: "nee" },
              { x: -6, y: 3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -12, y: 8, type: "Corridor" },
              { x: -8, y: 8 },
              { x: -10, y: 2 },
              { x: -4, y: 2 },
              { x: -12, y: 7 },
              { x: -7, y: 7 },
              { x: -4, y: 1 },
              { x: -9, y: 1 },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 60,
            positions: [
              { x: -12, y: 7 },
              { x: -4, y: 1 },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 300,
            positions: [
              { x: -6, y: 6, type: "Corridor" },
              { x: -8, y: 0 },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [
              { x: -7, y: 7 },
              { x: -9, y: 2 },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [
              { x: -11, y: 6 },
              { x: -4, y: 1 },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -8, y: 4, type: "Objective" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -16, y: 9, type: "Objective" },
              { x: -5, y: 9, type: "Objective" },
              { x: -11, y: -1, type: "Objective" },
              { x: 0, y: -1, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "02-K",
        orientation: "300",
        center: { x: -2, y: -4 },
        origin: { x: -2, y: -6 },
      },
      {
        name: "02-I",
        orientation: "60",
        center: { x: 6, y: -4 },
        origin: { x: 8, y: -4 },
      },
      {
        name: "02-C",
        orientation: "120",
        center: { x: 2, y: 4 },
        origin: { x: 2, y: 6 },
      },
      {
        name: "02-A",
        orientation: "240",
        center: { x: -6, y: 4 },
        origin: { x: -8, y: 4 },
      },
    ],
  },
  "21": {
    id: "21",
    maps: [
      {
        type: "scenario",
        name: 27,
        reference: { tile: "14-B", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 9 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 3, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -3, y: 7, levels: "nne" },
              { x: 0, y: 4, levels: "nnn" },
              { x: 2, y: 3, levels: "ann" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -2, y: 8, levels: "nnn" },
              { x: -1, y: 6, levels: "nee" },
              { x: -3, y: 5, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 9,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "51.1" },
                  id: "scenario/27/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 8, type: "Hazardous Terrain" },
              { x: -1, y: 7, type: "Hazardous Terrain" },
              { x: -1, y: 4, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -2, y: 7, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "48.1",
        reference: { tile: "07-E", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: -1 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [{ x: -7, y: 2, levels: "nee" }],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "aan" },
              { x: -1, y: 1, levels: "ane" },
              { x: -4, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "53.1" },
                  id: "section/48.1/token/3",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Trap" },
              { x: -5, y: 1, type: "Trap" },
              { x: 0, y: 0, type: "Trap" },
            ],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -4, y: 2 }] },
          { name: "Bookshelf", orientation: 180, positions: [{ x: -2, y: 0 }] },
          {
            name: "Bookshelf",
            orientation: 300,
            positions: [{ x: -5, y: 0, type: "Objective" }],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: -6, y: 2, type: "Objective" },
              { x: -3, y: 1, type: "Objective" },
              { x: -6, y: 0, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -5, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "51.1",
        reference: { tile: "15-C", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 7 }] },
          { name: "a", orientation: 0, positions: [{ x: -6, y: 5 }] },
          { name: "b", orientation: 0, positions: [{ x: -2, y: 5 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "ann" },
              { x: -2, y: 3, levels: "eee" },
              { x: -5, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "48.1" },
                  id: "section/51.1/token/2",
                },
              },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "53.1",
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -5, y: 7 }] },
          { name: "3g", orientation: 0, positions: [{ x: -5, y: 7 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -4, y: 4, levels: "nnn" },
              { x: -5, y: 3, levels: "aan" },
              { x: -1, y: 1, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: -5, y: 4, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: -2, y: 0 },
        origin: { x: 1, y: -3 },
      },
      {
        name: "14-B",
        orientation: "270",
        center: { x: 2, y: -8 },
        origin: { x: 3, y: -13 },
      },
      {
        name: "13-E",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 7, y: -3 },
      },
      {
        name: "07-E",
        orientation: "0",
        center: { x: -2, y: 6 },
        origin: { x: 2, y: 5 },
      },
    ],
  },
  "22": {
    id: "22",
    maps: [
      {
        type: "scenario",
        name: 28,
        reference: { tile: "14-A", tileOrientation: "60" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -1, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: -4 },
              { x: 1, y: -4 },
              { x: 0, y: -5 },
              { x: 1, y: -5 },
              { x: 2, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "nee" },
              { x: -2, y: 3, levels: "nne" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -5, y: 8, levels: "nnn" },
              { x: -5, y: 7, levels: "eee" },
              { x: -6, y: 6, levels: "aan" },
              { x: -2, y: 5, levels: "nee" },
              { x: -4, y: 1, levels: "aan" },
              { x: 0, y: 1, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Stairs",
            orientation: 180,
            positions: [
              { x: -2, y: -1, type: "Difficult Terrain" },
              { x: 0, y: -1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: -3, y: 6, type: "Obstacle" },
              { x: -4, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Mast",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "41.2",
        reference: { tile: "07-G", tileOrientation: "180" },
        tokens: [
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: -1 },
              { x: 1, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: 3, y: 1, levels: "nnes" },
              { x: 5, y: 1, levels: "anes" },
              { x: 6, y: 1, levels: "nnes" },
              { x: 6, y: -3, levels: "nees" },
            ],
          },
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "aan" },
              { x: 3, y: -1, levels: "eee" },
              { x: 3, y: -2, levels: "ann" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: 5, y: 0, levels: "nee" },
              { x: 4, y: -2, levels: "aan" },
              { x: 7, y: -2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 3, y: 1 },
              { x: 5, y: 1 },
              { x: 6, y: 1 },
              { x: 6, y: -3 },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: 5, y: -1, type: "Obstacle" },
              { x: 2, y: -2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-A",
        orientation: "90",
        center: { x: -3, y: 2 },
        origin: { x: 1, y: -3 },
      },
      {
        name: "07-G",
        orientation: "0",
        center: { x: 4, y: 3 },
        origin: { x: 8, y: 2 },
      },
      {
        name: "02-B",
        orientation: "0",
        center: { x: 1, y: -6 },
        origin: { x: 3, y: -8 },
      },
    ],
  },
  "23": {
    id: "23",
    maps: [
      {
        type: "scenario",
        name: 29,
        reference: { tile: "11-F", tileOrientation: "300" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -2, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 10 },
              { x: -5, y: 9 },
              { x: -4, y: 9 },
              { x: -3, y: 9 },
              { x: -3, y: 8 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -5, y: 7, levels: "nnn" },
              { x: -5, y: 6, levels: "aan" },
              { x: -3, y: 6, levels: "ane" },
              { x: -3, y: 5, levels: "eee" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -4, y: 4, levels: "ann" },
              { x: -2, y: 2, levels: "eee" },
              { x: 0, y: 2, levels: "nee" },
              { x: -1, y: 1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 120,
            positions: [
              {
                x: -2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "38.4" },
                  id: "scenario/29/token/1",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -3, y: 4, type: "Trap" },
              { x: -2, y: 3, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "38.4",
        reference: { tile: "12-A", tileOrientation: "120" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 6, y: -5 }] },
          { name: "1g", orientation: 0, positions: [{ x: 6, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 1 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 3, y: -6, levels: "eee" },
              { x: 6, y: -7, levels: "ane" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -1, y: -1, levels: "nnn" },
              { x: -1, y: -2, levels: "nne" },
              { x: 1, y: -2, levels: "nee" },
              { x: -1, y: -4, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "55.3" },
                  id: "section/38.4/token/2",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 0, y: -4 },
              { x: 1, y: -5, type: "Trap" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: 1, y: -3 },
              { x: 2, y: -6, type: "Trap" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: 4, y: -5 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "55.3",
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nnn" },
              { x: -3, y: 6, levels: "nnn" },
              { x: -6, y: 4, levels: "aan" },
              { x: -1, y: 4, levels: "ann" },
            ],
          },
          {
            name: "Hateful Corpse",
            orientation: 0,
            positions: [{ x: -4, y: 5, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 5, type: "Difficult Terrain" },
              { x: -2, y: 3, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
              { x: -2, y: 1, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: -4, y: 5 },
        origin: { x: -1, y: 2 },
      },
      {
        name: "12-A",
        orientation: "120",
        center: { x: 1, y: -4 },
        origin: { x: -1, y: 0 },
      },
      {
        name: "11-F",
        orientation: "300",
        center: { x: 5, y: -1 },
        origin: { x: 7, y: -6 },
      },
    ],
  },
  "24": {
    id: "24",
    maps: [
      {
        type: "scenario",
        name: 30,
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 4 },
              { x: -1, y: 3 },
              { x: 0, y: 2 },
              { x: 0, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "aan" },
              { x: -5, y: 3, levels: "eee" },
              { x: -3, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "eee" },
              { x: -3, y: 2, levels: "nne" },
              { x: -4, y: 1, levels: "aan" },
              { x: -1, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: -4, y: 3, type: "Corridor" },
              { x: -2, y: 2, type: "Corridor" },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [{ x: -3, y: 4 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "74.2",
        reference: { tile: "04-B", tileOrientation: "240" },
        tokens: [],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: 0, y: 1, levels: "ane" },
              { x: 2, y: -1, levels: "eee" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 2, y: 2, levels: "aan" },
              { x: 3, y: 0, levels: "ann" },
              { x: 4, y: -1, levels: "eee" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [{ x: 1, y: 2, levels: "nne" }],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "83.2",
        reference: { tile: "08-A", tileOrientation: "180" },
        tokens: [],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [{ x: 4, y: -2, levels: "nne" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nnn" },
              { x: 4, y: -4, levels: "ann" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nee" },
              { x: 2, y: -4, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [
              { x: 2, y: -1 },
              { x: 3, y: -2 },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 3, y: -7 },
        origin: { x: 6, y: -10 },
      },
      {
        name: "08-A",
        orientation: "180",
        center: { x: -1, y: 1 },
        origin: { x: -3, y: 3 },
      },
      {
        name: "04-B",
        orientation: "240",
        center: { x: -4, y: 8 },
        origin: { x: -6, y: 8 },
      },
    ],
  },
  "25": {
    id: "25",
    maps: [
      {
        type: "scenario",
        name: 31,
        reference: { tile: "07-H", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 8, y: -1 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 6, y: 0 },
              { x: 6, y: -2 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 2, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nne" },
              { x: 4, y: -2, levels: "nee" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 7, y: 0, levels: "ann" },
              { x: 7, y: -1, levels: "eee" },
              { x: 8, y: -2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "58.2" },
                  id: "scenario/31/token/1",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: 8,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "61.2" },
                  id: "scenario/31/token/2",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "58.2",
        reference: { tile: "12-A", tileOrientation: "120" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "a", orientation: 0, positions: [{ x: 6, y: -6 }] },
          { name: "b", orientation: 0, positions: [{ x: 2, y: -5 }] },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nnn" },
              { x: 0, y: -3, levels: "aan" },
              { x: 4, y: -6, levels: "nee" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -1, y: -4, levels: "aan" },
              { x: 1, y: -4, levels: "nee" },
              { x: 2, y: -7, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 1, y: -6 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "61.2",
        reference: { tile: "11-F", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "c", orientation: 0, positions: [{ x: 9, y: -6 }] },
          { name: "d", orientation: 0, positions: [{ x: 6, y: -3 }] },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 5, y: -1, levels: "eee" },
              { x: 8, y: -3, levels: "aee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 2, y: -1, levels: "nee" },
              { x: 4, y: -1, levels: "nne" },
              { x: 7, y: -3, levels: "nee" },
              { x: 9, y: -4, levels: "aan" },
              { x: 8, y: -5, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 7, y: -2, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 10, y: -5, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-A",
        orientation: "120",
        center: { x: 0, y: -4 },
        origin: { x: -2, y: 0 },
      },
      {
        name: "11-F",
        orientation: "180",
        center: { x: 5, y: 1 },
        origin: { x: 0, y: 4 },
      },
      {
        name: "07-H",
        orientation: "180",
        center: { x: -4, y: 3 },
        origin: { x: -8, y: 4 },
      },
    ],
  },
  "26": {
    id: "26",
    maps: [
      {
        type: "scenario",
        name: 32,
        reference: { tile: "13-F", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -14, y: 4 },
              { x: -13, y: 4 },
              { x: -13, y: 3 },
              { x: -13, y: 2 },
              { x: -12, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -13, y: 6, levels: "nee" },
              { x: -5, y: 6, levels: "nee" },
              { x: -2, y: 0, levels: "nne" },
              { x: -10, y: 0, levels: "nne" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "ann" },
              { x: -3, y: 6, levels: "eee" },
              { x: -3, y: 5, levels: "aan" },
              { x: -1, y: 1, levels: "aan" },
              { x: -1, y: 0, levels: "ann" },
              { x: 0, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 6, type: "Corridor" },
              { x: -6, y: 4, type: "Corridor" },
              { x: -5, y: 2, type: "Corridor" },
              { x: -4, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 5 },
              { x: -6, y: 3 },
              { x: -5, y: 1 },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [{ x: -9, y: 3, type: "Pressure Plate" }],
          },
          {
            name: "Bookshelf",
            orientation: 0,
            positions: [
              { x: -12, y: 5, type: "Obstacle" },
              { x: -8, y: 5, type: "Obstacle" },
              { x: -4, y: 5, type: "Obstacle" },
              { x: -10, y: 1, type: "Obstacle" },
              { x: -6, y: 1, type: "Obstacle" },
              { x: -2, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [
              { x: -10, y: 3, type: "Obstacle" },
              { x: -6, y: 3 },
              { x: -2, y: 3, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "13-F",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 7, y: -3 },
      },
    ],
  },
  "27": {
    id: "27",
    maps: [
      {
        type: "scenario",
        name: 33,
        reference: { tile: "09-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -7, y: 6 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 6 }] },
          { name: "3g", orientation: 0, positions: [{ x: -4, y: 7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nee" },
              { x: -1, y: 6, levels: "nne" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "ann" },
              { x: -2, y: 4, levels: "aan" },
              { x: -3, y: 3, levels: "nnn" },
              { x: -1, y: 3, levels: "nnn" },
            ],
          },
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "ann" },
              { x: -3, y: 5, levels: "eee" },
              { x: 0, y: 5, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "69.2" },
                  id: "scenario/33/token/3",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -7,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "95.1" },
                  id: "scenario/33/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "68.3" },
                  id: "scenario/33/token/2",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "68.3",
        reference: { tile: "02-K", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -2 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [{ x: 3, y: -1, levels: "nee" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [{ x: 3, y: -3, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Objective" },
              {
                x: 4,
                y: -3,
                type: "Objective",
                condition: { players: [3, 4] },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "69.2",
        reference: { tile: "12-D", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 6, y: -6 }] },
          { name: "3g", orientation: 0, positions: [{ x: 6, y: -6 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "nne" },
              { x: 5, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: 3, y: -4, levels: "nne" },
              { x: 7, y: -4, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 60,
            positions: [
              {
                x: -1,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "148.4" },
                  id: "section/69.2/token/4",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 300,
            positions: [
              {
                x: 7,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "71.5" },
                  id: "section/69.2/token/5",
                },
              },
            ],
          },
          { name: "Altar", orientation: 0, positions: [{ x: 5, y: -4 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "71.5",
        reference: { tile: "02-C", tileOrientation: "300" },
        tokens: [{ name: "5", orientation: 0, positions: [{ x: -2, y: 1 }] }],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -1, y: 3, levels: "ann" },
              { x: 1, y: 2, levels: "nnn" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "nnn" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: -1, y: 4, type: "Objective" },
              { x: 2, y: 1, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 3, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "95.1",
        reference: { tile: "02-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [{ x: 0, y: -1, levels: "nne" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [{ x: 2, y: -3, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 0, y: 0, type: "Objective" },
              { x: 1, y: -3, type: "Objective", condition: { players: [4] } },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "148.4",
        reference: { tile: "02-I", tileOrientation: "240" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 12, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: 12, y: 3 }] },
          { name: "4", orientation: 0, positions: [{ x: 4, y: -1 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 1, y: 2, levels: "aan" },
              { x: 1, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 2, y: 1, levels: "nnn" },
              { x: 2, y: -1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 0, y: 2, type: "Objective" },
              { x: 0, y: 0, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-D",
        orientation: "180",
        center: { x: -1, y: 2 },
        origin: { x: -5, y: 4 },
      },
      {
        name: "09-B",
        orientation: "0",
        center: { x: 3, y: -6 },
        origin: { x: 5, y: -9 },
      },
      {
        name: "02-K",
        orientation: "180",
        center: { x: 7, y: -3 },
        origin: { x: 5, y: -1 },
      },
      {
        name: "02-I",
        orientation: "240",
        center: { x: -8, y: 5 },
        origin: { x: -10, y: 5 },
      },
      {
        name: "02-C",
        orientation: "300",
        center: { x: 4, y: 5 },
        origin: { x: 4, y: 3 },
      },
      {
        name: "02-A",
        orientation: "180",
        center: { x: -4, y: -3 },
        origin: { x: -6, y: -1 },
      },
    ],
  },
  "28": {
    id: "28",
    maps: [
      {
        type: "scenario",
        name: 34,
        reference: { tile: "11-D", tileOrientation: "60" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 6, y: -4 },
              { x: 6, y: -6 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -10, y: 7 },
              { x: -10, y: 5 },
            ],
          },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -9, y: -7 },
              { x: -8, y: -9 },
            ],
          },
          { name: "d", orientation: 0, positions: [{ x: -10, y: 6 }] },
          { name: "e", orientation: 0, positions: [{ x: -8, y: -8 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 4, y: -3 },
              { x: 4, y: -4 },
              { x: 5, y: -4 },
              { x: 4, y: -5 },
              { x: 5, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -8, y: 5, levels: "nee" },
              { x: -2, y: 0, levels: "nnn" },
              { x: 0, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -4, y: -3, levels: "ann" },
              { x: -2, y: -5, levels: "nnn" },
              { x: -7, y: -7, levels: "nne" },
            ],
          },
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [
              { x: -7, y: 7, levels: "nee" },
              { x: -8, y: 2, levels: "nne" },
              { x: -2, y: 1, levels: "nne" },
              { x: 2, y: -2, levels: "nee" },
            ],
          },
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -5, y: -4, levels: "nne" },
              { x: 2, y: -4, levels: "nee" },
              { x: -7, y: -9, levels: "nne" },
              { x: -3, y: -9, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: -3, y: -6, type: "Corridor" }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [
              { x: -3, y: 1 },
              { x: 1, y: -2 },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -8, y: 6, type: "Obstacle" },
              { x: -5, y: 2, type: "Obstacle" },
              { x: 0, y: -2, type: "Obstacle" },
              { x: -3, y: -3, type: "Obstacle" },
              { x: -5, y: -8, type: "Obstacle" },
              { x: -2, y: 7 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: -8, y: 7 },
              { x: -1, y: -9, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 35, triggers: [] },
    ],
    layout: [
      {
        name: "15-B",
        orientation: "0",
        center: { x: -4, y: 6 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "11-D",
        orientation: "60",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: 2 },
      },
      {
        name: "07-C",
        orientation: "180",
        center: { x: -2, y: -6 },
        origin: { x: -6, y: -5 },
      },
      {
        name: "04-A",
        orientation: "120",
        center: { x: 7, y: -2 },
        origin: { x: 7, y: 0 },
      },
    ],
  },
  "29": {
    id: "29",
    maps: [
      { type: "scenario", name: 35, triggers: [] },
      {
        type: "scenario",
        name: 36,
        reference: { tile: "13-C", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -17, y: 10 }] },
          { name: "b", orientation: 0, positions: [{ x: -10, y: 10 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -17, y: 1 },
              { x: -1, y: 1 },
              { x: -17, y: 0 },
              { x: -16, y: 0 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [
              { x: -12, y: 5, levels: "nne" },
              { x: -10, y: 5, levels: "nee" },
              { x: -16, y: 4, levels: "nne" },
              { x: -4, y: 3, levels: "nee" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -18, y: 6, levels: "nnn" },
              { x: -6, y: 5, levels: "nnn" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -15, y: 8, levels: "nne" },
              { x: -10, y: 8, levels: "nne" },
              { x: -3, y: 5, levels: "naa" },
              { x: -18, y: 4, levels: "nna" },
              { x: -15, y: 2, levels: "nnn" },
              { x: -4, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -13, y: 7, type: "Objective" },
              { x: -14, y: 4, type: "Corridor" },
              { x: -6, y: 4, type: "Corridor" },
              { x: -13, y: 2, type: "Corridor" },
              { x: -5, y: 2, type: "Corridor" },
              { x: -10, y: 7, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -15, y: 5, type: "Corridor" },
              { x: -7, y: 5, type: "Corridor" },
              { x: -5, y: 1, type: "Corridor" },
              { x: -13, y: 1 },
              { x: -13, y: 7, type: "Objective" },
              { x: -12, y: 7, type: "Objective" },
              { x: -11, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -15, y: 5, type: "Corridor" },
              { x: -7, y: 5, type: "Corridor" },
              { x: -5, y: 1, type: "Corridor" },
              { x: -13, y: 1 },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -14, y: 6, type: "Hazardous Terrain" },
              { x: -3, y: 4, type: "Hazardous Terrain" },
              { x: -9, y: 3, type: "Hazardous Terrain" },
              { x: -17, y: 2, type: "Hazardous Terrain" },
              { x: -4, y: 2, type: "Hazardous Terrain" },
              { x: -14, y: 1, type: "Hazardous Terrain" },
              { x: -2, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -10, y: 1, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -13, y: 5, type: "Obstacle" },
              { x: -9, y: 4, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -13, y: 8, type: "Objective" },
              { x: -12, y: 8, type: "Objective" },
              { x: -12, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -14, y: 9, type: "Objective" },
              { x: -13, y: 9, type: "Objective" },
              { x: -12, y: 9, type: "Objective" },
              { x: -14, y: 8, type: "Objective" },
              { x: -11, y: 8, type: "Objective" },
              { x: -12, y: 6, type: "Objective" },
              { x: -11, y: 6, type: "Objective" },
              { x: -13, y: 7, type: "Objective" },
              { x: -11, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -9, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 0, y: -1 },
        origin: { x: 5, y: -4 },
      },
      {
        name: "13-C",
        orientation: "0",
        center: { x: 7, y: -1 },
        origin: { x: 10, y: -4 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -6, y: -1 },
        origin: { x: -3, y: -4 },
      },
      {
        name: "07-B",
        orientation: "180",
        center: { x: -3, y: 5 },
        origin: { x: -7, y: 6 },
      },
    ],
  },
  "3": {
    id: "3",
    maps: [
      {
        type: "scenario",
        name: 6,
        reference: { tile: "13-C", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: -6 },
              { x: 0, y: -6 },
              { x: 1, y: -6 },
              { x: 2, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "eee" },
              { x: 2, y: 0, levels: "eee" },
              { x: 3, y: 0, levels: "ane" },
              { x: 2, y: -3, levels: "ann" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 2, y: -1, levels: "eee" },
              { x: 3, y: -1, levels: "nnn" },
              { x: 0, y: -2, levels: "nnes" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -4, y: -1, levels: "nne" },
              { x: -3, y: -3, levels: "nnn" },
              { x: 5, y: -4, levels: "aan" },
              { x: 6, y: -4, levels: "eee" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -3, y: -2, levels: "nen" },
              { x: 6, y: -5, levels: "nnn" },
              { x: 7, y: -6, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "30.2" },
                  id: "scenario/6/token/1",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 2, y: -4, type: "Corridor" },
              { x: 3, y: -6, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -2 }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: 0, y: -1, type: "Corridor" },
              { x: 1, y: -3, type: "Corridor" },
              { x: 2, y: -5, type: "Corridor" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -5, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "28.2",
        reference: { tile: "02-J", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 2, y: 1, levels: "nne" },
              { x: 3, y: 1, levels: "ann" },
              { x: 1, y: 0, levels: "nnn" },
              { x: 2, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "30.2",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 3, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 3, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 1 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "nne" },
              { x: 0, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "eee" },
              { x: 1, y: -1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.2" },
                  id: "section/30.2/token/2",
                },
              },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 2, y: 1, type: "Obstacle" },
              { x: 1, y: 0, type: "Obstacle" },
              { x: 4, y: -1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "180",
        center: { x: 4, y: -4 },
        origin: { x: 1, y: -1 },
      },
      {
        name: "13-A",
        orientation: "180",
        center: { x: -1, y: -4 },
        origin: { x: -4, y: -1 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: 1, y: 3 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "02-J",
        orientation: "240",
        center: { x: -4, y: 5 },
        origin: { x: -6, y: 5 },
      },
    ],
  },
  "30": {
    id: "30",
    maps: [
      { type: "scenario", name: 37, triggers: [] },
      {
        type: "scenario",
        name: 38,
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -6, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: -1, y: 0 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -12, y: 10 },
              { x: -11, y: 10 },
              { x: -6, y: 10 },
              { x: -5, y: 10 },
              { x: -11, y: 9 },
              { x: -5, y: 9 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -12, y: 0, levels: "nne" },
              { x: 4, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "nne" },
              { x: -12, y: 4, levels: "nee" },
              { x: -5, y: 3, levels: "eee" },
            ],
          },
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [
              { x: -10, y: 8, levels: "nnn" },
              { x: -5, y: 8, levels: "nnn" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: 2, y: 3, levels: "nee" },
              { x: -10, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [
              { x: -8, y: 3, levels: "nee" },
              { x: -2, y: 3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -8, y: 7, type: "Objective" },
              { x: -9, y: 4 },
              { x: -1, y: 4, type: "Corridor" },
              { x: -8, y: 2 },
              { x: 0, y: 2 },
              { x: -5, y: 7, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -10, y: 5 },
              { x: -2, y: 5, type: "Corridor" },
              { x: -8, y: 1, type: "Corridor" },
              { x: 0, y: 1 },
              { x: -8, y: 7, type: "Objective" },
              { x: -7, y: 7, type: "Objective" },
              { x: -6, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -10, y: 5 },
              { x: -2, y: 5, type: "Corridor" },
              { x: -8, y: 1, type: "Corridor" },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -9, y: 6, type: "Hazardous Terrain" },
              { x: 2, y: 4, type: "Hazardous Terrain" },
              { x: -4, y: 3, type: "Hazardous Terrain" },
              { x: -12, y: 2, type: "Hazardous Terrain" },
              { x: 1, y: 2, type: "Hazardous Terrain" },
              { x: -9, y: 1, type: "Hazardous Terrain" },
              { x: 3, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -5, y: 1, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Obstacle" },
              { x: -4, y: 4, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -8, y: 8, type: "Objective" },
              { x: -7, y: 8, type: "Objective" },
              { x: -7, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -9, y: 9, type: "Objective" },
              { x: -8, y: 9, type: "Objective" },
              { x: -7, y: 9, type: "Objective" },
              { x: -9, y: 8, type: "Objective" },
              { x: -6, y: 8, type: "Objective" },
              { x: -6, y: 6, type: "Objective" },
              { x: -7, y: 6, type: "Objective" },
              { x: -8, y: 7, type: "Objective" },
              { x: -6, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 0, y: -1 },
        origin: { x: 5, y: -4 },
      },
      {
        name: "13-C",
        orientation: "0",
        center: { x: 7, y: -1 },
        origin: { x: 10, y: -4 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: -6, y: -1 },
        origin: { x: -3, y: -4 },
      },
      {
        name: "07-B",
        orientation: "180",
        center: { x: -3, y: 5 },
        origin: { x: -7, y: 6 },
      },
    ],
  },
  "31": {
    id: "31",
    maps: [
      {
        type: "scenario",
        name: 39,
        reference: { tile: "07-H", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -1, y: 2 },
              { x: -1, y: 1 },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 2 },
              { x: -7, y: 2 },
              { x: -7, y: 1 },
              { x: -7, y: 0 },
              { x: -6, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "ana" }],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -2, y: 1, levels: "nne" }],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "32.2",
        reference: { tile: "07-F", tileOrientation: "60" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: -5 },
              { x: -2, y: -6 },
              { x: -1, y: -6 },
              { x: 0, y: -6 },
              { x: 0, y: -7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -2, y: -1, levels: "ane" },
              { x: 0, y: -2, levels: "eee" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [{ x: -1, y: -1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [{ x: -1, y: -2 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "37.2",
        reference: { tile: "11-F", tileOrientation: "60" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: -3 },
              { x: -5, y: -3 },
              { x: -5, y: -4 },
              { x: -5, y: -5 },
              { x: -4, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -2, y: -2, levels: "nne" },
              { x: -1, y: -5, levels: "nne" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -2, y: 0, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Power Conduit",
            orientation: 0,
            positions: [{ x: -3, y: -3, type: "Difficult Terrain" }],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [{ x: 0, y: -3 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: -2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-F",
        orientation: "60",
        center: { x: -1, y: -4 },
        origin: { x: 2, y: -2 },
      },
      {
        name: "07-H",
        orientation: "0",
        center: { x: -5, y: 4 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "07-F",
        orientation: "60",
        center: { x: 6, y: 1 },
        origin: { x: 7, y: 4 },
      },
    ],
  },
  "32": {
    id: "32",
    maps: [
      {
        type: "scenario",
        name: 40,
        reference: { tile: "05-B", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 0, y: -1 },
              { x: 1, y: -2 },
              { x: 1, y: -3 },
              { x: 2, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nnn" },
              { x: 2, y: -1, levels: "aan" },
              { x: 4, y: -1, levels: "ann" },
              { x: 3, y: -3, levels: "aan" },
              { x: 5, y: -3, levels: "nnn" },
              { x: 5, y: -4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "66.1" },
                  id: "scenario/40/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: 4, y: -2, type: "Trap" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "66.1",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -11, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -11, y: 3 }] },
          { name: "a", orientation: 0, positions: [{ x: -3, y: 3 }] },
        ],
        monsters: [
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [
              { x: -9, y: 6, levels: "nee" },
              { x: -6, y: 1, levels: "nee" },
              { x: -6, y: 4, levels: "nnes" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -6, y: 4 },
              { x: -5, y: 2 },
              { x: -4, y: 0 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Corridor" },
              { x: -6, y: 3, type: "Corridor" },
              { x: -5, y: 1, type: "Corridor" },
              { x: -6, y: 4 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -7, y: 5, type: "Corridor" },
              { x: -6, y: 3, type: "Corridor" },
              { x: -5, y: 1, type: "Corridor" },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -10, y: 5, type: "Trap" },
              { x: -9, y: 4, type: "Trap" },
              { x: -7, y: 3, type: "Trap" },
              { x: -8, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Obstacle" },
              { x: -9, y: 1, type: "Obstacle" },
              { x: -3, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -2, y: 2, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 5, y: 0 },
        origin: { x: 8, y: -3 },
      },
      {
        name: "13-A",
        orientation: "180",
        center: { x: -1, y: 0 },
        origin: { x: -4, y: 3 },
      },
      {
        name: "05-B",
        orientation: "180",
        center: { x: -5, y: 0 },
        origin: { x: -8, y: 2 },
      },
    ],
  },
  "33": {
    id: "33",
    maps: [
      {
        type: "scenario",
        name: 41,
        reference: { tile: "11-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -9, y: 6 },
              { x: -10, y: 5 },
              { x: -9, y: 5 },
              { x: -8, y: 5 },
              { x: -9, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "nee" },
              { x: -3, y: 0, levels: "ann" },
              { x: -1, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "nnn" },
              { x: -6, y: 1, levels: "aan" },
              { x: -3, y: 1, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "20.1" },
                  id: "scenario/41/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Trap" },
              { x: -2, y: 2, type: "Trap" },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -4, y: 0, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "20.1",
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -4, y: 3 },
              { x: -7, y: 6 },
              { x: -5, y: 6 },
              { x: -8, y: 5 },
              { x: -9, y: 4 },
              { x: -3, y: 4 },
              { x: -6, y: 3 },
              { x: -7, y: 2 },
              { x: -1, y: 2 },
              { x: -2, y: 1 },
              { x: -5, y: 0 },
              { x: -3, y: 0 },
            ],
            random: { max: "12" },
          },
          { name: "b", orientation: 0, positions: [{ x: -5, y: 3 }] },
        ],
        monsters: [],
        overlays: [],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 1, y: 2 },
        origin: { x: 6, y: -1 },
      },
      {
        name: "11-C",
        orientation: "0",
        center: { x: -2, y: -2 },
        origin: { x: 3, y: -5 },
      },
    ],
  },
  "34": {
    id: "34",
    maps: [
      {
        type: "scenario",
        name: 42,
        reference: { tile: "04-B", tileOrientation: "120" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 1, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: -3 },
              { x: 2, y: -3 },
              { x: 0, y: -4 },
              { x: 1, y: -4 },
              { x: 2, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lord of Chaos",
            orientation: 0,
            positions: [{ x: -3, y: 4, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 3, type: "Corridor" },
              { x: -1, y: 1, type: "Corridor" },
              { x: 0, y: -1, type: "Corridor" },
            ],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 2 },
              { x: -1, y: 0, type: "Corridor" },
              { x: 0, y: -2 },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "04-B",
        orientation: "120",
        center: { x: 1, y: -3 },
        origin: { x: 1, y: -1 },
      },
      {
        name: "02-F",
        orientation: "0",
        center: { x: -2, y: 3 },
        origin: { x: 0, y: 1 },
      },
    ],
  },
  "35": {
    id: "35",
    maps: [
      {
        type: "scenario",
        name: 43,
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -4, y: 4 }] },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -5, y: 6 },
              { x: -6, y: 5 },
              { x: -5, y: 5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "nee" },
              { x: -5, y: 2, levels: "ann" },
              { x: 0, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [{ x: 0, y: 2, levels: "nne" }],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [
              { x: -2, y: 5, levels: "aan" },
              { x: -2, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "104.4" },
                  id: "scenario/43/token/1",
                },
              },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: -3, y: 1, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: -2, y: 4, type: "Obstacle" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "104.4",
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -6, y: 14 },
              { x: -7, y: 7 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -6, y: 14 },
              { x: -7, y: 7 },
            ],
          },
          { name: "2", orientation: 0, positions: [{ x: -11, y: 18 }] },
          { name: "2g", orientation: 0, positions: [{ x: -11, y: 18 }] },
          { name: "3", orientation: 0, positions: [{ x: -7, y: 21 }] },
          { name: "3g", orientation: 0, positions: [{ x: -7, y: 21 }] },
          { name: "4", orientation: 0, positions: [{ x: -10, y: 22 }] },
          { name: "c", orientation: 0, positions: [{ x: -7, y: 5 }] },
          { name: "d", orientation: 0, positions: [{ x: -3, y: 2 }] },
          { name: "e", orientation: 0, positions: [{ x: -4, y: 0 }] },
          { name: "f", orientation: 0, positions: [{ x: -8, y: 2 }] },
          { name: "g", orientation: 0, positions: [{ x: -3, y: 6 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "aan" },
              { x: -6, y: 2, levels: "eee" },
              { x: -2, y: 2, levels: "nne" },
              { x: -7, y: 1, levels: "aan" },
              { x: -5, y: 1, levels: "nee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -10, y: 6, levels: "ann" },
              { x: -4, y: 5, levels: "nee" },
              { x: -9, y: 4, levels: "aan" },
              { x: -5, y: 0, levels: "aan" },
              { x: -3, y: 0, levels: "nnn" },
              { x: -1, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: -3, y: 5 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: -6, y: 1, type: "Obstacle" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
              { x: -4, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 2, y: -4 },
        origin: { x: 7, y: -7 },
      },
      {
        name: "15-B",
        orientation: "0",
        center: { x: -2, y: 4 },
        origin: { x: 1, y: 1 },
      },
    ],
  },
  "36": {
    id: "36",
    maps: [
      {
        type: "scenario",
        name: 44,
        reference: { tile: "16-D", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -10, y: 7 }] },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 7 }] },
          { name: "c", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -6, y: 3 },
              { x: -5, y: 3 },
              { x: -4, y: 3 },
              { x: -4, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nne" }],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [{ x: -9, y: 6, levels: "nee" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "nnn" },
              { x: -2, y: 4, levels: "ann" },
              { x: -6, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Difficult Terrain" },
              { x: -2, y: 3, type: "Difficult Terrain" },
              { x: -6, y: 2, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Obstacle" },
              { x: -7, y: 3, type: "Obstacle" },
              { x: -2, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: -4, y: 1, type: "Obstacle" }],
          },
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              { x: -10, y: 7, type: "Objective" },
              { x: -4, y: 7, type: "Objective" },
            ],
          },
          {
            name: "Metal Door",
            orientation: 180,
            positions: [
              { x: -6, y: -1, type: "Objective" },
              { x: 0, y: -1, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 5, y: -3 },
      },
    ],
  },
  "37": {
    id: "37",
    maps: [
      {
        type: "scenario",
        name: 45,
        reference: { tile: "07-F", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 2 },
              { x: -7, y: 2 },
              { x: -7, y: 1 },
              { x: -7, y: 0 },
              { x: -6, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -4, y: 1, levels: "nee" },
              { x: -3, y: 0, levels: "nne" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "nnn" },
              { x: -1, y: 2, levels: "ane" },
              { x: -1, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "70.1" },
                  id: "scenario/45/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Trap" },
              { x: -2, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: -4, y: 2, type: "Obstacle" },
              { x: 0, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "70.1",
        reference: { tile: "07-H", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "eee" },
              { x: -5, y: 1, levels: "ane" },
              { x: -1, y: 1, levels: "eee" },
              { x: -5, y: 0, levels: "nee" },
              { x: -1, y: 0, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [{ x: 0, y: 1, type: "Door" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 2, type: "Difficult Terrain" },
              { x: -7, y: 1, type: "Difficult Terrain" },
              { x: -4, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: -2, y: 1, type: "Obstacle" },
              { x: -3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -6, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "81.5",
        reference: { tile: "07-F", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "3", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "aan" },
              { x: -2, y: 2, levels: "eee" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 2, levels: "aan" },
              { x: -6, y: 1, levels: "eee" },
              { x: -6, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [{ x: 0, y: 1, type: "Door" }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -4, y: 2, type: "Trap" },
              { x: -1, y: 2, type: "Trap" },
              { x: -3, y: 1, type: "Trap" },
              { x: -1, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: -3, y: 0, type: "Obstacle" },
              { x: -1, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "144.1",
        reference: { tile: "07-H", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -1, y: 2 },
              { x: -1, y: 1 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "nee" },
              { x: -6, y: 1, levels: "ann" },
              { x: -3, y: 1, levels: "aan" },
              { x: -4, y: 0, levels: "eee" },
              { x: -3, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -6, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 2, type: "Difficult Terrain" },
              { x: -3, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 1, type: "Difficult Terrain" },
              { x: -6, y: 0, type: "Difficult Terrain" },
              { x: -5, y: 0, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "07-H",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 8, y: -1 },
      },
      {
        name: "07-F",
        orientation: "0",
        center: { x: -4, y: 0 },
        origin: { x: 0, y: -1 },
      },
    ],
  },
  "38": {
    id: "38",
    maps: [
      {
        type: "scenario",
        name: 46,
        reference: { tile: "11-C", tileOrientation: "300" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -4, y: 5 }] },
          { name: "b", orientation: 0, positions: [{ x: 8, y: 5 }] },
          { name: "c", orientation: 0, positions: [{ x: 2, y: 5 }] },
          { name: "d", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "e", orientation: 0, positions: [{ x: 7, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 6 },
              { x: 8, y: 6 },
              { x: -4, y: 4 },
              { x: 9, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -5, y: 9, levels: "ann" },
              { x: -4, y: 9, levels: "nnn" },
              { x: 4, y: 9, levels: "nne" },
              { x: 0, y: 1, levels: "nee" },
              { x: 8, y: 1, levels: "nnn" },
              { x: 9, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "nee" },
              { x: 3, y: 5, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 1, y: 6, type: "Trap" },
              { x: 2, y: 6, type: "Trap" },
              { x: 2, y: 4, type: "Trap" },
              { x: 3, y: 4, type: "Trap" },
            ],
          },
          {
            name: "Log",
            orientation: 0,
            positions: [{ x: 2, y: 7, type: "Difficult Terrain" }],
          },
          { name: "Log", orientation: 60, positions: [{ x: 3, y: 3 }] },
          {
            name: "Stairs",
            orientation: 60,
            positions: [{ x: -2, y: 8, type: "Difficult Terrain" }],
          },
          {
            name: "Stairs",
            orientation: 120,
            positions: [{ x: 1, y: 2, type: "Difficult Terrain" }],
          },
          {
            name: "Stairs",
            orientation: 240,
            positions: [{ x: 6, y: 2, type: "Difficult Terrain" }],
          },
          {
            name: "Stairs",
            orientation: 300,
            positions: [{ x: 3, y: 8, type: "Difficult Terrain" }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 2, y: 5, type: "Obstacle" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 6, y: 8, type: "Obstacle" },
              { x: -4, y: 6, type: "Obstacle" },
              { x: 7, y: 3, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "23.1",
        reference: { tile: "01-F", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -9, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -9, y: 1 }] },
          { name: "a", orientation: 0, positions: [{ x: -2, y: 1 }] },
          { name: "b", orientation: 0, positions: [{ x: -1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: -9, y: 2, levels: "ann" },
              { x: -8, y: 1, levels: "eee" },
              { x: -8, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -9, y: 1, type: "Door" }],
          },
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: -5, y: 1, type: "Corridor" }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: -4, y: 0, type: "Corridor" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "75.3",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
          { name: "2", orientation: 0, positions: [{ x: 9, y: -10 }] },
          { name: "2g", orientation: 0, positions: [{ x: 9, y: -10 }] },
        ],
        monsters: [
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: 6, y: -9 },
              { x: 7, y: -10 },
              { x: 8, y: -11 },
              { x: 9, y: -12 },
            ],
          },
        ],
        overlays: [
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: 6, y: -11 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 0, y: 1, type: "Treasure" },
              { x: 7, y: -12, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 2, y: -4 },
        origin: { x: 5, y: -7 },
      },
      {
        name: "11-C",
        orientation: "300",
        center: { x: -2, y: -4 },
        origin: { x: 0, y: -9 },
      },
      {
        name: "11-A",
        orientation: "120",
        center: { x: 6, y: -4 },
        origin: { x: 4, y: 1 },
      },
      {
        name: "02-L",
        orientation: "0",
        center: { x: -3, y: 6 },
        origin: { x: -1, y: 4 },
      },
      {
        name: "02-J",
        orientation: "0",
        center: { x: -7, y: 6 },
        origin: { x: -5, y: 4 },
      },
      {
        name: "01-F",
        orientation: "0",
        center: { x: 2, y: 5 },
        origin: { x: 4, y: 5 },
      },
    ],
  },
  "39": {
    id: "39",
    maps: [
      {
        type: "scenario",
        name: 47,
        reference: { tile: "13-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -10, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -12, y: 7 }] },
          { name: "3g", orientation: 0, positions: [{ x: -5, y: 7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -14, y: 4 },
              { x: -13, y: 3 },
              { x: -13, y: 2 },
              { x: -12, y: 1 },
              { x: -12, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -8, y: 5, levels: "ann" },
              { x: -3, y: 4, levels: "nnn" },
              { x: -4, y: 3, levels: "nnn" },
              { x: -9, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "ann" },
              { x: -5, y: 3, levels: "ann" },
              { x: -10, y: 0, levels: "nnn" },
              { x: -6, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -13, y: 6, levels: "nnn" },
              { x: -11, y: 6, levels: "ann" },
              { x: -10, y: 6, levels: "nnn" },
              { x: -10, y: 4, levels: "aan" },
              { x: -2, y: 3, levels: "eee" },
              { x: -1, y: 1, levels: "nne" },
              { x: -3, y: 0, levels: "nee" },
              { x: -1, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -12, y: 6, levels: "nne" },
              { x: -10, y: 5, levels: "nee" },
              { x: -2, y: 2, levels: "ane" },
              { x: -1, y: 2, levels: "nee" },
              { x: -2, y: 1, levels: "eee" },
              { x: -2, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -12,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "106.1" },
                  id: "scenario/47/token/2",
                },
              },
              {
                x: -5,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "78.3" },
                  id: "scenario/47/token/3",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 180,
            positions: [
              {
                x: -10,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "120.1" },
                  id: "scenario/47/token/1",
                },
              },
              {
                x: -1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "91.3" },
                  id: "scenario/47/token/4",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -6, y: 4 },
              { x: -5, y: 2 },
              { x: -4, y: 0 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: -7, y: 5, type: "Corridor" },
              { x: -6, y: 3, type: "Corridor" },
              { x: -5, y: 1 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: -7, y: 5, type: "Corridor" },
              { x: -6, y: 3, type: "Corridor" },
              { x: -5, y: 1 },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: -4, y: 5, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: -7, y: 3 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: -13, y: 4, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "78.3",
        reference: { tile: "02-C", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: -4 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 3, y: -1, levels: "nnn" }],
          },
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nne" },
              { x: 0, y: -1, levels: "ann" },
              { x: 4, y: -3, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Trap" },
              { x: 3, y: -3, type: "Trap" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [{ x: 2, y: -2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "91.3",
        reference: { tile: "02-K", tileOrientation: "0" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: -3, y: 4 }] }],
        monsters: [
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [{ x: -1, y: 3, levels: "nnn" }],
          },
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "nee" },
              { x: -2, y: 0, levels: "eee" },
              { x: 0, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -3, y: 1, type: "Trap" },
              { x: 0, y: 1, type: "Trap" },
              { x: -1, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "106.1",
        reference: { tile: "02-A", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
        ],
        monsters: [
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [{ x: -3, y: 2, levels: "nnn" }],
          },
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "ann" },
              { x: -1, y: 3, levels: "eee" },
              { x: 0, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Trap" }],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -1, y: 2 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "120.1",
        reference: { tile: "02-I", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 4 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -2, y: 2, levels: "nnn" }],
          },
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "ann" },
              { x: -3, y: 1, levels: "nne" },
              { x: -1, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          { name: "Bookshelf", orientation: 60, positions: [{ x: -1, y: 2 }] },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "13-C",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 7, y: -3 },
      },
      {
        name: "02-K",
        orientation: "0",
        center: { x: 7, y: -6 },
        origin: { x: 9, y: -8 },
      },
      {
        name: "02-I",
        orientation: "0",
        center: { x: -2, y: -6 },
        origin: { x: 0, y: -8 },
      },
      {
        name: "02-C",
        orientation: "180",
        center: { x: 1, y: 6 },
        origin: { x: -1, y: 8 },
      },
      {
        name: "02-A",
        orientation: "0",
        center: { x: -6, y: 7 },
        origin: { x: -4, y: 5 },
      },
    ],
  },
  "4": { id: "4", maps: [{ type: "scenario", name: 7, triggers: [] }] },
  "40": {
    id: "40",
    maps: [
      {
        type: "scenario",
        name: 48,
        reference: { tile: "05-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 5 }] },
          { name: "a", orientation: 0, positions: [{ x: -5, y: 4 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 2 },
              { x: -4, y: 1 },
              { x: -3, y: 1 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nnn" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "aea" },
              { x: -2, y: 3, levels: "ana" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "eee" },
              { x: -1, y: 3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "115.3" },
                  id: "scenario/48/token/1",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: -1, y: 2, type: "Difficult Terrain" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "115.3",
        reference: { tile: "11-A", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -3, y: -6 }] },
          { name: "1g", orientation: 0, positions: [{ x: -3, y: -6 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "b", orientation: 0, positions: [{ x: -2, y: -2 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: -6, y: -3, levels: "nnn" }],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 0, y: -4, levels: "nnn" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "eee" },
              { x: -2, y: -1, levels: "ane" },
              { x: -1, y: -1, levels: "eee" },
              { x: 0, y: -1, levels: "ane" },
              { x: -5, y: -3, levels: "aae" },
              { x: -4, y: -3, levels: "eee" },
              { x: -2, y: -3, levels: "aee" },
              { x: 0, y: -3, levels: "eee" },
              { x: -1, y: -4, levels: "ane" },
              { x: -2, y: -5, levels: "eee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "123.3" },
                  id: "section/115.3/token/2",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -1, y: -2, type: "Difficult Terrain" },
              { x: -3, y: -3, type: "Difficult Terrain" },
              { x: -2, y: -4, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "123.3",
        reference: { tile: "15-A", tileOrientation: "60" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -3, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -3, y: -3 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "nnn" }],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nnn" }],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -4, y: 1, levels: "eee" },
              { x: -4, y: 0, levels: "ane" },
              { x: -3, y: 0, levels: "eee" },
              { x: -2, y: 0, levels: "ane" },
              { x: -2, y: -1, levels: "eee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 1, levels: "ane" },
              { x: -6, y: 0, levels: "eee" },
              { x: -1, y: -3, levels: "ane" },
              { x: 0, y: -3, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -3, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "60",
        center: { x: 1, y: 6 },
        origin: { x: 4, y: 6 },
      },
      {
        name: "11-A",
        orientation: "60",
        center: { x: -1, y: 0 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "05-B",
        orientation: "0",
        center: { x: -1, y: -7 },
        origin: { x: 2, y: -9 },
      },
    ],
  },
  "41": {
    id: "41",
    maps: [
      {
        type: "scenario",
        name: 49,
        reference: { tile: "07-E", tileOrientation: "180" },
        tokens: [
          { name: "b", orientation: 0, positions: [{ x: 4, y: -1 }] },
          { name: "c", orientation: 0, positions: [{ x: 1, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 12, y: 0 },
              { x: 13, y: 0 },
              { x: 13, y: -2 },
              { x: 14, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 8, y: 2, levels: "nne" },
              { x: 11, y: 2, levels: "ann" },
              { x: 7, y: -1, levels: "eee" },
              { x: 11, y: -4, levels: "nee" },
              { x: 14, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Living Doom",
            orientation: 0,
            positions: [{ x: 9, y: -1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 8, y: -1 }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: 8, y: 0 },
              { x: 9, y: -2, type: "Corridor" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 13, y: -1, type: "Obstacle" }],
          },
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              { x: 6, y: 0 },
              { x: 6, y: -1 },
              { x: 7, y: -2, type: "Wall" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 6, y: -3 },
      },
      {
        name: "07-E",
        orientation: "180",
        center: { x: -4, y: 0 },
        origin: { x: -8, y: 1 },
      },
    ],
  },
  "42": {
    id: "42",
    maps: [
      {
        type: "scenario",
        name: 50,
        reference: { tile: "11-D", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 9, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 3, y: -1 },
              { x: 4, y: -1 },
              { x: 3, y: -2 },
              { x: 4, y: -2 },
              { x: 5, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "eee" },
              { x: 1, y: -2, levels: "ane" },
              { x: 8, y: -4, levels: "ann" },
              { x: 9, y: -4, levels: "nne" },
              { x: 9, y: -6, levels: "nnn" },
            ],
          },
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "nee" },
              { x: 7, y: -2, levels: "nnn" },
              { x: 7, y: -3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "103.3" },
                  id: "scenario/50/token/2",
                },
              },
              {
                x: 0,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "63.3" },
                  id: "scenario/50/token/1",
                },
              },
              {
                x: 9,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "135.2" },
                  id: "scenario/50/token/3",
                },
              },
            ],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Trap" },
              { x: 9, y: -5 },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 6, y: -3, type: "Difficult Terrain" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Obstacle" },
              { x: 8, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "63.3",
        reference: { tile: "11-B", tileOrientation: "120" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 5, y: -5 }] },
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -5 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -1, y: -1, levels: "nee" },
              { x: 1, y: -1, levels: "aan" },
              { x: 5, y: -8, levels: "nne" },
              { x: 5, y: -10, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 2, y: -3, type: "Trap" },
              { x: 4, y: -7, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 3, y: -3, type: "Difficult Terrain" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 3, y: -4, type: "Obstacle" },
              { x: 5, y: -7, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 3, y: -9, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "103.3",
        reference: { tile: "03-A", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 2, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 2, y: -2 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [{ x: 2, y: 1, type: "Trap" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 1, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [{ x: 2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 3, y: 3 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "135.2",
        reference: { tile: "12-D", tileOrientation: "120" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 0, y: -6 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: -6 }] },
        ],
        monsters: [
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nee" },
              { x: -1, y: -3, levels: "aan" },
              { x: 1, y: -5, levels: "eee" },
              { x: 5, y: -6, levels: "nne" },
              { x: 2, y: -7, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 0, y: -3 },
              { x: 1, y: -3 },
              { x: 2, y: -6 },
            ],
          },
          { name: "Stalagmites", orientation: 0, positions: [{ x: 4, y: -6 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 0, y: 0, type: "Treasure" },
              { x: 6, y: -7, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-D",
        orientation: "120",
        center: { x: 7, y: 0 },
        origin: { x: 5, y: 4 },
      },
      {
        name: "11-D",
        orientation: "180",
        center: { x: 1, y: -2 },
        origin: { x: -4, y: 1 },
      },
      {
        name: "11-B",
        orientation: "120",
        center: { x: -7, y: 0 },
        origin: { x: -9, y: 5 },
      },
      {
        name: "03-A",
        orientation: "240",
        center: { x: -3, y: 5 },
        origin: { x: -5, y: 4 },
      },
    ],
  },
  "43": {
    id: "43",
    maps: [
      {
        type: "scenario",
        name: 51,
        reference: { tile: "12-A", tileOrientation: "120" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 7, y: -7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 0 },
              { x: 0, y: 0 },
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 6, y: -6, levels: "nne" },
              { x: 5, y: -7, levels: "nne" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 0, y: -4, levels: "eee" },
              { x: 1, y: -4, levels: "nne" },
              { x: 0, y: -5, levels: "nnes" },
              { x: 1, y: -5, levels: "anes" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: 4, y: -6, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 240,
            positions: [
              {
                x: 7,
                y: -7,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "117.2" },
                  id: "scenario/51/token/1",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 2, y: -5 },
              { x: 1, y: -6 },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -1, y: -4 },
              { x: 2, y: -6 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "2.3",
        reference: { tile: "03-B", tileOrientation: "60" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "aan" },
              { x: -3, y: -1, levels: "eee" },
              { x: -2, y: -1, levels: "nne" },
              { x: 0, y: -1, levels: "ann" },
              { x: -2, y: -3, levels: "nee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -1, y: 0, levels: "eee" },
              { x: -1, y: -2, levels: "ane" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "117.2",
        reference: { tile: "10-A", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -3 }] },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -3, y: 1, levels: "nnn" },
              { x: 0, y: -1, levels: "ann" },
              { x: -3, y: -3, levels: "nnn" },
              { x: 0, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "nne" },
              { x: -2, y: -3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 240,
            positions: [
              {
                x: 1,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "2.3" },
                  id: "section/117.2/token/2",
                },
              },
            ],
          },
          { name: "Barricade", orientation: 60, positions: [{ x: -2, y: -1 }] },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "12-A",
        orientation: "120",
        center: { x: -7, y: 3 },
        origin: { x: -9, y: 7 },
      },
      {
        name: "10-A",
        orientation: "60",
        center: { x: 1, y: -2 },
        origin: { x: 3, y: 0 },
      },
      {
        name: "03-B",
        orientation: "60",
        center: { x: 7, y: -3 },
        origin: { x: 9, y: -2 },
      },
    ],
  },
  "44": {
    id: "44",
    maps: [
      {
        type: "scenario",
        name: 52,
        reference: { tile: "03-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: 5 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -6, y: 4, levels: "nnn" },
              { x: -5, y: 4, levels: "nnn" },
              { x: -5, y: 3, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [{ x: -6, y: 5, type: "Door" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: -4, y: 2, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "52.1",
        reference: { tile: "16-D", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2", orientation: 0, positions: [{ x: -7, y: 7 }] },
          { name: "2g", orientation: 0, positions: [{ x: -7, y: 7 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -10, y: 6, levels: "nne" },
              { x: -3, y: 6, levels: "nee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -7, y: 3, levels: "ana" },
              { x: -3, y: 3, levels: "ana" },
              { x: -4, y: 1, levels: "ana" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [{ x: -7, y: 7, type: "Door" }],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Objective" },
              { x: -4, y: 5, type: "Objective" },
              { x: -6, y: 1, type: "Objective" },
              { x: -2, y: 1, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -7, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "149.1",
        reference: { tile: "08-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -5 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nne" },
              { x: 3, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "ann" },
              { x: 4, y: -1, levels: "aan" },
              { x: 3, y: -3, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 2, y: -1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "0",
        center: { x: -1, y: 0 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "08-A",
        orientation: "180",
        center: { x: -5, y: 7 },
        origin: { x: -7, y: 9 },
      },
      {
        name: "03-B",
        orientation: "0",
        center: { x: 6, y: -7 },
        origin: { x: 9, y: -9 },
      },
    ],
  },
  "45": {
    id: "45",
    maps: [
      {
        type: "scenario",
        name: 53,
        reference: { tile: "14-A", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 4, y: 5 }] },
          { name: "a", orientation: 0, positions: [{ x: 5, y: -8 }] },
          { name: "b", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "c", orientation: 0, positions: [{ x: 3, y: 2 }] },
          { name: "d", orientation: 0, positions: [{ x: 6, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 1, y: -1 },
              { x: 2, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: 3, y: 4, levels: "nne" }],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 2, y: -5, levels: "nee" },
              { x: 6, y: -7, levels: "aan" },
            ],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: 5, y: 3, levels: "nees" },
              { x: 2, y: 2, levels: "eees" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 1, y: 4, levels: "eee" },
              { x: 5, y: -4, levels: "nne" },
              { x: 4, y: 3, levels: "anes" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 4,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "85.2" },
                  id: "scenario/53/token/1",
                },
              },
            ],
          },
          {
            name: "Stairs",
            orientation: 180,
            positions: [{ x: 1, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Huge Water",
            orientation: 180,
            positions: [
              { x: 2, y: 2 },
              { x: 5, y: 2 },
            ],
          },
          { name: "Large Water", orientation: 60, positions: [{ x: 4, y: 3 }] },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 7, y: 2 },
              { x: 4, y: 3 },
              { x: 5, y: 3 },
              { x: 2, y: 2 },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: 3, y: 0 },
              { x: 1, y: -2 },
              { x: 6, y: -6 },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 120,
            positions: [{ x: 2, y: -4 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "85.2",
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 9, y: -7 }] },
          { name: "1g", orientation: 0, positions: [{ x: 9, y: -7 }] },
          { name: "e", orientation: 0, positions: [{ x: 6, y: -5 }] },
          { name: "f", orientation: 0, positions: [{ x: 9, y: -6 }] },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: 3, y: -5, levels: "nee" }],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 5, y: -1, levels: "eee" },
              { x: 1, y: -2, levels: "aan" },
            ],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: 7, y: -5, levels: "eees" },
              { x: 9, y: -5, levels: "anes" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 8, y: -2, levels: "nee" },
              { x: 2, y: -3, levels: "nne" },
              { x: 4, y: -4, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: 7, y: -5 },
              { x: 9, y: -6 },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 7, y: -5 },
              { x: 9, y: -5 },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [
              { x: 4, y: -3, type: "Obstacle" },
              { x: 6, y: -4, type: "Obstacle" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 7, y: -3 }],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: 7, y: -2, type: "Obstacle" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 6, y: -2, type: "Obstacle" },
              { x: 5, y: -3, type: "Obstacle" },
              { x: 6, y: -3, type: "Obstacle" },
              { x: 5, y: -5, type: "Obstacle" },
              { x: 8, y: -5, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              {
                x: 4,
                y: -1,
                trigger: {
                  type: "on-death",
                  action: "reveal",
                  what: { type: "section", name: "39.2" },
                  id: "section/85.2/overlay/Ice Pillar",
                },
                type: "Objective",
              },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: -2, y: 6 },
        origin: { x: -7, y: 9 },
      },
      {
        name: "14-A",
        orientation: "270",
        center: { x: 2, y: -8 },
        origin: { x: -2, y: -3 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: 1, y: 0 },
        origin: { x: 5, y: -1 },
      },
    ],
  },
  "46": {
    id: "46",
    maps: [
      {
        type: "scenario",
        name: 54,
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "d", orientation: 0, positions: [{ x: -4, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 2 },
              { x: -7, y: 2 },
              { x: -7, y: 1 },
              { x: -7, y: 0 },
              { x: -6, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -2, y: 2, levels: "aee" },
              { x: -1, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -1, y: 2, levels: "nnn" },
              { x: 0, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "40.2" },
                  id: "scenario/54/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "40.2",
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 2, y: -1 },
              { x: 4, y: -2 },
              { x: 2, y: -3 },
              { x: 5, y: -4 },
              { x: 4, y: -5 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: 7, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: 10, y: -6 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: 4, y: 0, levels: "nee" },
              { x: 7, y: -6, levels: "nne" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: 8, y: -2, levels: "aan" },
              { x: 8, y: -3, levels: "eee" },
              { x: 9, y: -4, levels: "ann" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: 4, y: 0 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: -4, y: 0 },
        origin: { x: 0, y: -1 },
      },
    ],
  },
  "47": {
    id: "47",
    maps: [
      {
        type: "scenario",
        name: 55,
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 0 },
              { x: -4, y: 0 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "eee" }],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "ann" },
              { x: -8, y: 6, levels: "aan" },
              { x: -9, y: 4, levels: "nee" },
              { x: -2, y: 4, levels: "nne" },
            ],
          },
        ],
        overlays: [
          { name: "Log", orientation: 60, positions: [{ x: -4, y: 5 }] },
          {
            name: "Log",
            orientation: 300,
            positions: [{ x: -6, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -8, y: 5, type: "Obstacle" },
              { x: -3, y: 3, type: "Obstacle" },
              { x: -3, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -6, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "45.1",
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -1, y: -3 },
              { x: 2, y: -3 },
              { x: 0, y: -5 },
              { x: 3, y: -5 },
              { x: 1, y: -7 },
              { x: 4, y: -7 },
              { x: 2, y: -9 },
              { x: 5, y: -9 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Icespeaker",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nnn" },
              { x: -2, y: 3, levels: "aan" },
            ],
          },
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [
              { x: -4, y: 2, levels: "ann" },
              { x: 0, y: 1, levels: "nnn" },
              { x: 0, y: -2, levels: "ane" },
              { x: 4, y: -10, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -1 }],
          },
          {
            name: "Log",
            orientation: 0,
            positions: [{ x: 2, y: -6, type: "Difficult Terrain" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -1, y: -2, type: "Difficult Terrain" },
              { x: 1, y: -4 },
              { x: 1, y: -5 },
              { x: 4, y: -8 },
              { x: 3, y: -9 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: -4, y: -2 },
        origin: { x: 1, y: -5 },
      },
      {
        name: "06-A",
        orientation: "0",
        center: { x: 4, y: -2 },
        origin: { x: 5, y: -6 },
      },
      {
        name: "04-A",
        orientation: "0",
        center: { x: 0, y: 6 },
        origin: { x: 2, y: 4 },
      },
    ],
  },
  "48": {
    id: "48",
    maps: [
      {
        type: "scenario",
        name: 56,
        reference: { tile: "11-C", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 3, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 1 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 2, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "aan" },
              { x: 1, y: 4, levels: "nne" },
              { x: 0, y: 3, levels: "aan" },
              { x: 3, y: 3, levels: "eee" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 4, y: 5, levels: "ane" },
              { x: 5, y: 4, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "130.5" },
                  id: "scenario/56/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 3, y: 5, type: "Trap" },
              { x: 5, y: 3, type: "Trap" },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 4, y: 4, type: "Hazardous Terrain" },
              { x: 2, y: 3, type: "Hazardous Terrain" },
              { x: 1, y: 1, type: "Hazardous Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "31.1",
        reference: { tile: "03-D", tileOrientation: "120" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 1, y: -6 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -6 }] },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: 3, y: -5, levels: "nee" }],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -1, y: 0, levels: "eee" },
              { x: 0, y: 0, levels: "ann" },
              { x: -1, y: -1, levels: "aan" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [{ x: 2, y: -4, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: -3 },
              { x: 1, y: -4 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "130.5",
        reference: { tile: "11-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 2, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 2, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 9, y: -3 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nne" },
              { x: 4, y: 0, levels: "nnn" },
              { x: 1, y: -1, levels: "ann" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 6, y: -3, levels: "eee" },
              { x: 8, y: -3, levels: "ann" },
              { x: 9, y: -4, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 9,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "31.1" },
                  id: "section/130.5/token/2",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 7, y: -4, type: "Trap" },
              { x: 9, y: -5 },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Hazardous Terrain" },
              { x: 5, y: -2, type: "Hazardous Terrain" },
              { x: 2, y: -2, type: "Hazardous Terrain" },
              { x: 6, y: -2, type: "Hazardous Terrain" },
              { x: 8, y: -4, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 9, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-C",
        orientation: "240",
        center: { x: -3, y: -3 },
        origin: { x: -6, y: -5 },
      },
      {
        name: "11-A",
        orientation: "180",
        center: { x: 0, y: 1 },
        origin: { x: -5, y: 4 },
      },
      {
        name: "03-D",
        orientation: "120",
        center: { x: 4, y: 4 },
        origin: { x: 3, y: 7 },
      },
    ],
  },
  "49": {
    id: "49",
    maps: [
      {
        type: "scenario",
        name: 57,
        reference: { tile: "16-B", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 6, y: -1 },
              { x: 3, y: -3 },
              { x: 8, y: -5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 7, y: -1 },
              { x: 8, y: -2 },
              { x: 9, y: -4 },
              { x: 9, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 5, y: 0, levels: "nee" },
              { x: 0, y: 0, levels: "ann" },
              { x: 4, y: -1, levels: "nne" },
              { x: 1, y: -2, levels: "nnn" },
              { x: 2, y: -4, levels: "nnn" },
              { x: 6, y: -5, levels: "nee" },
              { x: 3, y: -6, levels: "aan" },
              { x: 8, y: -6, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "94.2" },
                  id: "scenario/57/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Objective" },
              { x: 3, y: -1, type: "Objective" },
              { x: 6, y: -3, type: "Objective" },
              { x: 4, y: -4, type: "Objective" },
              { x: 7, y: -4, type: "Objective" },
              { x: 4, y: -5, type: "Objective" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 0,
            positions: [
              { x: 5, y: -2, type: "Objective" },
              { x: 7, y: -6, type: "Objective" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: 5, y: -4 }],
          },
          {
            name: "Large Cave Rock",
            orientation: 300,
            positions: [
              { x: 5, y: -1, type: "Objective" },
              { x: 3, y: -2, type: "Objective" },
              { x: 6, y: -4, type: "Objective" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Objective" },
              { x: 6, y: -2, type: "Objective" },
              { x: 4, y: -3, type: "Objective" },
              { x: 7, y: -5, type: "Objective" },
              { x: 4, y: -6, type: "Objective" },
            ],
          },
          {
            name: "Large Ice Crystal",
            orientation: 180,
            positions: [{ x: 7, y: -3 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 5, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "16.3",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -1, y: 2 },
              { x: -1, y: 1 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -1, y: 2 },
              { x: -1, y: 1 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: 3, y: -2 }] },
          { name: "b", orientation: 0, positions: [{ x: 4, y: 0 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 3, y: 1, levels: "aan" },
              { x: 2, y: -1, levels: "eee" },
              { x: 3, y: -1, levels: "eee" },
              { x: 2, y: -2, levels: "nne" },
              { x: 4, y: -2, levels: "nne" },
            ],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: 2, y: 1, levels: "ann" }],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "94.2",
        reference: { tile: "11-D", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 6, y: 4 }] },
          { name: "1g", orientation: 0, positions: [{ x: 6, y: 4 }] },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 3, y: 0 },
              { x: 3, y: -1 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 3, y: 4 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 0, y: 4, levels: "nee" },
              { x: 1, y: 3, levels: "nne" },
              { x: 0, y: 2, levels: "aan" },
              { x: 1, y: 0, levels: "eee" },
              { x: 2, y: -1, levels: "ann" },
            ],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 3, y: 5, levels: "ann" },
              { x: 4, y: 4, levels: "eee" },
              { x: 3, y: 3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "16.3" },
                  mode: "all",
                  id: "section/94.2/token/2",
                },
              },
              {
                x: 3,
                y: -1,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "16.3" },
                  mode: "all",
                  id: "section/94.2/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: 4, type: "Objective" },
              { x: 2, y: 3, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "180",
        center: { x: 3, y: 2 },
        origin: { x: -2, y: 5 },
      },
      {
        name: "11-D",
        orientation: "240",
        center: { x: -4, y: 0 },
        origin: { x: -7, y: -2 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: -1, y: -4 },
        origin: { x: -3, y: -4 },
      },
    ],
  },
  "4A": {
    id: "4A",
    maps: [
      {
        type: "scenario",
        name: 7,
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -9, y: 5 },
              { x: -9, y: 4 },
              { x: -8, y: 3 },
              { x: -8, y: 2 },
              { x: -7, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "nee" },
              { x: -4, y: 5, levels: "aan" },
              { x: -3, y: 3, levels: "eee" },
              { x: -3, y: 1, levels: "nee" },
              { x: -2, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [
              { x: -8, y: 6, levels: "nne" },
              { x: -7, y: 5, levels: "ann" },
              { x: -5, y: 1, levels: "ann" },
              { x: -5, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "75.1" },
                  id: "scenario/7/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
              { x: -6, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "75.1",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Fist",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "bbb" }],
          },
          {
            name: "Snowdancer",
            orientation: 0,
            positions: [{ x: -5, y: 5, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "15-A",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 7, y: -3 },
      },
    ],
  },
  "4B": {
    id: "4B",
    maps: [
      {
        type: "scenario",
        name: 8,
        reference: { tile: "11-B", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 3, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 9, y: -4 },
              { x: 8, y: -5 },
              { x: 9, y: -5 },
              { x: 10, y: -5 },
              { x: 9, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "aan" },
              { x: 2, y: -2, levels: "ann" },
              { x: 3, y: -2, levels: "eee" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 6, y: -2, levels: "nee" },
              { x: 6, y: -3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: -3,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "75.1" },
                  id: "scenario/8/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Obstacle" },
              { x: 4, y: -2, type: "Obstacle" },
              { x: 7, y: -2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "75.1",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -4, y: 7 },
              { x: -6, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Fist",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "bbb" }],
          },
          {
            name: "Snowdancer",
            orientation: 0,
            positions: [{ x: -5, y: 5, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: -2 },
        origin: { x: 3, y: -5 },
      },
      {
        name: "11-B",
        orientation: "180",
        center: { x: 1, y: 2 },
        origin: { x: -4, y: 5 },
      },
    ],
  },
  "5": {
    id: "5",
    maps: [
      {
        type: "scenario",
        name: 9,
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -7, y: 5 },
              { x: -6, y: 5 },
              { x: -5, y: 5 },
              { x: -6, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "aee" },
              { x: -5, y: 1, levels: "eee" },
              { x: -1, y: 1, levels: "nnn" },
              { x: -3, y: 0, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "7.2" },
                  id: "scenario/9/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Corridor" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: 4, type: "Obstacle" },
              { x: -6, y: 2, type: "Obstacle" },
              { x: -2, y: 2, type: "Obstacle" },
              { x: -2, y: 1, type: "Obstacle" },
              { x: -4, y: 0, type: "Obstacle" },
              { x: 0, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "7.2",
        reference: { tile: "13-E", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: 7 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 7 }] },
          { name: "b", orientation: 0, positions: [{ x: -6, y: 4 }] },
          { name: "c", orientation: 0, positions: [{ x: -5, y: 2 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -3, y: 6, levels: "nne" },
              { x: -7, y: 6, levels: "aee" },
              { x: -1, y: 2, levels: "eee" },
              { x: -4, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-E",
        orientation: "0",
        center: { x: 0, y: -5 },
        origin: { x: 3, y: -8 },
      },
      {
        name: "07-A",
        orientation: "0",
        center: { x: 0, y: 1 },
        origin: { x: 4, y: 0 },
      },
      {
        name: "01-B",
        orientation: "180",
        center: { x: -1, y: 5 },
        origin: { x: -3, y: 5 },
      },
    ],
  },
  "50": {
    id: "50",
    maps: [
      {
        type: "scenario",
        name: 58,
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -6, y: 1 }] },
          { name: "b", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "d", orientation: 0, positions: [{ x: -1, y: 2 }] },
          { name: "e", orientation: 0, positions: [{ x: -9, y: 4 }] },
          { name: "f", orientation: 0, positions: [{ x: -5, y: 6 }] },
          { name: "g", orientation: 0, positions: [{ x: -10, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: -6, y: 3 },
              { x: -4, y: 3 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: -5, y: 3, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 5, y: -3 },
      },
    ],
  },
  "51": {
    id: "51",
    maps: [
      {
        type: "scenario",
        name: 60,
        reference: { tile: "06-B", tileOrientation: "180" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 4, y: -7 },
              { x: 5, y: -7 },
              { x: 4, y: -8 },
              { x: 5, y: -8 },
              { x: 6, y: -8 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nee" },
              { x: 0, y: 0, levels: "nne" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 2, y: -3, levels: "nee" },
              { x: 3, y: -3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "32.1" },
                  mode: "all",
                  id: "scenario/60/token/1",
                },
              },
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "32.1" },
                  mode: "all",
                  id: "scenario/60/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "32.1",
        reference: { tile: "10-C", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -2, y: -1 },
              { x: -3, y: -1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -2, y: -1 },
              { x: -3, y: -1 },
            ],
          },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 5 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 0, y: 4 },
              { x: -1, y: 0 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: 5, y: 2 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nne" },
              { x: 3, y: 4, levels: "nne" },
              { x: -4, y: 0, levels: "nee" },
              { x: 2, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -7, y: 4, levels: "nne" },
              { x: -6, y: 4, levels: "nee" },
              { x: -3, y: 2, levels: "nee" },
              { x: -5, y: 1, levels: "nne" },
              { x: 5, y: 0, levels: "nne" },
              { x: 6, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "nne" },
              { x: 1, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "137.1" },
                  mode: "all",
                  id: "section/32.1/token/2",
                },
              },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 4, type: "Corridor" },
              { x: 0, y: 2, type: "Corridor" },
              { x: 1, y: 0 },
            ],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 3, type: "Corridor" },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [
              { x: -5, y: 3, type: "Obstacle" },
              { x: 1, y: 3, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
              { x: 5, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "137.1",
        reference: { tile: "08-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -5 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nne" },
              { x: 3, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "nnn" },
              { x: 2, y: 0, levels: "nnn" },
              { x: 2, y: -1, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 1, y: -2, type: "Obstacle" },
              { x: 2, y: -2, type: "Obstacle" },
              { x: 3, y: -2, type: "Obstacle" },
              { x: 4, y: -2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "10-C",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 1, y: -2 },
      },
      {
        name: "10-A",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 7, y: -2 },
      },
      {
        name: "08-A",
        orientation: "180",
        center: { x: 0, y: 6 },
        origin: { x: -2, y: 8 },
      },
      {
        name: "06-B",
        orientation: "180",
        center: { x: 1, y: -8 },
        origin: { x: -2, y: -4 },
      },
    ],
  },
  "52": {
    id: "52",
    maps: [
      {
        type: "scenario",
        name: 61,
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 5, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -6 },
              { x: 6, y: -6 },
              { x: 7, y: -6 },
              { x: 8, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 8, y: -2, levels: "nne" },
              { x: 5, y: -3, levels: "nee" },
              { x: 2, y: -3, levels: "nne" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 6, y: 0, levels: "nee" },
              { x: 2, y: -1, levels: "nee" },
              { x: 5, y: -2, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "133.3" },
                  id: "scenario/61/token/2",
                },
              },
              {
                x: 5,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "36.5" },
                  id: "scenario/61/token/3",
                },
              },
              {
                x: 1,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "80.1" },
                  id: "scenario/61/token/1",
                },
              },
              {
                x: 9,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "29.4" },
                  id: "scenario/61/token/4",
                },
              },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Icy Terrain" },
              { x: 4, y: -2, type: "Icy Terrain" },
              { x: 6, y: -2, type: "Icy Terrain" },
              { x: 6, y: -3 },
              { x: 5, y: -4, type: "Icy Terrain" },
              { x: 6, y: -5, type: "Icy Terrain" },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Difficult Terrain" },
              { x: 5, y: -1, type: "Difficult Terrain" },
              { x: 7, y: -3, type: "Difficult Terrain" },
              { x: 3, y: -3, type: "Difficult Terrain" },
              { x: 5, y: -5, type: "Difficult Terrain" },
              { x: 7, y: -5, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 7, y: -1, type: "Obstacle" },
              { x: 2, y: -2, type: "Obstacle" },
              { x: 6, y: -4, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "29.4",
        reference: { tile: "11-C", tileOrientation: "300" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: -5, y: 5 }] }],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -4, y: 7, levels: "nne" },
              { x: -1, y: 3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -4, y: 8, type: "Obstacle" },
              { x: -2, y: 3, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "36.3",
        reference: { tile: "02-G", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -12, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -12, y: -2 }] },
          { name: "3", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "a", orientation: 0, positions: [{ x: -10, y: 0 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: 3, y: -2, levels: "nee" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [{ x: 1, y: -1, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -11, y: -2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "80.1",
        reference: { tile: "02-E", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: 2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 2 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: -3, y: 2, levels: "nne" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -3, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "133.3",
        reference: { tile: "01-A", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 6, y: 2 },
              { x: 14, y: 2 },
              { x: 4, y: -2 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 6, y: 2 },
              { x: 14, y: 2 },
              { x: 4, y: -2 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 9, y: 3 },
              { x: 10, y: 3 },
              { x: 10, y: 1 },
              { x: 11, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [{ x: 1, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 10, y: 2, type: "Treasure" },
              { x: 1, y: -1, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: 1, y: -2 },
        origin: { x: -4, y: 1 },
      },
      {
        name: "11-C",
        orientation: "300",
        center: { x: 8, y: -2 },
        origin: { x: 10, y: -7 },
      },
      {
        name: "02-G",
        orientation: "180",
        center: { x: 0, y: 4 },
        origin: { x: -2, y: 6 },
      },
      {
        name: "02-E",
        orientation: "0",
        center: { x: -5, y: -2 },
        origin: { x: -3, y: -4 },
      },
      {
        name: "01-A",
        orientation: "180",
        center: { x: -5, y: 4 },
        origin: { x: -7, y: 4 },
      },
    ],
  },
  "53": {
    id: "53",
    maps: [
      { type: "scenario", name: 62, triggers: [] },
      {
        type: "scenario",
        name: 63,
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -11, y: 8 }] },
          { name: "b", orientation: 0, positions: [{ x: -4, y: 8 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 6 },
              { x: -7, y: 6 },
              { x: -6, y: 6 },
              { x: -5, y: 6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Seeker of the Abyss",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "bbb" }],
          },
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "nee" }],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [{ x: -2, y: 1, levels: "nne" }],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -11, y: 10, levels: "nee" },
              { x: -8, y: 10, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: -9, y: 7, type: "Corridor" },
              { x: -5, y: 7 },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: -6, y: 3 }],
          },
          {
            name: "Large Cave Rock",
            orientation: 300,
            positions: [{ x: -3, y: 2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -12, y: 10 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 1, y: -3 },
        origin: { x: 6, y: -6 },
      },
      {
        name: "07-A",
        orientation: "180",
        center: { x: -2, y: 3 },
        origin: { x: -6, y: 4 },
      },
    ],
  },
  "54": {
    id: "54",
    maps: [
      {
        type: "scenario",
        name: 63,
        reference: { tile: "02-J", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 4 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 1, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "167.1" },
                  id: "scenario/63/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 3, type: "Corridor" },
              { x: 1, y: 1 },
            ],
          },
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 1, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 3, y: 3, type: "Objective" },
              { x: -1, y: 1, type: "Objective" },
              { x: 3, y: 1, type: "Objective" },
              { x: 4, y: 0, type: "Objective" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Objective" }],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: 1, y: 3 }],
          },
          {
            name: "Large Cave Rock",
            orientation: 120,
            positions: [{ x: -3, y: 1 }],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 64, triggers: [] },
      {
        type: "section",
        name: "13.3",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 3, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: -3 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Large Cave Rock",
            orientation: 0,
            positions: [{ x: 2, y: 1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "167.1",
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: 7 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "13.3" },
                  id: "section/167.1/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Objective" },
              { x: -4, y: 5, type: "Objective" },
              { x: -6, y: 4, type: "Objective" },
              { x: -5, y: 3, type: "Objective" },
              { x: -3, y: 3, type: "Objective" },
              { x: -1, y: 0, type: "Objective" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 0,
            positions: [
              { x: -4, y: 4, type: "Objective" },
              { x: -2, y: 1, type: "Objective" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: -2, y: 3 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-B",
        orientation: "0",
        center: { x: -1, y: 1 },
        origin: { x: 3, y: -2 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: -4, y: 8 },
        origin: { x: -6, y: 8 },
      },
      {
        name: "02-L",
        orientation: "0",
        center: { x: 6, y: -5 },
        origin: { x: 8, y: -7 },
      },
      {
        name: "02-J",
        orientation: "0",
        center: { x: 2, y: -5 },
        origin: { x: 4, y: -7 },
      },
    ],
  },
  "55": {
    id: "55",
    maps: [
      {
        type: "scenario",
        name: 65,
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -9, y: 5 },
              { x: -9, y: 4 },
              { x: -8, y: 3 },
              { x: -8, y: 2 },
              { x: -7, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "nee" }],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -7, y: 6, levels: "nne" },
              { x: -5, y: 2, levels: "ann" },
              { x: -3, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: -3, y: 4, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "80.2" },
                  id: "scenario/65/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
              { x: -6, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "80.2",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 3 }] },
        ],
        monsters: [
          {
            name: "Frozen Fist",
            orientation: 0,
            positions: [{ x: -3, y: 4, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Large Ice Crystal",
            orientation: 300,
            positions: [{ x: -2, y: 2, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "15-A",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 7, y: -3 },
      },
    ],
  },
  "56": {
    id: "56",
    maps: [
      {
        type: "scenario",
        name: 66,
        reference: { tile: "03-A", tileOrientation: "60" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 0 },
              { x: -2, y: -1 },
              { x: -1, y: -1 },
              { x: 0, y: -1 },
              { x: 0, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Harbinger of Shadow",
            orientation: 0,
            positions: [{ x: -1, y: 1, levels: "bbb" }],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -4, y: -1, levels: "nee" },
              { x: -4, y: -2, levels: "nee" },
            ],
          },
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [{ x: -2, y: -3, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "99.4" },
                  id: "scenario/66/token/1",
                },
              },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: -3,
                trigger: {
                  type: "on-death",
                  action: "reveal",
                  what: { type: "section", name: "3.2" },
                  id: "scenario/66/overlay/Altar",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "3.2",
        reference: { tile: "15-B", tileOrientation: "0" },
        tokens: [{ name: "a", orientation: 0, positions: [{ x: -2, y: 1 }] }],
        monsters: [
          {
            name: "Harbinger of Shadow",
            orientation: 0,
            positions: [{ x: -4, y: 5, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -6, y: 6 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "90.4",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 3, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 3, y: -3 }] },
        ],
        monsters: [
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [
              { x: 0, y: 1, levels: "nne" },
              { x: 3, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nee" },
              { x: 4, y: -2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Nest",
            orientation: 0,
            positions: [
              { x: 0, y: 2, type: "Obstacle" },
              { x: 4, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 1, y: 2, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "99.4",
        reference: { tile: "08-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 5 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "ane" },
              { x: -2, y: 2, levels: "nee" },
            ],
          },
          {
            name: "Shrike Fiend",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "ann" },
              { x: -3, y: 3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "90.4" },
                  id: "section/99.4/token/2",
                },
              },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: -3, y: 2 }],
          },
          {
            name: "Nest",
            orientation: 0,
            positions: [{ x: -1, y: 3, type: "Obstacle" }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 2,
                trigger: {
                  type: "on-death",
                  action: "reveal",
                  what: { type: "section", name: "66.3" },
                  id: "section/99.4/overlay/Altar",
                },
                type: "Objective",
              },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-B",
        orientation: "0",
        center: { x: 4, y: 3 },
        origin: { x: 7, y: 0 },
      },
      {
        name: "08-B",
        orientation: "0",
        center: { x: -4, y: -3 },
        origin: { x: -1, y: -5 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: -6, y: 3 },
        origin: { x: -8, y: 3 },
      },
      {
        name: "03-A",
        orientation: "60",
        center: { x: 3, y: -5 },
        origin: { x: 5, y: -4 },
      },
    ],
  },
  "57": {
    id: "57",
    maps: [
      { type: "scenario", name: 67, triggers: [] },
      {
        type: "scenario",
        name: 68,
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -3, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: -8, y: 2 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: 8 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: -2, y: 0 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Render",
            orientation: 0,
            positions: [{ x: -6, y: 5, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -9, y: 7, type: "Corridor" },
              { x: -7, y: 7, type: "Corridor" },
              { x: -5, y: 7, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: -4, y: 7, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: -4, y: 7, type: "Corridor" }],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -6, y: 9, type: "Difficult Terrain" },
              { x: -10, y: 8, type: "Difficult Terrain" },
              { x: -7, y: 5, type: "Difficult Terrain" },
              { x: -4, y: 4, type: "Difficult Terrain" },
              { x: -7, y: 3, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -10, y: 6, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Tree",
            orientation: 180,
            positions: [
              { x: -9, y: 9 },
              { x: -4, y: 5 },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -6, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -10, y: 10 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 1, y: -3 },
        origin: { x: 6, y: -6 },
      },
      {
        name: "07-B",
        orientation: "180",
        center: { x: -2, y: 3 },
        origin: { x: -6, y: 4 },
      },
    ],
  },
  "58": {
    id: "58",
    maps: [
      {
        type: "scenario",
        name: 69,
        reference: { tile: "16-D", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -9, y: 4 },
              { x: -8, y: 4 },
              { x: -8, y: 3 },
              { x: -8, y: 2 },
              { x: -7, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "The Orphan",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "bbb" }],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -10, y: 6, levels: "nee" },
              { x: -7, y: 0, levels: "nee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "nnn" },
              { x: -1, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "61.1" },
                  id: "scenario/69/token/1",
                },
              },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [
              { x: -3, y: 5 },
              { x: -5, y: 2 },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [
              { x: -6, y: 4, type: "Difficult Terrain" },
              { x: -1, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [
              { x: -5, y: 6, type: "Obstacle" },
              { x: -2, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "61.1",
        reference: { tile: "02-F", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "a", orientation: 0, positions: [{ x: 6, y: -1 }] },
        ],
        monsters: [
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "aan" },
              { x: 2, y: 0, levels: "nnn" },
              { x: 4, y: 0, levels: "ann" },
              { x: 6, y: 0, levels: "nnn" },
              { x: 1, y: -3, levels: "nnn" },
              { x: 3, y: -3, levels: "ann" },
              { x: 6, y: -3, levels: "nnn" },
              { x: 8, y: -3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: 4, y: -1, type: "Corridor" },
              { x: 5, y: -3 },
            ],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Corridor" },
              { x: 4, y: -2, type: "Corridor" },
            ],
          },
          {
            name: "Control Console",
            orientation: 60,
            positions: [{ x: 7, y: -1 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 7, y: -3, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: 0, y: -3 },
      },
      {
        name: "02-H",
        orientation: "180",
        center: { x: 5, y: 0 },
        origin: { x: 3, y: 2 },
      },
      {
        name: "02-F",
        orientation: "180",
        center: { x: 1, y: 0 },
        origin: { x: -1, y: 2 },
      },
    ],
  },
  "59": {
    id: "59",
    maps: [
      {
        type: "scenario",
        name: 70,
        reference: { tile: "04-B", tileOrientation: "240" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 0, y: 8 },
              { x: 3, y: 2 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: -1, y: 5 }] },
          { name: "b", orientation: 0, positions: [{ x: -6, y: 10 }] },
          { name: "c", orientation: 0, positions: [{ x: -6, y: 12 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 0 }] },
          { name: "e", orientation: 0, positions: [{ x: 2, y: -2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 5 },
              { x: -2, y: 5 },
              { x: -3, y: 4 },
              { x: -2, y: 4 },
              { x: -1, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -1, y: 8, levels: "nne" },
              { x: 2, y: 2, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 240,
            positions: [
              {
                x: 0,
                y: 8,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "121.1" },
                  mode: "all",
                  id: "scenario/70/token/1",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 300,
            positions: [
              {
                x: 3,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "121.1" },
                  mode: "all",
                  id: "scenario/70/token/1",
                },
              },
            ],
          },
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 6, type: "Corridor" },
              { x: 1, y: 3, type: "Corridor" },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 60,
            positions: [
              { x: -3, y: 10 },
              { x: -4, y: 9 },
            ],
          },
          {
            name: "Power Conduit",
            orientation: 300,
            positions: [
              { x: 1, y: 1, type: "Difficult Terrain" },
              { x: 3, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [
              { x: -4, y: 11, type: "Obstacle" },
              { x: 3, y: -1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 71, triggers: [] },
      {
        type: "section",
        name: "121.1",
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -4, y: 0 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -7, y: 6 },
              { x: -4, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -2, y: 5, levels: "nne" },
              { x: 0, y: 1, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Power Conduit",
            orientation: 0,
            positions: [{ x: -4, y: 3 }],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [{ x: -2, y: 3, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 6, y: -3 },
      },
      {
        name: "08-A",
        orientation: "120",
        center: { x: -5, y: 5 },
        origin: { x: -5, y: 7 },
      },
      {
        name: "04-B",
        orientation: "240",
        center: { x: 1, y: -5 },
        origin: { x: -1, y: -5 },
      },
      {
        name: "01-D",
        orientation: "0",
        center: { x: -2, y: -1 },
        origin: { x: 0, y: -1 },
      },
    ],
  },
  "6": {
    id: "6",
    maps: [
      {
        type: "scenario",
        name: 10,
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 2 },
              { x: -1, y: 2 },
              { x: -1, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -8, y: 2, levels: "eee" },
              { x: -6, y: 2, levels: "aan" },
              { x: -4, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -4, y: 2, levels: "eee" },
              { x: -6, y: 1, levels: "aan" },
              { x: -6, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -8,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "12.2" },
                  id: "scenario/10/token/1",
                },
              },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -5, y: 2, type: "Objective" },
              { x: -5, y: 1, type: "Objective" },
              { x: -4, y: 1, type: "Objective" },
              { x: -7, y: 1, type: "Objective" },
              { x: -7, y: 0, type: "Objective" },
              { x: -5, y: 0, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "12.2",
        reference: { tile: "02-E", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 4, y: 2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 4, y: 2 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 2 }] },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "ann" },
              { x: 1, y: 3, levels: "ann" },
              { x: -1, y: 1, levels: "aan" },
              { x: 3, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "eee" },
              { x: 2, y: 1, levels: "eee" },
              { x: -1, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "22.2" },
                  id: "section/12.2/token/2",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 3, type: "Corridor" },
              { x: 1, y: 1, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 2, type: "Corridor" },
              { x: 1, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [
              { x: 0, y: 2, type: "Corridor" },
              { x: 1, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 2, y: 3, type: "Objective" },
              { x: 1, y: 2, type: "Objective" },
              { x: 3, y: 1, type: "Objective" },
              { x: -2, y: 0, type: "Objective" },
              { x: 0, y: 0, type: "Objective" },
              { x: 4, y: 0, type: "Objective" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -2, y: 3, type: "Objective" },
              { x: -2, y: 2, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "22.2",
        reference: { tile: "13-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 1, y: -2 },
              { x: 2, y: -3 },
              { x: 2, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "nee" },
              { x: 5, y: -5, levels: "nne" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "eee" },
              { x: 3, y: -2, levels: "ane" },
              { x: 4, y: -4, levels: "ane" },
              { x: 5, y: -6, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Objective" },
              { x: 4, y: -2, type: "Objective" },
              { x: 3, y: -3, type: "Objective" },
              { x: 5, y: -3, type: "Objective" },
              { x: 3, y: -4, type: "Objective" },
              { x: 5, y: -4, type: "Objective" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Objective" },
              { x: 3, y: -5, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-A",
        orientation: "180",
        center: { x: -7, y: 0 },
        origin: { x: -10, y: 3 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: 8, y: 0 },
        origin: { x: 12, y: -1 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 4, y: -2 },
      },
      {
        name: "02-E",
        orientation: "0",
        center: { x: -2, y: 0 },
        origin: { x: 0, y: -2 },
      },
    ],
  },
  "60": {
    id: "60",
    maps: [
      { type: "scenario", name: 72, triggers: [] },
      {
        type: "scenario",
        name: 73,
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 2, y: 0 },
              { x: 3, y: 0 },
              { x: 4, y: 0 },
              { x: 5, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Fracture of the Deep",
            orientation: 0,
            positions: [{ x: 1, y: 5, levels: "bbb" }],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "nne" },
              { x: 8, y: 1, levels: "nee" },
            ],
          },
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "nne" },
              { x: 7, y: 3, levels: "nee" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: 7, y: 5, levels: "nne" },
              { x: -3, y: 1, levels: "nee" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "nee" },
              { x: 9, y: 1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 4, type: "Corridor" },
              { x: 5, y: 4, type: "Corridor" },
              { x: 0, y: 2 },
              { x: 6, y: 2, type: "Corridor" },
            ],
          },
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: -1, y: 3, type: "Corridor" },
              { x: 5, y: 3, type: "Corridor" },
              { x: 0, y: 1, type: "Corridor" },
              { x: 6, y: 1 },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -3, y: 5, type: "Difficult Terrain" },
              { x: 5, y: 5, type: "Difficult Terrain" },
              { x: -5, y: 4, type: "Difficult Terrain" },
              { x: -2, y: 2, type: "Difficult Terrain" },
              { x: 8, y: 2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 0, y: 6, type: "Obstacle" },
              { x: 1, y: 6, type: "Obstacle" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 0, y: 3, type: "Obstacle" },
              { x: 4, y: 3, type: "Obstacle" },
              { x: 3, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-B",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "13-D",
        orientation: "180",
        center: { x: 6, y: 0 },
        origin: { x: 2, y: 3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: -6, y: 0 },
        origin: { x: -2, y: -3 },
      },
    ],
  },
  "61": {
    id: "61",
    maps: [
      {
        type: "scenario",
        name: 73,
        reference: { tile: "08-B", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "a", orientation: 0, positions: [{ x: 1, y: -2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 0, y: -1 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nee" },
              { x: 2, y: -4, levels: "nne" },
            ],
          },
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [
              { x: 4, y: -1, levels: "aan" },
              { x: 5, y: -3, levels: "eee" },
              { x: 3, y: -4, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "105.1" },
                  id: "scenario/73/token/1",
                },
              },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Obstacle" },
              { x: 3, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 74, triggers: [] },
      {
        type: "section",
        name: "82.2",
        reference: { tile: "11-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -8, y: 6 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "nnn" },
              { x: -1, y: 2, levels: "ann" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: -5, y: 2, levels: "nee" }],
          },
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [{ x: -8, y: 4, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -8,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "97.3" },
                  id: "section/82.2/token/3",
                },
              },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -2, y: 2, type: "Difficult Terrain" },
              { x: -2, y: 1, type: "Difficult Terrain" },
              { x: -3, y: 1, type: "Difficult Terrain" },
              { x: -3, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Water",
            orientation: 0,
            positions: [{ x: -8, y: 5, type: "Difficult Terrain" }],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [{ x: -6, y: 2 }],
          },
          {
            name: "Large Water",
            orientation: 300,
            positions: [
              { x: -8, y: 3, type: "Difficult Terrain" },
              { x: -6, y: 3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -10, y: 5, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "97.3",
        reference: { tile: "14-B", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 1, y: -2 }] },
          { name: "3g", orientation: 0, positions: [{ x: 1, y: -2 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: 5, y: 3, levels: "nee" },
              { x: 6, y: 2, levels: "nee" },
              { x: 4, y: -3, levels: "nen" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "eee" }],
          },
          {
            name: "Harrower Infester",
            orientation: 0,
            positions: [{ x: 0, y: 1, levels: "aan" }],
          },
        ],
        overlays: [
          {
            name: "Huge Water",
            orientation: 180,
            positions: [
              { x: 1, y: 1 },
              { x: 4, y: -2 },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 0,
            positions: [{ x: 3, y: 3, type: "Obstacle" }],
          },
          {
            name: "Large Cave Rock",
            orientation: 60,
            positions: [{ x: 6, y: 0 }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [{ x: 4, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "105.1",
        reference: { tile: "03-A", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: 2 }] },
        ],
        monsters: [
          {
            name: "Deep Terror",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "nen" },
              { x: 0, y: -3, levels: "eee" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "nne" },
              { x: -3, y: -3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "82.2" },
                  id: "section/105.1/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 1, type: "Icy Terrain" },
              { x: -2, y: 0, type: "Icy Terrain" },
              { x: -1, y: 0, type: "Icy Terrain" },
              { x: -4, y: -1, type: "Icy Terrain" },
              { x: -3, y: -1, type: "Icy Terrain" },
              { x: -2, y: -1, type: "Icy Terrain" },
              { x: -1, y: -1, type: "Icy Terrain" },
              { x: -3, y: -2 },
              { x: -1, y: -2 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 0, y: -2, type: "Obstacle" },
              { x: -1, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-B",
        orientation: "210",
        center: { x: 0, y: 7 },
        origin: { x: -4, y: 6 },
      },
      {
        name: "11-B",
        orientation: "0",
        center: { x: 0, y: 1 },
        origin: { x: 5, y: -2 },
      },
      {
        name: "08-B",
        orientation: "180",
        center: { x: -2, y: -5 },
        origin: { x: -5, y: -3 },
      },
      {
        name: "03-A",
        orientation: "60",
        center: { x: 4, y: -6 },
        origin: { x: 6, y: -5 },
      },
    ],
  },
  "62": {
    id: "62",
    maps: [
      {
        type: "scenario",
        name: 75,
        reference: { tile: "12-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 0, y: -6 }] },
          { name: "b", orientation: 0, positions: [{ x: -5, y: -3 }] },
          { name: "e", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "f", orientation: 0, positions: [{ x: -2, y: -4 }] },
          { name: "g", orientation: 0, positions: [{ x: -4, y: -1 }] },
          { name: "j", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "k", orientation: 0, positions: [{ x: 0, y: -4 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: -7 },
              { x: 0, y: -7 },
              { x: 1, y: -7 },
              { x: 2, y: -7 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -1 }],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [
              { x: -6, y: -1 },
              { x: 1, y: -1 },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -1, y: 0, type: "Difficult Terrain" },
              { x: -2, y: -6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 0, y: -2, type: "Obstacle" },
              { x: -3, y: -3, type: "Obstacle" },
              { x: 2, y: -5, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 76, triggers: [] },
    ],
    layout: [
      {
        name: "12-C",
        orientation: "180",
        center: { x: 1, y: -3 },
        origin: { x: -3, y: -1 },
      },
      {
        name: "12-A",
        orientation: "0",
        center: { x: -2, y: 3 },
        origin: { x: 2, y: 1 },
      },
    ],
  },
  "63": {
    id: "63",
    maps: [
      { type: "scenario", name: 77, triggers: [] },
      {
        type: "scenario",
        name: 78,
        reference: { tile: "05-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 6, y: 2 }] },
          { name: "b", orientation: 0, positions: [{ x: -5, y: 4 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 0 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 7 }] },
          { name: "e", orientation: 0, positions: [{ x: 5, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 6, y: 4 },
              { x: 6, y: 3 },
              { x: 7, y: 1 },
              { x: 8, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 3, type: "Corridor" },
              { x: 0, y: 2, type: "Corridor" },
              { x: 3, y: 2, type: "Corridor" },
              { x: 4, y: 1 },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 3 },
              { x: 1, y: 1 },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [{ x: 3, y: 5 }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 300,
            positions: [{ x: 6, y: -1, type: "Corridor" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 0, y: 4, type: "Obstacle" },
              { x: 4, y: 3, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
              { x: 5, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      { type: "section", name: "7.1", triggers: [] },
    ],
    layout: [
      {
        name: "11-B",
        orientation: "300",
        center: { x: 0, y: 0 },
        origin: { x: 2, y: -5 },
      },
      {
        name: "05-A",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: -3, y: -2 },
      },
      {
        name: "03-A",
        orientation: "300",
        center: { x: 3, y: 0 },
        origin: { x: 4, y: -3 },
      },
    ],
  },
  "64": {
    id: "64",
    maps: [
      { type: "scenario", name: 79, triggers: [] },
      { type: "scenario", name: 80, triggers: [] },
      {
        type: "scenario",
        name: 81,
        reference: { tile: "02-A", tileOrientation: "60" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -15, y: 8 },
              { x: -15, y: 3 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -11, y: 8 },
              { x: -5, y: 5 },
            ],
          },
          {
            name: "c",
            orientation: 0,
            positions: [
              { x: -3, y: 1 },
              { x: -3, y: -4 },
            ],
          },
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: -12, y: -1 },
              { x: -6, y: -4 },
            ],
          },
          { name: "e", orientation: 0, positions: [{ x: -12, y: 5 }] },
          { name: "f", orientation: 0, positions: [{ x: -9, y: 5 }] },
          { name: "g", orientation: 0, positions: [{ x: -6, y: -1 }] },
          { name: "h", orientation: 0, positions: [{ x: -9, y: -1 }] },
          {
            name: "i",
            orientation: 0,
            positions: [
              { x: -13, y: 10 },
              { x: -12, y: 10 },
              { x: -11, y: 10 },
              { x: -10, y: 10 },
              { x: -9, y: 10 },
              { x: -17, y: 10 },
              { x: -7, y: 9 },
              { x: -17, y: 9 },
              { x: -6, y: 8 },
              { x: -17, y: 8 },
              { x: -5, y: 7 },
              { x: -17, y: 7 },
              { x: -4, y: 6 },
              { x: -17, y: 6 },
              { x: -3, y: 5 },
              { x: -17, y: 5 },
              { x: -17, y: 4 },
              { x: -17, y: 3 },
              { x: 0, y: 0 },
              { x: 0, y: -1 },
              { x: 0, y: -2 },
              { x: 0, y: -3 },
              { x: 0, y: -4 },
              { x: -12, y: -5 },
              { x: -11, y: -5 },
              { x: 0, y: -5 },
              { x: -10, y: -6 },
              { x: -9, y: -6 },
              { x: 0, y: -6 },
              { x: -8, y: -7 },
              { x: -7, y: -7 },
              { x: -6, y: -8 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -9, y: 8 },
              { x: -7, y: 7 },
              { x: -15, y: 6 },
              { x: -15, y: 5 },
              { x: -10, y: -2 },
              { x: -8, y: -3 },
              { x: -3, y: -1 },
              { x: -3, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: -8, y: 8 },
              { x: -16, y: 6 },
              { x: -9, y: -3, levels: "eee" },
              { x: -2, y: -2, levels: "eees" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -3, type: "Corridor" }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 60,
            positions: [
              { x: -3, y: -1 },
              { x: -1, y: -2 },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -9, y: 2, type: "Objective" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: -1, y: 1 },
        origin: { x: 2, y: -2 },
      },
      {
        name: "13-E",
        orientation: "60",
        center: { x: -3, y: -5 },
        origin: { x: 0, y: -5 },
      },
      {
        name: "11-E",
        orientation: "180",
        center: { x: 1, y: 6 },
        origin: { x: -4, y: 9 },
      },
      {
        name: "07-E",
        orientation: "60",
        center: { x: -9, y: 6 },
        origin: { x: -8, y: 9 },
      },
      {
        name: "02-C",
        orientation: "60",
        center: { x: 7, y: -6 },
        origin: { x: 9, y: -6 },
      },
      {
        name: "02-A",
        orientation: "60",
        center: { x: 7, y: -2 },
        origin: { x: 9, y: -2 },
      },
    ],
  },
  "65": {
    id: "65",
    maps: [
      {
        type: "scenario",
        name: 82,
        reference: { tile: "16-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -9, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 5 },
              { x: -2, y: 4 },
              { x: -2, y: 3 },
              { x: -1, y: 2 },
              { x: -1, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "ann" },
              { x: -4, y: 2, levels: "aan" },
              { x: -7, y: 1, levels: "eee" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -7, y: 3, levels: "ann" },
              { x: -2, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -7, y: 6, levels: "nnn" },
              { x: -9, y: 5, levels: "nae" },
              { x: -5, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -9,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "142.2" },
                  id: "scenario/82/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -9, y: 6, type: "Hazardous Terrain" },
              { x: -5, y: 5, type: "Hazardous Terrain" },
              { x: -9, y: 4, type: "Hazardous Terrain" },
              { x: -5, y: 1, type: "Hazardous Terrain" },
              { x: 0, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -8, y: 4 },
              { x: -4, y: 4, type: "Icy Terrain" },
              { x: -5, y: 2, type: "Icy Terrain" },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: -7, y: 4 }],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -7, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "89.1",
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -1, y: 5 },
              { x: 1, y: 1 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -1, y: 5 },
              { x: 1, y: 1 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: -3, y: 3 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "aan" },
              { x: -4, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "eee" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -3, y: 5, levels: "ann" },
              { x: -1, y: 3, levels: "nan" },
              { x: -1, y: 1, levels: "ann" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "eee" },
              { x: -2, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Hazardous Terrain" },
              { x: -6, y: 4, type: "Hazardous Terrain" },
              { x: -2, y: 1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Difficult Terrain" },
              { x: -3, y: 6, type: "Difficult Terrain" },
              { x: -3, y: 0, type: "Difficult Terrain" },
              { x: 0, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Icy Terrain" },
              { x: -2, y: 4, type: "Icy Terrain" },
              { x: -4, y: 3, type: "Icy Terrain" },
              { x: -3, y: 2, type: "Icy Terrain" },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: -2, y: 3 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -5, y: 2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "142.2",
        reference: { tile: "11-C", tileOrientation: "120" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 5, y: -5 }] },
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -5 }] },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 0, y: -3 },
              { x: 2, y: -7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [{ x: 5, y: -7, levels: "nne" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 0, y: -1, levels: "aan" },
              { x: 2, y: -4, levels: "eee" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nen" },
              { x: -1, y: -1, levels: "ane" },
              { x: 3, y: -8 },
              { x: 5, y: -10, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "89.1" },
                  id: "section/142.2/token/2",
                },
              },
              {
                x: 2,
                y: -7,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "89.1" },
                  id: "section/142.2/token/2",
                },
              },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 0, y: -2, type: "Hazardous Terrain" },
              { x: 4, y: -9 },
            ],
          },
          {
            name: "Large Ice Corridor",
            orientation: 60,
            positions: [{ x: 1, y: -2 }],
          },
          {
            name: "Large Ice Corridor",
            orientation: 300,
            positions: [{ x: 4, y: -8 }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Obstacle" },
              { x: 5, y: -8, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "0",
        center: { x: 6, y: 0 },
        origin: { x: 11, y: -3 },
      },
      {
        name: "15-A",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: -2, y: -3 },
      },
      {
        name: "11-C",
        orientation: "120",
        center: { x: -1, y: 0 },
        origin: { x: -3, y: 5 },
      },
    ],
  },
  "66": {
    id: "66",
    maps: [
      {
        type: "scenario",
        name: 83,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -3, y: 6 },
              { x: -3, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 4 },
              { x: -3, y: 4 },
              { x: -4, y: 3 },
              { x: -2, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "68.2" },
                  id: "scenario/83/token/earth",
                },
              },
              {
                x: -2,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "127.2" },
                  id: "scenario/83/token/light",
                },
              },
              {
                x: -6,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "47.5" },
                  id: "scenario/83/token/ice",
                },
              },
              {
                x: 0,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "175.4" },
                  id: "scenario/83/token/fire",
                },
              },
              {
                x: -4,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "162.4" },
                  id: "scenario/83/token/darkness",
                },
              },
              {
                x: -1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "144.4" },
                  id: "scenario/83/token/air",
                },
              },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "47.5",
        reference: { tile: "11-C", tileOrientation: "240" },
        tokens: [],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 2, y: 5, levels: "nnn" }],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 0, y: 4, levels: "nne" },
              { x: 4, y: 3, levels: "ann" },
              { x: 2, y: 2, levels: "nan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 5, y: 4, type: "Hazardous Terrain" },
              { x: 1, y: 1, type: "Hazardous Terrain" },
              { x: 2, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 1, y: 5, type: "Icy Terrain" },
              { x: 5, y: 3, type: "Icy Terrain" },
              { x: 1, y: 2, type: "Icy Terrain" },
              { x: 2, y: 1 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: -1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "68.2",
        reference: { tile: "02-E", tileOrientation: "180" },
        tokens: [],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 6, y: -2, levels: "nne" },
              { x: 2, y: -3, levels: "ann" },
            ],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: 2, y: 0, levels: "ann" }],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [{ x: 0, y: -1, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -1 }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [
              { x: 4, y: -2, type: "Corridor" },
              { x: 4, y: -1 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 4, y: -2, type: "Corridor" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 6, y: -1, type: "Hazardous Terrain" },
              { x: 1, y: -2, type: "Hazardous Terrain" },
              { x: 1, y: -3, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: 8, y: -1, type: "Obstacle" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 1, y: 0 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "127.2",
        reference: { tile: "12-D", tileOrientation: "300" },
        tokens: [],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: -1, y: 3, levels: "ann" }],
          },
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [{ x: -1, y: 6, levels: "nnn" }],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: -5, y: 7, levels: "ann" },
              { x: -4, y: 5, levels: "nan" },
              { x: 1, y: 3, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -4, y: 7, type: "Trap" },
              { x: -2, y: 5, type: "Trap" },
              { x: 1, y: 4, type: "Trap" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 300,
            positions: [{ x: 0, y: 4, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -6, y: 6 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "144.4",
        reference: { tile: "01-G", tileOrientation: "0" },
        tokens: [],
        monsters: [
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [{ x: 1, y: 2, levels: "ann" }],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 3, y: 2, levels: "nnn" },
              { x: 2, y: -1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: 1 }],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -3, y: 0, type: "Difficult Terrain" },
              { x: -2, y: 0, type: "Difficult Terrain" },
              { x: 3, y: 0, type: "Difficult Terrain" },
              { x: 3, y: -1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: -1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "162.4",
        reference: { tile: "12-B", tileOrientation: "120" },
        tokens: [],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: 0, y: -5, levels: "nnn" }],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [{ x: 4, y: -5, levels: "ann" }],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 3, y: -6, type: "Obstacle" },
              { x: 5, y: -6 },
              { x: 4, y: -7, type: "Trap" },
            ],
          },
          {
            name: "Large Cave Rock",
            orientation: 300,
            positions: [{ x: 2, y: -5 }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 6, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "175.4",
        reference: { tile: "11-B", tileOrientation: "60" },
        tokens: [],
        monsters: [
          {
            name: "Flame Demon",
            orientation: 0,
            positions: [
              { x: -1, y: 0, levels: "nan" },
              { x: -3, y: -3, levels: "ann" },
              { x: 0, y: -3, levels: "nne" },
            ],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [{ x: -2, y: -5, levels: "ann" }],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [{ x: -2, y: -1, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Lava",
            orientation: 0,
            positions: [
              { x: -2, y: 0, type: "Hazardous Terrain" },
              { x: -1, y: -1, type: "Hazardous Terrain" },
              { x: -2, y: -3, type: "Hazardous Terrain" },
              { x: -3, y: -5, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -2, y: 1 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "12-D",
        orientation: "300",
        center: { x: 0, y: 7 },
        origin: { x: 2, y: 3 },
      },
      {
        name: "12-B",
        orientation: "120",
        center: { x: 0, y: -7 },
        origin: { x: -2, y: -3 },
      },
      {
        name: "11-C",
        orientation: "240",
        center: { x: -6, y: -2 },
        origin: { x: -9, y: -4 },
      },
      {
        name: "11-B",
        orientation: "60",
        center: { x: 6, y: 2 },
        origin: { x: 9, y: 4 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: 8, y: -5 },
        origin: { x: 10, y: -7 },
      },
      {
        name: "02-E",
        orientation: "180",
        center: { x: -8, y: 5 },
        origin: { x: -10, y: 7 },
      },
      {
        name: "01-G",
        orientation: "0",
        center: { x: 4, y: -6 },
        origin: { x: 6, y: -6 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: -4, y: 6 },
        origin: { x: -6, y: 6 },
      },
    ],
  },
  "67": {
    id: "67",
    maps: [
      { type: "scenario", name: 84, triggers: [] },
      {
        type: "scenario",
        name: 85,
        reference: { tile: "11-C", tileOrientation: "120" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -5, y: -2 },
              { x: -2, y: -2 },
              { x: -2, y: -8 },
              { x: 1, y: -8 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: -9, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: 5, y: -10 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 0 }] },
          { name: "e", orientation: 0, positions: [{ x: -4, y: -10 }] },
          {
            name: "f",
            orientation: 0,
            positions: [
              { x: -9, y: -5 },
              { x: 5, y: -5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: -4 },
              { x: -2, y: -4 },
              { x: -3, y: -5 },
              { x: -1, y: -5 },
              { x: -2, y: -6 },
              { x: -1, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: -9, y: -2, levels: "ann" },
              { x: 1, y: -2, levels: "aan" },
              { x: 3, y: -4, levels: "eee" },
              { x: 3, y: -5, levels: "ann" },
              { x: -7, y: -6, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: -5, y: -5 },
              { x: 2, y: -5, type: "Corridor" },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [
              { x: -6, y: -3 },
              { x: 2, y: -6 },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [
              { x: 1, y: -4 },
              { x: -4, y: -7, type: "Corridor" },
            ],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              { x: -9, y: 0, type: "Corridor" },
              { x: 0, y: 0, type: "Corridor" },
              { x: -9, y: -5, type: "Corridor" },
              { x: 5, y: -5, type: "Corridor" },
              { x: -4, y: -10, type: "Corridor" },
              { x: 5, y: -10 },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: -7, y: -2, type: "Difficult Terrain" },
              { x: 0, y: -2, type: "Difficult Terrain" },
              { x: -7, y: -4, type: "Difficult Terrain" },
              { x: 3, y: -6, type: "Difficult Terrain" },
              { x: -4, y: -8, type: "Difficult Terrain" },
              { x: 3, y: -8 },
            ],
          },
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -2, y: -5, type: "Obstacle" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -5, y: -2, type: "Objective" },
              { x: -2, y: -2, type: "Objective" },
              { x: -2, y: -8, type: "Objective" },
              { x: 1, y: -8, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "11-C",
        orientation: "120",
        center: { x: 4, y: 0 },
        origin: { x: 2, y: 5 },
      },
      {
        name: "11-A",
        orientation: "300",
        center: { x: -4, y: 0 },
        origin: { x: -2, y: -5 },
      },
    ],
  },
  "68": {
    id: "68",
    maps: [
      { type: "scenario", name: 85, triggers: [] },
      {
        type: "scenario",
        name: 86,
        reference: { tile: "10-D", tileOrientation: "180" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 1, y: -2 }] },
          { name: "b", orientation: 0, positions: [{ x: 6, y: -2 }] },
          { name: "c", orientation: 0, positions: [{ x: 9, y: -13 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 8, y: -12 },
              { x: 9, y: -12 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -7 },
              { x: 6, y: -7 },
              { x: 7, y: -7 },
              { x: 6, y: -8 },
              { x: 7, y: -8 },
            ],
          },
        ],
        monsters: [
          {
            name: "Chaos Demon",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "eee" },
              { x: 4, y: -3, levels: "aan" },
              { x: 6, y: -11, levels: "ann" },
              { x: 10, y: -11, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 6, y: -5 }],
          },
          {
            name: "Large Snow Corridor",
            orientation: 60,
            positions: [{ x: 3, y: -5 }],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [{ x: 8, y: -6 }],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              { x: 1, y: -2 },
              { x: 6, y: -2, type: "Corridor" },
              { x: 9, y: -13 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -5 }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 4, y: -5 }],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Obstacle" },
              { x: 3, y: 0, type: "Obstacle" },
            ],
          },
          { name: "Glowing Orb", orientation: 0, positions: [{ x: 7, y: -9 }] },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 7, y: -6 },
              { x: 4, y: -6 },
              { x: 10, y: -12 },
              { x: 7, y: -12 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 5, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
  },
  "69": {
    id: "69",
    maps: [
      {
        type: "scenario",
        name: 87,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -6, y: 5 },
              { x: -6, y: 4 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -4, y: 6 },
              { x: -3, y: 6 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: -6, y: 6, levels: "eee" }],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "nne" },
              { x: -4, y: 3, levels: "ann" },
              { x: -5, y: 2, levels: "ane" },
              { x: -4, y: 1, levels: "eee" },
              { x: -3, y: 0, levels: "ane" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -3, y: 5, levels: "aan" },
              { x: -2, y: 5, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 4, type: "Obstacle" }],
          },
          { name: "Tree", orientation: 180, positions: [{ x: -3, y: 2 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "122.1",
        reference: { tile: "08-B", tileOrientation: "300" },
        tokens: [
          {
            name: "d",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 2, y: 0 },
            ],
          },
          {
            name: "f",
            orientation: 0,
            positions: [
              { x: -3, y: 4 },
              { x: -3, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [{ x: 0, y: 4, levels: "eee" }],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "nee" },
              { x: -1, y: 3, levels: "nnn" },
              { x: 0, y: 3, levels: "ann" },
              { x: 0, y: 2, levels: "aan" },
              { x: 2, y: 2, levels: "nnn" },
              { x: 0, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [{ x: -1, y: 5, levels: "ane" }],
          },
        ],
        overlays: [
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -1, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      { type: "section", name: "143.3", triggers: [] },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: 2, y: -4 },
        origin: { x: 5, y: -7 },
      },
      {
        name: "11-A",
        orientation: "300",
        center: { x: -6, y: 1 },
        origin: { x: -4, y: -4 },
      },
      {
        name: "08-B",
        orientation: "300",
        center: { x: 3, y: 3 },
        origin: { x: 4, y: 0 },
      },
    ],
  },
  "7": {
    id: "7",
    maps: [
      {
        type: "scenario",
        name: 11,
        reference: { tile: "02-G", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 5, y: -9 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 3 },
              { x: -3, y: 3 },
              { x: -2, y: 3 },
              { x: -1, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
              { x: -1, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: -1, y: -2, levels: "ann" },
              { x: 3, y: -8, levels: "eee" },
              { x: 4, y: -9, levels: "aan" },
            ],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: 1, y: -2, levels: "aan" },
              { x: 1, y: -3, levels: "nnn" },
              { x: 5, y: -10, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 5,
                y: -9,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "42.1" },
                  id: "scenario/11/token/1",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Corridor" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "42.1",
        reference: { tile: "11-B", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -6, y: -4 }] },
          { name: "1g", orientation: 0, positions: [{ x: -6, y: -4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -3, y: 1 }] },
          { name: "3", orientation: 0, positions: [{ x: 7, y: -12 }] },
          { name: "3g", orientation: 0, positions: [{ x: 7, y: -12 }] },
          { name: "a", orientation: 0, positions: [{ x: 4, y: -11 }] },
          { name: "b", orientation: 0, positions: [{ x: 5, y: -12 }] },
          { name: "d", orientation: 0, positions: [{ x: 5, y: -11 }] },
        ],
        monsters: [
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: -1, y: 0, levels: "eee" },
              { x: -2, y: -1, levels: "aan" },
              { x: 0, y: -2, levels: "ann" },
            ],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -2, y: -3, levels: "nee" },
              { x: -1, y: -4, levels: "nnn" },
              { x: -2, y: -5, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "48.4" },
                  id: "section/42.1/token/2",
                },
              },
            ],
          },
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: -2, y: 1, type: "Trap" },
              { x: -2, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -1, y: -1, type: "Obstacle" },
              { x: -3, y: -5, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "48.4",
        reference: { tile: "04-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 5, y: -4 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: -4 }] },
        ],
        monsters: [
          {
            name: "Coral Corpse",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Poison Trap",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Trap" },
              { x: 4, y: -3, type: "Trap" },
              { x: 3, y: -4, type: "Trap" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-B",
        orientation: "60",
        center: { x: 4, y: -3 },
        origin: { x: 7, y: -1 },
      },
      {
        name: "06-A",
        orientation: "180",
        center: { x: -2, y: -2 },
        origin: { x: -3, y: 2 },
      },
      {
        name: "04-A",
        orientation: "180",
        center: { x: 1, y: 2 },
        origin: { x: -1, y: 4 },
      },
      {
        name: "02-G",
        orientation: "0",
        center: { x: -6, y: 6 },
        origin: { x: -4, y: 4 },
      },
    ],
  },
  "70": {
    id: "70",
    maps: [
      {
        type: "scenario",
        name: 88,
        reference: { tile: "03-D", tileOrientation: "60" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -4, y: 5 },
              { x: -5, y: 5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: -1 },
              { x: -4, y: -2 },
              { x: -3, y: -2 },
              { x: -3, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "ane" },
              { x: -3, y: 3, levels: "eee" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "nee" },
              { x: 0, y: 0, levels: "nee" },
              { x: 0, y: -1, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "46.1" },
                  mode: "all",
                  id: "scenario/88/token/1",
                },
              },
              {
                x: -5,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "46.1" },
                  mode: "all",
                  id: "scenario/88/token/1",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Corridor" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 4, type: "Obstacle" },
              { x: -2, y: 0 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "46.1",
        reference: { tile: "07-D", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -5, y: -1 },
              { x: -4, y: -1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -5, y: -1 },
              { x: -4, y: -1 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -7, y: 3 },
              { x: -3, y: 3 },
              { x: -2, y: 3 },
              { x: -8, y: 3 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -6, y: 3 },
              { x: -5, y: 3 },
              { x: -4, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "nee" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [{ x: -1, y: 2, levels: "nne" }],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: -8, y: 2, levels: "nne" },
              { x: 0, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -7,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "106.2" },
                  mode: "all",
                  id: "section/46.1/token/2",
                },
              },
              {
                x: -3,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "106.2" },
                  mode: "all",
                  id: "section/46.1/token/2",
                },
              },
              {
                x: -2,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "106.2" },
                  mode: "all",
                  id: "section/46.1/token/2",
                },
              },
              {
                x: -8,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "106.2" },
                  mode: "all",
                  id: "section/46.1/token/2",
                },
              },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -4, y: 1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "106.2",
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 4, y: -7 },
              { x: 5, y: -7 },
              { x: 9, y: -7 },
              { x: 10, y: -7 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 4, y: -7 },
              { x: 5, y: -7 },
              { x: 9, y: -7 },
              { x: 10, y: -7 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 6, y: -7 },
              { x: 7, y: -7 },
              { x: 8, y: -7 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: 4, y: 0 }] },
        ],
        monsters: [
          {
            name: "City Guard",
            orientation: 0,
            positions: [
              { x: 6, y: -1 },
              { x: 2, y: -2, levels: "ann" },
            ],
          },
          {
            name: "Sun Demon",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "aan" },
              { x: 5, y: -1, levels: "nnn" },
              { x: 2, y: -3, levels: "nee" },
            ],
          },
          {
            name: "Flaming Sword of Justice",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 5, y: -2, type: "Obstacle" },
              { x: 3, y: -4, type: "Obstacle" },
            ],
          },
          { name: "Tree", orientation: 180, positions: [{ x: 6, y: -6 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 7, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: -2, y: 7 },
        origin: { x: -7, y: 10 },
      },
      {
        name: "07-D",
        orientation: "0",
        center: { x: 1, y: 1 },
        origin: { x: 5, y: 0 },
      },
      {
        name: "03-D",
        orientation: "60",
        center: { x: 3, y: -7 },
        origin: { x: 5, y: -6 },
      },
      {
        name: "01-G",
        orientation: "180",
        center: { x: 1, y: -2 },
        origin: { x: -1, y: -2 },
      },
    ],
  },
  "71": {
    id: "71",
    maps: [
      {
        type: "scenario",
        name: 89,
        reference: { tile: "09-D", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 2 },
              { x: -1, y: 2 },
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "ann" },
              { x: -1, y: 5, levels: "nne" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "ann" },
              { x: -2, y: 6, levels: "nnn" },
              { x: -1, y: 0, levels: "ane" },
              { x: 0, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "129.2" },
                  id: "scenario/89/token/1",
                },
              },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Difficult Terrain" },
              { x: -3, y: 3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [{ x: -1, y: 3, type: "Obstacle" }],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [{ x: -4, y: 6, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "111.2",
        reference: { tile: "10-B", tileOrientation: "0" },
        tokens: [
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -6, y: 2 },
              { x: -5, y: 1 },
              { x: -5, y: 0 },
            ],
          },
          { name: "c", orientation: 0, positions: [{ x: -2, y: 0 }] },
          { name: "d", orientation: 0, positions: [{ x: -9, y: 1 }] },
          { name: "e", orientation: 0, positions: [{ x: -10, y: 4 }] },
          {
            name: "f",
            orientation: 0,
            positions: [
              { x: -6, y: 7 },
              { x: -6, y: 6 },
            ],
          },
          {
            name: "g",
            orientation: 0,
            positions: [
              { x: -3, y: 7 },
              { x: -2, y: 6 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -7, y: 4 },
              { x: -2, y: 4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "nne" }],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [{ x: -6, y: 4, levels: "nnn" }],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [{ x: -5, y: 4, levels: "ann" }],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -4, y: 4, levels: "ane" },
              { x: -4, y: 2, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: -11, y: 3, type: "Corridor" },
              { x: -7, y: 3, type: "Corridor" },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Trap" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 3, type: "Difficult Terrain" },
              { x: -3, y: 3, type: "Difficult Terrain" },
              { x: -4, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -6, y: 7, type: "Difficult Terrain" },
              { x: -6, y: 6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Obstacle" }],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [
              { x: -1, y: 2, type: "Obstacle" },
              { x: -3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "129.2",
        reference: { tile: "14-A", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 6, y: -6 },
              { x: 5, y: -8 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: 6, y: -7, levels: "nnn" }],
          },
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: 2, y: -2, levels: "ann" },
              { x: 3, y: -5, levels: "nnn" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [{ x: 1, y: -1, levels: "nna" }],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: 2, y: -4, levels: "aan" },
              { x: 5, y: -4, levels: "nnn" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 3, y: -3, levels: "nnn" },
              { x: 6, y: -5, levels: "ann" },
              { x: 4, y: -6, levels: "nne" },
            ],
          },
        ],
        overlays: [
          { name: "Bear Trap", orientation: 0, positions: [{ x: 2, y: 0 }] },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Obstacle" },
              { x: 2, y: -3 },
              { x: 5, y: -5, type: "Obstacle" },
            ],
          },
          { name: "Barrels", orientation: 0, positions: [{ x: 4, y: -4 }] },
          { name: "Crate", orientation: 0, positions: [{ x: 2, y: -1 }] },
          {
            name: "Mast",
            orientation: 0,
            positions: [
              {
                x: 4,
                y: -5,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "111.2" },
                  id: "section/129.2/token/a",
                },
              },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 3, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-A",
        orientation: "270",
        center: { x: -2, y: -2 },
        origin: { x: -6, y: 3 },
      },
      {
        name: "10-B",
        orientation: "0",
        center: { x: 7, y: 0 },
        origin: { x: 10, y: -2 },
      },
      {
        name: "09-D",
        orientation: "0",
        center: { x: -8, y: -2 },
        origin: { x: -6, y: -5 },
      },
      {
        name: "02-D",
        orientation: "0",
        center: { x: 1, y: 1 },
        origin: { x: 3, y: -1 },
      },
      {
        name: "01-H",
        orientation: "0",
        center: { x: 6, y: 4 },
        origin: { x: 8, y: 4 },
      },
    ],
  },
  "72": {
    id: "72",
    maps: [
      {
        type: "scenario",
        name: 90,
        reference: { tile: "13-D", tileOrientation: "0" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 4 },
              { x: -1, y: 3 },
              { x: 0, y: 2 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: 0, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 6 }] },
          { name: "c", orientation: 0, positions: [{ x: -2, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 4 },
              { x: -4, y: 4 },
              { x: -5, y: 3 },
              { x: -3, y: 3 },
              { x: -4, y: 2 },
              { x: -3, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -7, y: 6, levels: "ann" },
              { x: -4, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
              {
                x: -1,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
              {
                x: 0,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
              {
                x: -1,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "141.1" },
                  mode: "removeall",
                  id: "scenario/90/token/1",
                },
              },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -3, y: 5, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "105.3",
        reference: { tile: "02-H", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -1, y: -1 },
              { x: 0, y: -2 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -1, y: -1 },
              { x: 0, y: -2 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 3, y: -1 },
              { x: 4, y: -2 },
              { x: 4, y: -3 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 2, y: 0 },
              { x: 1, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: 2, y: -1, levels: "ene" },
              { x: 2, y: -2, levels: "aee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "132.2" },
                  mode: "all",
                  id: "section/105.3/token/3",
                },
              },
              {
                x: 4,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "132.2" },
                  mode: "all",
                  id: "section/105.3/token/3",
                },
              },
              {
                x: 4,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "132.2" },
                  mode: "all",
                  id: "section/105.3/token/3",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "132.2",
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "e", orientation: 0, positions: [{ x: 0, y: 3 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -3, y: 5 },
              { x: 0, y: 1 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -4, y: 6, levels: "ane" },
              { x: -2, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [{ x: 0, y: 3, type: "Door" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -6, y: 4, type: "Difficult Terrain" },
              { x: -5, y: 2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -4, y: 5, type: "Obstacle" },
              { x: -3, y: 1, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -3, y: 6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "141.1",
        reference: { tile: "02-L", tileOrientation: "180" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -1, y: 0 },
              { x: 0, y: -1 },
              { x: 0, y: -2 },
              { x: 1, y: -3 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -1, y: 0 },
              { x: 0, y: -1 },
              { x: 0, y: -2 },
              { x: 1, y: -3 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 3, y: -1 },
              { x: 4, y: -2 },
            ],
          },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 0 }] },
        ],
        monsters: [
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "ann" },
              { x: 3, y: -2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "105.3" },
                  mode: "all",
                  id: "section/141.1/token/2",
                },
              },
              {
                x: 4,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "105.3" },
                  mode: "all",
                  id: "section/141.1/token/2",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [
              { x: -1, y: 0 },
              { x: 0, y: -1 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Obstacle" },
              { x: 4, y: -3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 7, y: 0 },
        origin: { x: 10, y: -3 },
      },
      {
        name: "13-D",
        orientation: "0",
        center: { x: -7, y: 0 },
        origin: { x: -3, y: -3 },
      },
      {
        name: "02-L",
        orientation: "180",
        center: { x: -2, y: 0 },
        origin: { x: -4, y: 2 },
      },
      {
        name: "02-H",
        orientation: "180",
        center: { x: 2, y: 0 },
        origin: { x: 0, y: 2 },
      },
    ],
  },
  "73": {
    id: "73",
    maps: [
      {
        type: "scenario",
        name: 91,
        reference: { tile: "13-D", tileOrientation: "0" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -2, y: 4 },
              { x: -1, y: 3 },
              { x: -1, y: 2 },
              { x: 0, y: 1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 0 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
              { x: -1, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "aan" },
              { x: -6, y: 5, levels: "nne" },
              { x: -4, y: 4, levels: "nnn" },
              { x: -3, y: 4, levels: "nee" },
              { x: -5, y: 3, levels: "nnn" },
              { x: -2, y: 2, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.3" },
                  mode: "removeall",
                  id: "scenario/91/token/1",
                },
              },
              {
                x: -1,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.3" },
                  mode: "removeall",
                  id: "scenario/91/token/1",
                },
              },
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.3" },
                  mode: "removeall",
                  id: "scenario/91/token/1",
                },
              },
            ],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.3" },
                  mode: "removeall",
                  id: "scenario/91/token/1",
                },
              },
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "28.3" },
                  mode: "removeall",
                  id: "scenario/91/token/1",
                },
              },
            ],
          },
          {
            name: "Bookshelf",
            orientation: 0,
            positions: [{ x: -3, y: 5, type: "Corridor" }],
          },
          { name: "Bookshelf", orientation: 60, positions: [{ x: -3, y: 2 }] },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Trap" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "28.3",
        reference: { tile: "16-B", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -10, y: 5 },
              { x: -9, y: 3 },
              { x: -8, y: 1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -10, y: 5 },
              { x: -9, y: 3 },
              { x: -8, y: 1 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -2, y: 4 },
              { x: -1, y: 3 },
              { x: -1, y: 2 },
              { x: 0, y: 1 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 3 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "d", orientation: 0, positions: [{ x: -2, y: 2 }] },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: -2, y: 3, levels: "nne" }],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: -4, y: 5, levels: "aee" },
              { x: -1, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -8, y: 6, levels: "nnn" },
              { x: -6, y: 4, levels: "ann" },
              { x: -4, y: 2, levels: "aan" },
              { x: -6, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -5, y: 5, levels: "nne" },
              { x: -4, y: 4, levels: "aan" },
              { x: -2, y: 1, levels: "ann" },
              { x: -1, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "143.1" },
                  mode: "all",
                  id: "section/28.3/token/2",
                },
              },
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "143.1" },
                  mode: "all",
                  id: "section/28.3/token/2",
                },
              },
              {
                x: -1,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "143.1" },
                  mode: "all",
                  id: "section/28.3/token/2",
                },
              },
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "143.1" },
                  mode: "all",
                  id: "section/28.3/token/2",
                },
              },
            ],
          },
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "143.1" },
                  mode: "all",
                  id: "section/28.3/token/2",
                },
              },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [{ x: -8, y: 5, type: "Corridor" }],
          },
          { name: "Bookshelf", orientation: 300, positions: [{ x: -5, y: 4 }] },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [{ x: -2, y: 0, type: "Corridor" }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -6, y: 6, type: "Trap" },
              { x: -5, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -5, y: 6, type: "Obstacle" },
              { x: -4, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "143.1",
        reference: { tile: "02-B", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -6, y: 0 },
              { x: -6, y: -1 },
              { x: -5, y: -2 },
              { x: -5, y: -3 },
              { x: -4, y: -4 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -6, y: 0 },
              { x: -6, y: -1 },
              { x: -5, y: -2 },
              { x: -5, y: -3 },
              { x: -4, y: -4 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: 1, y: -1 }] },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "eee" },
              { x: 0, y: -3, levels: "ane" },
            ],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: -1, y: -1, levels: "nee" }],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -2, y: -1, levels: "nnn" },
              { x: -2, y: -2, levels: "nee" },
            ],
          },
        ],
        overlays: [
          { name: "Barrels", orientation: 0, positions: [{ x: -2, y: -3 }] },
          {
            name: "Bookshelf",
            orientation: 300,
            positions: [{ x: -4, y: -2 }],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -2 }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -4, y: 1, type: "Trap" },
              { x: -4, y: -3, type: "Corridor" },
              { x: 0, y: -5 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -5, y: 1, type: "Obstacle" },
              { x: -3, y: -4 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: -2, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "13-D",
        orientation: "0",
        center: { x: -9, y: 0 },
        origin: { x: -5, y: -3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: 4, y: 0 },
        origin: { x: 8, y: -3 },
      },
      {
        name: "02-B",
        orientation: "180",
        center: { x: 9, y: 0 },
        origin: { x: 7, y: 2 },
      },
    ],
  },
  "74": {
    id: "74",
    maps: [
      {
        type: "scenario",
        name: 92,
        reference: { tile: "09-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 0, y: 6 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -6, y: 5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: 2 },
              { x: -1, y: 2 },
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -5, y: 6, levels: "aan" },
              { x: -3, y: 6, levels: "nee" },
              { x: -1, y: 6, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 6,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "55.2" },
                  id: "scenario/92/token/1",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: -4, y: 6, type: "Trap" }],
          },
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Obstacle" },
              { x: -2, y: 4, type: "Obstacle" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -2, y: 3, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "52.2",
        reference: { tile: "13-A", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: 1, y: 1 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 4, y: 0 },
              { x: 7, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nnn" },
              { x: 6, y: -6, levels: "aan" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: 3, y: -3, levels: "nne" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: 4, y: -3, levels: "nee" }],
          },
          {
            name: "Forest Imp",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nnn" },
              { x: 4, y: -2, levels: "aan" },
              { x: 5, y: -4, levels: "nnn" },
              { x: 4, y: -6, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "choice",
                  choices: [
                    {
                      tile: "04-D",
                      position: { x: -1, y: -2 },
                      token: "a",
                      trigger: {
                        type: "door",
                        display:
                          "Friend of the Fish King on the Campaing sheet",
                        action: "reveal",
                        what: { type: "section", name: "164.1" },
                      },
                    },
                    {
                      tile: "04-D",
                      position: { x: 1, y: -2 },
                      token: "b",
                      trigger: {
                        type: "door",
                        display: "Otherwise",
                        action: "reveal",
                        what: { type: "section", name: "151.4" },
                      },
                    },
                  ],
                  id: "section/52.2/token/3",
                },
              },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 0, y: 0, type: "Obstacle" },
              { x: 3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Tree",
            orientation: 180,
            positions: [
              { x: 2, y: -2 },
              { x: 4, y: -5 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "55.2",
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "nne" },
              { x: -2, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 0, levels: "ann" },
              { x: -4, y: 0, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "52.2" },
                  mode: "all",
                  id: "section/55.2/token/2",
                },
              },
            ],
          },
          {
            name: "Large Water",
            orientation: 300,
            positions: [
              { x: -3, y: 1, type: "Obstacle" },
              { x: -3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -5, y: 1, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "151.4",
        reference: { tile: "04-D", tileOrientation: "120" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 2, y: -5 }] },
          { name: "3g", orientation: 0, positions: [{ x: 2, y: -5 }] },
        ],
        monsters: [
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nne" },
              { x: -2, y: -1, levels: "ann" },
              { x: 0, y: -1, levels: "nee" },
              { x: 2, y: -2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -1, y: -1, type: "Difficult Terrain" },
              { x: 1, y: -3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: -1, y: -2 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 2, y: -3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "164.1",
        reference: { tile: "04-D", tileOrientation: "120" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 2, y: -5 }] },
          { name: "3g", orientation: 0, positions: [{ x: 2, y: -5 }] },
        ],
        monsters: [
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: 0, y: -2, levels: "nee" }],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: -2, y: 0, levels: "nnn" },
              { x: 0, y: 0, levels: "nnn" },
              { x: 0, y: -4, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: -1, y: -2 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 2, y: -3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-A",
        orientation: "180",
        center: { x: 5, y: -1 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "09-A",
        orientation: "0",
        center: { x: -7, y: -4 },
        origin: { x: -5, y: -7 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: -1, y: -1 },
        origin: { x: 3, y: -2 },
      },
      {
        name: "04-D",
        orientation: "120",
        center: { x: 1, y: 6 },
        origin: { x: 1, y: 8 },
      },
    ],
  },
  "75": {
    id: "75",
    maps: [
      {
        type: "scenario",
        name: 93,
        reference: { tile: "11-D", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 6, y: 4 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 1 },
              { x: 2, y: 0 },
              { x: 0, y: 0 },
              { x: 2, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: 5, y: 4, levels: "nnns" }],
          },
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: 2, y: 4, levels: "nees" },
              { x: 1, y: 2, levels: "nnes" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 5, y: 5, levels: "nne" },
              { x: 0, y: 4, levels: "ane" },
              { x: 6, y: 3, levels: "ann" },
              { x: 3, y: 3, levels: "nan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "99.2" },
                  id: "scenario/93/token/1",
                },
              },
            ],
          },
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: 3, y: 4 },
              { x: 5, y: 4 },
            ],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [
              { x: 1, y: 3 },
              { x: 1, y: 1 },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 2, y: 3, type: "Difficult Terrain" },
              { x: 5, y: 4 },
              { x: 2, y: 4 },
              { x: 1, y: 2 },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 2, y: 5, type: "Obstacle" },
              { x: 2, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 1, y: 5, type: "Obstacle" },
              { x: 3, y: 5, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "81.2",
        reference: { tile: "01-F", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 1 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nee" }],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: -4, y: 0, levels: "ann" }],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "nne" }],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "nne" },
              { x: -1, y: 0, levels: "ann" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "99.2",
        reference: { tile: "13-D", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 2, y: 1 },
            ],
          },
          { name: "c", orientation: 0, positions: [{ x: 6, y: -7 }] },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 4, y: -6, levels: "nne" },
              { x: 6, y: -6, levels: "nee" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nne" },
              { x: 6, y: -5, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: 2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "163.2" },
                  mode: "all",
                  id: "section/99.2/token/3",
                },
              },
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "163.2" },
                  mode: "all",
                  id: "section/99.2/token/3",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 270,
            positions: [
              {
                x: 6,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "81.2" },
                  id: "section/99.2/token/2",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Trap" },
              { x: 7, y: -6, type: "Trap" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 2, y: -4, type: "Difficult Terrain" },
              { x: 3, y: -5, type: "Difficult Terrain" },
              { x: 4, y: -5, type: "Difficult Terrain" },
              { x: 5, y: -6, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Obstacle" },
              { x: 4, y: -2, type: "Obstacle" },
              { x: 3, y: -4, type: "Obstacle" },
              { x: 5, y: -4, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "163.2",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: -1, y: -1 },
              { x: 0, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [{ x: -7, y: 1, levels: "nne" }],
          },
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "aan" }],
          },
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "nee" }],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -8, y: 2, levels: "ane" },
              { x: -7, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "177.2" },
                  id: "section/163.2/token/4",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 2, type: "Trap" },
              { x: -5, y: 1, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "177.2",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [{ name: "4", orientation: 0, positions: [{ x: 3, y: -3 }] }],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "nne" },
              { x: 3, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 1, y: 2 },
              { x: 0, y: 0, type: "Treasure" },
              { x: 4, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-D",
        orientation: "180",
        center: { x: 3, y: -2 },
        origin: { x: -1, y: 1 },
      },
      {
        name: "11-D",
        orientation: "240",
        center: { x: -3, y: -4 },
        origin: { x: -6, y: -6 },
      },
      {
        name: "07-A",
        orientation: "0",
        center: { x: -3, y: 4 },
        origin: { x: 1, y: 3 },
      },
      {
        name: "04-A",
        orientation: "240",
        center: { x: -5, y: 9 },
        origin: { x: -7, y: 9 },
      },
      {
        name: "01-F",
        orientation: "0",
        center: { x: 8, y: -3 },
        origin: { x: 10, y: -3 },
      },
    ],
  },
  "76": {
    id: "76",
    maps: [
      { type: "scenario", name: 94, triggers: [] },
      {
        type: "scenario",
        name: 95,
        reference: { tile: "10-B", tileOrientation: "180" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 3, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: 5, y: -14 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 4, y: -6 },
              { x: 7, y: -6 },
              { x: 6, y: -8 },
              { x: 7, y: -8 },
              { x: 5, y: -9 },
              { x: 7, y: -10 },
              { x: 6, y: -11 },
              { x: 8, y: -12 },
            ],
          },
        ],
        monsters: [
          {
            name: "Fish King",
            orientation: 0,
            positions: [{ x: 7, y: -9, levels: "bbb" }],
          },
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: 4, y: -3, levels: "nee" }],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 3, y: -2, levels: "aan" },
              { x: 4, y: -2, levels: "nnn" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: 5, y: -13, levels: "aees" },
              { x: 4, y: -14, levels: "eees" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 4, y: -5 }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [{ x: 6, y: -5 }],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 300,
            positions: [{ x: 7, y: -13 }],
          },
          { name: "Rubble", orientation: 0, positions: [{ x: 10, y: -10 }] },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 4, y: -13 },
              { x: 5, y: -14 },
              { x: 6, y: -14 },
              { x: 5, y: -15, type: "Difficult Terrain" },
              { x: 6, y: -15, type: "Difficult Terrain" },
              { x: 5, y: -13 },
              { x: 4, y: -14, type: "Difficult Terrain" },
            ],
          },
          { name: "Altar", orientation: 0, positions: [{ x: 6, y: -7 }] },
          { name: "Altar", orientation: 120, positions: [{ x: 6, y: -10 }] },
          { name: "Altar", orientation: 240, positions: [{ x: 9, y: -10 }] },
          {
            name: "Barricade",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Obstacle" },
              { x: 6, y: -2, type: "Obstacle" },
              { x: 5, y: -8 },
              { x: 9, y: -8 },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 8, y: -11 },
              { x: 5, y: -5 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: -15, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      { type: "section", name: "105.4", triggers: [] },
    ],
    layout: [
      {
        name: "15-C",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "10-B",
        orientation: "180",
        center: { x: -4, y: 7 },
        origin: { x: -7, y: 9 },
      },
      {
        name: "04-A",
        orientation: "180",
        center: { x: -2, y: -5 },
        origin: { x: -4, y: -3 },
      },
      {
        name: "01-F",
        orientation: "0",
        center: { x: 6, y: -1 },
        origin: { x: 8, y: -1 },
      },
    ],
  },
  "77": {
    id: "77",
    maps: [
      {
        type: "scenario",
        name: 96,
        reference: { tile: "16-C", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -10, y: 6 },
              { x: -3, y: 6 },
              { x: -7, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          { name: "Fish King", orientation: 0, positions: [{ x: -4, y: 2 }] },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -7, y: 4, levels: "nne" },
              { x: -3, y: 3, levels: "aee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -5, y: 3 },
              { x: -5, y: 2, type: "Hazardous Terrain" },
              { x: -4, y: 2, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -8, y: 4, type: "Difficult Terrain" },
              { x: -4, y: 4, type: "Difficult Terrain" },
              { x: -4, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              { x: -7, y: 6, type: "Obstacle" },
              { x: -2, y: 4, type: "Obstacle" },
              { x: -6, y: 0, type: "Obstacle" },
              { x: -2, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -5, y: 5, type: "Obstacle" },
              { x: -6, y: 2, type: "Obstacle" },
              { x: -2, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "102.2",
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [],
        monsters: [],
        overlays: [
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "131.2",
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [],
        monsters: [
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nee" },
              { x: -4, y: 2, levels: "nnn" },
              { x: 0, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "165.2",
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "ane" },
              { x: -2, y: 0, levels: "nnn" },
              { x: 0, y: 0, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Glowing Orb",
            orientation: 0,
            positions: [{ x: -2, y: 2, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "0",
        center: { x: -4, y: 0 },
        origin: { x: 1, y: -3 },
      },
      {
        name: "04-A",
        orientation: "0",
        center: { x: 5, y: 0 },
        origin: { x: 7, y: -2 },
      },
    ],
  },
  "78": {
    id: "78",
    maps: [
      {
        type: "scenario",
        name: 97,
        reference: { tile: "02-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -3, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -4, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 1 },
              { x: 0, y: 1 },
              { x: -1, y: 0 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -1, y: 3, levels: "eee" },
              { x: -3, y: 2, levels: "ane" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "ann" },
              { x: -3, y: 3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Dungeon Door",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "19.1" },
                  id: "scenario/97/token/1",
                },
              },
            ],
          },
          {
            name: "Dungeon Door",
            orientation: 90,
            positions: [
              {
                x: -4,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "59.2" },
                  id: "scenario/97/token/2",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "19.1",
        reference: { tile: "13-D", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "3", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          { name: "a", orientation: 0, positions: [{ x: -4, y: 7 }] },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "anns" },
              { x: -4, y: 1, levels: "nnns3" },
            ],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [{ x: -5, y: 5, levels: "nee" }],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -3, y: 5, levels: "aan" },
              { x: -5, y: 3, levels: "nne" },
              { x: -2, y: 3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -6, y: 3, type: "Door" }],
          },
          {
            name: "Large Water",
            orientation: 60,
            positions: [
              { x: -3, y: 4 },
              { x: -4, y: 3 },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -5, y: 4, type: "Difficult Terrain" },
              { x: -2, y: 4, type: "Difficult Terrain" },
              { x: -1, y: 1, type: "Difficult Terrain" },
              { x: -3, y: 4 },
              { x: -4, y: 1 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "51.2",
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "5", orientation: 0, positions: [{ x: -6, y: 7 }] },
        ],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "nnn" },
              { x: -5, y: 2, levels: "ann" },
              { x: -3, y: 1, levels: "aan" },
              { x: -1, y: 0, levels: "nnn" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "aee" },
              { x: -4, y: 5, levels: "eee" },
              { x: -3, y: 5, levels: "aae" },
              { x: -1, y: 2, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -6, y: 7, type: "Door" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -4, y: 4, type: "Difficult Terrain" },
              { x: -5, y: 3, type: "Difficult Terrain" },
              { x: -1, y: 1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "59.2",
        reference: { tile: "10-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -1, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Abael Herder",
            orientation: 0,
            positions: [
              { x: -5, y: 3, levels: "eee" },
              { x: -5, y: 1, levels: "ane" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "aan" },
              { x: -4, y: 4, levels: "nnn" },
              { x: -4, y: 1, levels: "ann" },
              { x: -2, y: 1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "92.3" },
                  id: "section/59.2/token/4",
                },
              },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -3, y: 3, type: "Obstacle" },
              { x: -3, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -7, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "82.4",
        reference: { tile: "04-A", tileOrientation: "60" },
        tokens: [
          { name: "6", orientation: 0, positions: [{ x: 2, y: -1 }] },
          { name: "b", orientation: 0, positions: [{ x: -2, y: -2 }] },
        ],
        monsters: [
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -4, y: 2, levels: "ann" },
              { x: -3, y: 2, levels: "eee" },
              { x: -2, y: 2, levels: "aan" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [{ x: -1, y: -1, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Huge Water",
            orientation: 180,
            positions: [{ x: -2, y: -2 }],
          },
          {
            name: "Large Water",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Difficult Terrain" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "91.1",
        reference: { tile: "02-J", tileOrientation: "180" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: 5, y: -10 }] },
          { name: "6", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "a", orientation: 0, positions: [{ x: 4, y: -4 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Altar",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Obstacle" },
              { x: 2, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Treasure" },
              { x: 4, y: -11, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "92.3",
        reference: { tile: "13-D", tileOrientation: "180" },
        tokens: [],
        monsters: [
          {
            name: "Abael Scout",
            orientation: 0,
            positions: [
              { x: 3, y: -3, levels: "eee" },
              { x: 2, y: -4, levels: "aee" },
              { x: 4, y: -5, levels: "aae" },
              { x: 6, y: -6, levels: "eee" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "ann" },
              { x: 3, y: -1, levels: "nnn" },
              { x: 4, y: -1, levels: "aan" },
              { x: 6, y: -4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "133.5" },
                  id: "section/92.3/token/5",
                },
              },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 3, y: -2, type: "Difficult Terrain" },
              { x: 2, y: -3, type: "Difficult Terrain" },
              { x: 6, y: -5, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 4, y: -3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "133.5",
        reference: { tile: "04-A", tileOrientation: "60" },
        tokens: [{ name: "5", orientation: 0, positions: [{ x: -1, y: -3 }] }],
        monsters: [
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [
              { x: -4, y: 2, levels: "ann" },
              { x: -3, y: 2, levels: "eee" },
              { x: -2, y: 2, levels: "aan" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [{ x: -1, y: -1, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Huge Water",
            orientation: 180,
            positions: [{ x: -2, y: -2 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-D",
        orientation: "0",
        center: { x: -2, y: 0 },
        origin: { x: 2, y: -3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: 3, y: 0 },
        origin: { x: 7, y: -3 },
      },
      {
        name: "10-B",
        orientation: "0",
        center: { x: 2, y: -7 },
        origin: { x: 5, y: -9 },
      },
      {
        name: "04-A",
        orientation: "60",
        center: { x: -6, y: 7 },
        origin: { x: -4, y: 7 },
      },
      {
        name: "02-J",
        orientation: "180",
        center: { x: 0, y: 6 },
        origin: { x: -2, y: 8 },
      },
      {
        name: "02-C",
        orientation: "0",
        center: { x: 6, y: -6 },
        origin: { x: 8, y: -8 },
      },
    ],
  },
  "79": {
    id: "79",
    maps: [
      {
        type: "scenario",
        name: 98,
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -2, y: -5 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 3 }] },
          { name: "c", orientation: 0, positions: [{ x: 2, y: -5 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 4, y: -5 },
              { x: 4, y: -6 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 4 },
              { x: -3, y: 4 },
              { x: -4, y: 3 },
              { x: -2, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 6, y: -8, levels: "aan" },
              { x: 7, y: -8, levels: "nnn" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "ane" },
              { x: 0, y: 1, levels: "nee" },
              { x: -2, y: 0, levels: "nnn" },
              { x: 2, y: -4, levels: "nee" },
              { x: 5, y: -6, levels: "eee" },
              { x: 0, y: -7, levels: "aee" },
              { x: 2, y: -8, levels: "ane" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: -5,
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "76.1" },
                  id: "scenario/98/token/1",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Corridor" }],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [{ x: 2, y: -5 }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -3, y: -2, type: "Obstacle" },
              { x: 3, y: -3 },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: -3, y: 3, type: "Obstacle" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -1, y: -3, type: "Obstacle" },
              { x: 0, y: -4, type: "Obstacle" },
              { x: 3, y: -5 },
              { x: 0, y: -6 },
              { x: 2, y: -7 },
              { x: 4, y: -7 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "76.1",
        reference: { tile: "11-D", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 6, y: 4 }] },
          { name: "1g", orientation: 0, positions: [{ x: 6, y: 4 }] },
          { name: "loot", orientation: 0, positions: [{ x: -2, y: 8 }] },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -4, y: 10, levels: "nee" },
              { x: -3, y: 8, levels: "aan" },
              { x: -1, y: 7, levels: "nne" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 1, y: 1, levels: "eee" },
              { x: 0, y: 0, levels: "aee" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [{ x: 1, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: 0, y: 5, type: "Corridor" }],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: 1, y: 3, type: "Trap" }],
          },
          {
            name: "Ice Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 5, type: "Icy Terrain" },
              { x: 2, y: 3, type: "Icy Terrain" },
              { x: 4, y: 3, type: "Icy Terrain" },
            ],
          },
          {
            name: "Barricade",
            orientation: 0,
            positions: [{ x: 3, y: 4, type: "Obstacle" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: 2, type: "Obstacle" },
              { x: 2, y: -1, type: "Obstacle" },
              {
                x: -1,
                y: 2,
                trigger: {
                  type: "door",
                  action: "on-death",
                  what: { type: "section", name: "85.3" },
                  id: "section/76.1/token/d",
                },
              },
              {
                x: -1,
                y: 1,
                trigger: {
                  type: "door",
                  action: "on-death",
                  what: { type: "section", name: "85.3" },
                  id: "section/76.1/token/d",
                },
              },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 9 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "85.3",
        reference: { tile: "02-J", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 14, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 14, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 0, y: 1 },
              { x: 0, y: 0 },
            ],
          },
          { name: "e", orientation: 0, positions: [{ x: 11, y: -1 }] },
          { name: "f", orientation: 0, positions: [{ x: 14, y: -2 }] },
          { name: "loot", orientation: 0, positions: [{ x: 1, y: -1 }] },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: 1, levels: "eee" },
              { x: 2, y: 1, levels: "aan" },
              { x: 1, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [{ x: 2, y: -1, type: "Trap" }],
          },
          { name: "Ice Pillar", orientation: 0, positions: [{ x: 9, y: 3 }] },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 11, y: 2 },
              { x: 10, y: 1 },
              { x: 11, y: 1 },
              { x: 10, y: -1 },
              { x: 13, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 5, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-B",
        orientation: "0",
        center: { x: 7, y: -1 },
        origin: { x: 12, y: -4 },
      },
      {
        name: "11-D",
        orientation: "240",
        center: { x: 0, y: -3 },
        origin: { x: -3, y: -5 },
      },
      {
        name: "04-A",
        orientation: "0",
        center: { x: 3, y: 6 },
        origin: { x: 5, y: 4 },
      },
      {
        name: "02-J",
        orientation: "240",
        center: { x: -6, y: -2 },
        origin: { x: -8, y: -2 },
      },
      {
        name: "01-F",
        orientation: "120",
        center: { x: -5, y: 3 },
        origin: { x: -7, y: 5 },
      },
    ],
  },
  "8": {
    id: "8",
    maps: [
      {
        type: "scenario",
        name: 12,
        reference: { tile: "11-A", tileOrientation: "60" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: -3 },
              { x: -5, y: -3 },
              { x: -5, y: -4 },
              { x: -5, y: -5 },
              { x: -4, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -1, y: -2, levels: "nne" }],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "nnn" },
              { x: -1, y: 0, levels: "eee" },
              { x: 0, y: 0, levels: "nnn" },
              { x: -2, y: -1, levels: "aee" },
              { x: 0, y: -2, levels: "aee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "21.1" },
                  id: "scenario/12/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "12.1",
        reference: { tile: "02-E", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 2, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 2, y: -2 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 3, y: 1 },
              { x: 2, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 2, y: 0, levels: "nee" }],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "21.1",
        reference: { tile: "07-B", tileOrientation: "240" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: 7 }] },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: 2, levels: "nne" },
              { x: 2, y: 2, levels: "nee" },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: 1, y: 6, levels: "eee" },
              { x: 0, y: 4, levels: "ann" },
              { x: 2, y: 4, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "12.1" },
                  id: "section/21.1/token/2",
                },
              },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: 1, y: 5, type: "Obstacle" },
              { x: 0, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-A",
        orientation: "60",
        center: { x: -1, y: -6 },
        origin: { x: 2, y: -4 },
      },
      {
        name: "07-B",
        orientation: "240",
        center: { x: 1, y: 1 },
        origin: { x: 0, y: -2 },
      },
      {
        name: "02-E",
        orientation: "240",
        center: { x: 1, y: 7 },
        origin: { x: -1, y: 7 },
      },
    ],
  },
  "80": {
    id: "80",
    maps: [
      {
        type: "scenario",
        name: 99,
        reference: { tile: "12-A", tileOrientation: "180" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 10, y: -10 }] },
          { name: "b", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "c", orientation: 0, positions: [{ x: 6, y: -2 }] },
          { name: "d", orientation: 0, positions: [{ x: 13, y: -18 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 6, y: -1 },
              { x: 7, y: -2 },
              { x: 5, y: -7 },
              { x: 11, y: -13 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: -9 },
              { x: 6, y: -9 },
              { x: 6, y: -10 },
              { x: 6, y: -11 },
              { x: 7, y: -11 },
            ],
          },
        ],
        monsters: [
          {
            name: "Relic",
            orientation: 0,
            positions: [{ x: 8, y: -10, levels: "bbb" }],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 6, y: 0, levels: "nnn" },
              { x: 5, y: -1, levels: "nee" },
              { x: 8, y: -7, levels: "nnn" },
              { x: 9, y: -8, levels: "aan" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 3, y: -2, levels: "aan" },
              { x: 12, y: -18, levels: "nnn" },
              { x: 12, y: -19, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: 7, y: -6 },
              { x: 11, y: -14 },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 9, y: -9 },
              { x: 10, y: -11, type: "Obstacle" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 2, y: -2, type: "Difficult Terrain" },
              { x: 3, y: -3 },
            ],
          },
          { name: "Barricade", orientation: 0, positions: [{ x: 7, y: -3 }] },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 4, y: -3, type: "Obstacle" },
              { x: 6, y: -8 },
              { x: 9, y: -10 },
              { x: 8, y: -12 },
              { x: 12, y: -17 },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 0, y: -1, type: "Objective" },
              { x: 6, y: -2, type: "Objective" },
              { x: 10, y: -10, type: "Trap" },
              { x: 13, y: -18, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 2, y: -1, type: "Treasure" },
              { x: 10, y: -17, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 100, triggers: [] },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "12-A",
        orientation: "180",
        center: { x: -4, y: 8 },
        origin: { x: -8, y: 10 },
      },
      {
        name: "04-B",
        orientation: "300",
        center: { x: 4, y: -7 },
        origin: { x: 4, y: -9 },
      },
    ],
  },
  "81": {
    id: "81",
    maps: [
      { type: "scenario", name: 100, triggers: [] },
      {
        type: "scenario",
        name: 101,
        reference: { tile: "11-F", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -4, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -4, y: -1 }] },
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: 4, y: -11 },
              { x: 8, y: -11 },
              { x: 13, y: -17 },
              { x: 12, y: -18 },
              { x: 12, y: -23 },
              { x: 16, y: -23 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: 4, y: -11 },
              { x: 8, y: -11 },
              { x: 13, y: -17 },
              { x: 12, y: -18 },
              { x: 12, y: -23 },
              { x: 16, y: -23 },
            ],
          },
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: 11, y: -15 },
              { x: 15, y: -18 },
              { x: 9, y: -19 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 11, y: -15 },
              { x: 15, y: -18 },
              { x: 9, y: -19 },
            ],
          },
          {
            name: "4",
            orientation: 0,
            positions: [
              { x: 6, y: -15 },
              { x: 8, y: -16 },
              { x: 16, y: -20 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 5, y: -13 },
              { x: 8, y: -13 },
              { x: 14, y: -17 },
              { x: 7, y: -18 },
              { x: 14, y: -21 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 8, y: -15 },
              { x: 9, y: -18 },
              { x: 11, y: -19 },
            ],
          },
          { name: "c", orientation: 0, positions: [{ x: 11, y: -21 }] },
          { name: "d", orientation: 0, positions: [{ x: 12, y: -17 }] },
          { name: "e", orientation: 0, positions: [{ x: 6, y: -11 }] },
          { name: "f", orientation: 0, positions: [{ x: 14, y: -19 }] },
          { name: "g", orientation: 0, positions: [{ x: 14, y: -23 }] },
          { name: "h", orientation: 0, positions: [{ x: 4, y: -14 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -8, y: 0 },
              { x: -7, y: -1 },
              { x: -7, y: -2 },
              { x: -6, y: -3 },
              { x: 0, y: -13 },
              { x: 0, y: -14 },
              { x: 1, y: -15 },
              { x: 1, y: -16 },
            ],
          },
        ],
        monsters: [
          {
            name: "Aesther Ashblade",
            orientation: 0,
            positions: [
              { x: 10, y: -5, levels: "nee" },
              { x: 9, y: -6, levels: "nne" },
            ],
          },
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 5, y: -1, levels: "nee" },
              { x: 3, y: -2, levels: "nne" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: -6, y: 0, levels: "aan" },
              { x: 2, y: 0, levels: "nee" },
              { x: -5, y: -1, levels: "nnn" },
              { x: -4, y: -2, levels: "nen" },
              { x: -4, y: -3, levels: "ann" },
              { x: 8, y: -3, levels: "nne" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -5, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 90,
            positions: [{ x: 0, y: -1, type: "Door" }],
          },
          {
            name: "Metal Door",
            orientation: 270,
            positions: [{ x: -4, y: -1, type: "Door" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 1, y: 0, type: "Difficult Terrain" },
              { x: 6, y: -3, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: 7, y: -2, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: 2, y: -1 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "133.2",
        reference: { tile: "16-D", tileOrientation: "180" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 1, y: -3 },
              { x: 9, y: -3 },
              { x: -1, y: -7 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 1, y: -3 },
              { x: 9, y: -3 },
              { x: -1, y: -7 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 4, y: -2 },
              { x: 5, y: -2 },
              { x: 5, y: -4 },
              { x: 6, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 4, y: 0, levels: "nee" },
              { x: 6, y: -6, levels: "nne" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "ann" },
              { x: 2, y: -1, levels: "ann" },
              { x: 6, y: -1, levels: "nne" },
              { x: 8, y: -5, levels: "nee" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: 4, y: -6, levels: "nnn" }],
          },
        ],
        overlays: [
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Difficult Terrain" },
              { x: 4, y: -5, type: "Difficult Terrain" },
              { x: 5, y: -6 },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 6, y: 0, type: "Obstacle" },
              { x: 3, y: -4, type: "Obstacle" },
              { x: 9, y: -6, type: "Obstacle" },
            ],
          },
          {
            name: "Barricade",
            orientation: 60,
            positions: [
              { x: 3, y: -1 },
              { x: 7, y: -4 },
            ],
          },
          {
            name: "Barricade",
            orientation: 300,
            positions: [
              { x: 7, y: -3 },
              { x: 4, y: -4 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 5, y: -3, type: "Treasure" },
              { x: -4, y: -6 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "174.3",
        reference: { tile: "01-B", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -3, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: -3, y: -3 }] },
          { name: "2", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 5, y: -3 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: -1 }] },
          { name: "d", orientation: 0, positions: [{ x: 3, y: -2 }] },
          { name: "e", orientation: 0, positions: [{ x: -2, y: 0 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "ane" },
              { x: 5, y: -4, levels: "nee" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -1, y: -2, levels: "nen" },
              { x: 2, y: -3, levels: "eee" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [{ x: 0, y: -4, levels: "nne" }],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: 4, y: -3, levels: "aan" }],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [{ x: 5, y: -3, type: "Door" }],
          },
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -1, type: "Corridor" }],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Pressure Plate" }],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 1, y: -2, type: "Difficult Terrain" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -3, y: -2, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: 1, y: -3 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 3, y: -3 }],
          },
          { name: "Barricade", orientation: 0, positions: [{ x: -3, y: 0 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -4, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "180",
        center: { x: 4, y: 0 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "11-F",
        orientation: "180",
        center: { x: 13, y: -2 },
        origin: { x: 8, y: 1 },
      },
      {
        name: "07-F",
        orientation: "180",
        center: { x: -4, y: 0 },
        origin: { x: -8, y: 1 },
      },
      {
        name: "02-F",
        orientation: "0",
        center: { x: -10, y: 0 },
        origin: { x: -8, y: -2 },
      },
      {
        name: "01-B",
        orientation: "0",
        center: { x: -7, y: 3 },
        origin: { x: -5, y: 3 },
      },
    ],
  },
  "82": {
    id: "82",
    maps: [
      {
        type: "scenario",
        name: 101,
        reference: { tile: "01-E", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -8, y: 10 }] },
          { name: "1g", orientation: 0, positions: [{ x: -8, y: 10 }] },
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -4, y: 10 },
              { x: 0, y: 0 },
              { x: 4, y: 0 },
              { x: 9, y: -6 },
              { x: 8, y: -7 },
              { x: 8, y: -12 },
              { x: 12, y: -12 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -4, y: 10 },
              { x: 0, y: 0 },
              { x: 4, y: 0 },
              { x: 9, y: -6 },
              { x: 8, y: -7 },
              { x: 8, y: -12 },
              { x: 12, y: -12 },
            ],
          },
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: 7, y: -4 },
              { x: 5, y: -8 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 7, y: -4 },
              { x: 5, y: -8 },
            ],
          },
          {
            name: "4",
            orientation: 0,
            positions: [
              { x: 2, y: -4 },
              { x: 4, y: -5 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 1, y: -2 },
              { x: 4, y: -2 },
              { x: 10, y: -6 },
              { x: 3, y: -7 },
              { x: 11, y: -10 },
            ],
          },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: -4, y: 11 },
              { x: -3, y: 10 },
              { x: -3, y: 9 },
              { x: 4, y: -4 },
              { x: 5, y: -7 },
              { x: 7, y: -8 },
            ],
          },
          { name: "c", orientation: 0, positions: [{ x: 7, y: -10 }] },
          { name: "d", orientation: 0, positions: [{ x: 8, y: -6 }] },
          { name: "e", orientation: 0, positions: [{ x: 2, y: 0 }] },
          { name: "f", orientation: 0, positions: [{ x: 10, y: -8 }] },
          { name: "g", orientation: 0, positions: [{ x: 10, y: -12 }] },
          { name: "h", orientation: 0, positions: [{ x: 0, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -12, y: 11 },
              { x: -11, y: 10 },
              { x: -11, y: 9 },
              { x: -10, y: 8 },
              { x: -4, y: -2 },
              { x: -4, y: -3 },
              { x: -3, y: -4 },
              { x: -3, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frost Demon",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "aae" },
              { x: 1, y: -4, levels: "aan" },
              { x: 3, y: -6, levels: "nnn" },
              { x: 10, y: -11, levels: "nne" },
            ],
          },
          {
            name: "Wind Demon",
            orientation: 0,
            positions: [
              { x: 3, y: -3, levels: "eee" },
              { x: 9, y: -8, levels: "aea" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 1, y: -5 }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: -4, type: "Obstacle" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 0, y: -4, type: "Obstacle" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Hazardous Terrain" },
              { x: 5, y: -3 },
              { x: 7, y: -9 },
              { x: 11, y: -11 },
            ],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 6, y: -3 },
              { x: 3, y: -4 },
              { x: 3, y: -5, type: "Difficult Terrain" },
              { x: 11, y: -8 },
              { x: 6, y: -9 },
              { x: 11, y: -9, type: "Obstacle" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: 2, y: 0, type: "Obstacle" },
              { x: 10, y: -8 },
              { x: 10, y: -12 },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 102, triggers: [] },
    ],
    layout: [
      {
        name: "02-L",
        orientation: "0",
        center: { x: -2, y: 1 },
        origin: { x: 0, y: -1 },
      },
      {
        name: "02-J",
        orientation: "180",
        center: { x: 6, y: -3 },
        origin: { x: 4, y: -1 },
      },
      {
        name: "02-G",
        orientation: "180",
        center: { x: -6, y: 1 },
        origin: { x: -8, y: 3 },
      },
      {
        name: "01-G",
        orientation: "0",
        center: { x: 6, y: -7 },
        origin: { x: 8, y: -7 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: -2, y: 5 },
        origin: { x: -4, y: 5 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: -2, y: 5 },
        origin: { x: -4, y: 5 },
      },
      {
        name: "01-C",
        orientation: "180",
        center: { x: 2, y: 2 },
        origin: { x: 0, y: 2 },
      },
      {
        name: "01-A",
        orientation: "0",
        center: { x: 2, y: -4 },
        origin: { x: 4, y: -4 },
      },
    ],
  },
  "83": {
    id: "83",
    maps: [
      { type: "scenario", name: 103, triggers: [] },
      {
        type: "scenario",
        name: 104,
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 2 },
              { x: -3, y: 1 },
              { x: -2, y: 1 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -1, y: 5, levels: "eee" },
              { x: 2, y: 5, levels: "nne" },
              { x: 7, y: 4, levels: "nee" },
              { x: 8, y: 2, levels: "nne" },
              { x: 4, y: 1, levels: "aan" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: 9, y: 1, levels: "eee" },
              { x: 4, y: 4, levels: "aans" },
              { x: 0, y: 1, levels: "nnns" },
              { x: 1, y: 0, levels: "aees" },
            ],
          },
          {
            name: "Piranha Pig",
            orientation: 0,
            positions: [
              { x: 6, y: 5, levels: "nnn" },
              { x: -3, y: 4, levels: "nne" },
              { x: 8, y: 4, levels: "nne" },
              { x: 8, y: 3, levels: "eee" },
              { x: 7, y: 1, levels: "nee" },
              { x: 4, y: 2, levels: "anes" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 5 },
              { x: -1, y: 3, type: "Corridor" },
            ],
          },
          {
            name: "Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 5 },
              { x: 4, y: 3 },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: -2, y: 6, type: "Corridor" },
              { x: 0, y: 2, type: "Corridor" },
              { x: -1, y: 4, type: "Corridor" },
              { x: 1, y: 0 },
            ],
          },
          {
            name: "Large Dungeon Corridor",
            orientation: 0,
            positions: [
              { x: 3, y: 6, type: "Corridor" },
              { x: 4, y: 4 },
              { x: 5, y: 2, type: "Corridor" },
              { x: 6, y: 0, type: "Corridor" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -4, y: 6, type: "Difficult Terrain" },
              { x: -4, y: 5, type: "Difficult Terrain" },
              { x: -4, y: 4, type: "Difficult Terrain" },
              { x: -4, y: 3, type: "Difficult Terrain" },
              { x: -4, y: 2, type: "Difficult Terrain" },
              { x: -4, y: 1, type: "Difficult Terrain" },
              { x: -4, y: 0, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [{ x: 7, y: 3, type: "Obstacle" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 7, y: 6, type: "Obstacle" },
              { x: 10, y: 0, type: "Obstacle" },
              { x: -2, y: 4, type: "Obstacle" },
              { x: 0, y: 0, type: "Obstacle" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: 5, y: 1 }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [
              { x: 2, y: 4, type: "Obstacle" },
              { x: 3, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-E",
        orientation: "180",
        center: { x: 5, y: 0 },
        origin: { x: 2, y: 3 },
      },
      {
        name: "13-D",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: -5, y: 0 },
        origin: { x: -1, y: -3 },
      },
    ],
  },
  "84": {
    id: "84",
    maps: [
      { type: "scenario", name: 104, triggers: [] },
      {
        type: "scenario",
        name: 105,
        reference: { tile: "14-B", tileOrientation: "240" },
        tokens: [
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 3, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Elder Ooze",
            orientation: 0,
            positions: [{ x: -1, y: 5, levels: "bbb" }],
          },
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "aae" },
              { x: 0, y: 4, levels: "aae" },
              { x: -1, y: 3, levels: "eee" },
              { x: 0, y: 3, levels: "aea" },
              { x: 1, y: 3, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 6, type: "Trap" },
              { x: 0, y: 6, type: "Trap" },
              { x: -2, y: 3, type: "Trap" },
              { x: 2, y: 3, type: "Trap" },
              { x: 1, y: 1, type: "Trap" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "14-B",
        orientation: "270",
        center: { x: 0, y: 0 },
        origin: { x: 1, y: -5 },
      },
    ],
  },
  "85": {
    id: "85",
    maps: [
      {
        type: "scenario",
        name: 106,
        reference: { tile: "05-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 4 }] },
          { name: "2g", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -2, y: 2 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -5, y: 4 },
              { x: -4, y: 4 },
              { x: -5, y: 3 },
              { x: -4, y: 3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -2, y: 4, levels: "ane" },
              { x: -1, y: 3, levels: "eee" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -3, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "130.1" },
                  id: "scenario/106/token/1",
                },
              },
              {
                x: -2,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "110.4" },
                  id: "scenario/106/token/2",
                },
              },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 300,
            positions: [{ x: -1, y: 0, type: "Wall" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -1, y: 2, type: "Wall" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "4.2",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          { name: "11", orientation: 0, positions: [{ x: -8, y: 3 }] },
          { name: "3", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 3 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [{ x: -7, y: 0, levels: "nne" }],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "ann" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -5, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -1, y: 1 }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 1 },
              { x: -3, y: 0 },
            ],
          },
          { name: "Stalagmites", orientation: 0, positions: [{ x: -6, y: 2 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "15.1",
        reference: { tile: "01-F", tileOrientation: "0" },
        tokens: [
          { name: "c", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "i", orientation: 0, positions: [{ x: -3, y: 0 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Lava",
            orientation: 0,
            positions: [
              { x: -2, y: 1, type: "Hazardous Terrain" },
              { x: -1, y: 1, type: "Hazardous Terrain" },
              { x: -2, y: 0, type: "Hazardous Terrain" },
              { x: -1, y: 0, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "22.4",
        reference: { tile: "01-G", tileOrientation: "180" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "e", orientation: 0, positions: [{ x: 4, y: -1 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "nnn" }],
          },
        ],
        overlays: [
          { name: "Stalagmites", orientation: 0, positions: [{ x: 2, y: -1 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "24.2",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          { name: "11", orientation: 0, positions: [{ x: -8, y: 3 }] },
          { name: "3", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "c", orientation: 0, positions: [{ x: -8, y: 1 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [{ x: -7, y: 0, levels: "nne" }],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "ann" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -5, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 1 },
              { x: -3, y: 0 },
            ],
          },
          { name: "Stalagmites", orientation: 0, positions: [{ x: -6, y: 2 }] },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "47.3",
        reference: { tile: "07-C", tileOrientation: "0" },
        tokens: [
          { name: "11", orientation: 0, positions: [{ x: -3, y: -1 }] },
          { name: "2", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "5", orientation: 0, positions: [{ x: -5, y: 0 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 1 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -8, y: 2, levels: "aan" },
              { x: -7, y: 1, levels: "ann" },
              { x: -7, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          { name: "Snow Rock", orientation: 0, positions: [{ x: -3, y: 2 }] },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -6, y: 2, type: "Wall" },
              { x: -2, y: 0, type: "Wall" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "56.1",
        reference: { tile: "02-L", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: -4 }] },
          { name: "7", orientation: 0, positions: [{ x: 0, y: 0 }] },
          { name: "9", orientation: 0, positions: [{ x: 1, y: 1 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: 3, y: -3, levels: "nnn" },
              { x: 4, y: -3, levels: "aan" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 1, y: -2, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Water",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Difficult Terrain" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 1, y: 0 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "64.2",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 3 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [{ x: -7, y: 0, levels: "nne" }],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -3, y: 2, levels: "ann" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -5, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -1, y: 1 }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 1 },
              { x: -3, y: 0 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [{ x: -6, y: 2, type: "Wall" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "82.3",
        reference: { tile: "04-A", tileOrientation: "60" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -11, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -11, y: -3 }] },
          { name: "6", orientation: 0, positions: [{ x: 2, y: -1 }] },
          { name: "7", orientation: 0, positions: [{ x: -14, y: 1 }] },
          { name: "9", orientation: 0, positions: [{ x: -14, y: 3 }] },
          { name: "b", orientation: 0, positions: [{ x: -2, y: -2 }] },
        ],
        monsters: [
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -11, y: -2, levels: "nnn" },
              { x: -10, y: -2, levels: "aan" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -13, y: -1, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -11, y: -3, type: "Door" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [{ x: -14, y: 1, type: "Difficult Terrain" }],
          },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: -13, y: 1 }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "93.1",
        reference: { tile: "02-E", tileOrientation: "180" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "6", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "f", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "h", orientation: 0, positions: [{ x: 1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 2, y: -3, levels: "ann" },
              { x: 3, y: -3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [{ x: 4, y: -2, type: "Door" }],
          },
          {
            name: "Snowdrift",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Difficult Terrain" },
              { x: 3, y: -2, type: "Difficult Terrain" },
              { x: 4, y: -3, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "110.4",
        reference: { tile: "07-C", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 3 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -8, y: 2, levels: "aan" },
              { x: -7, y: 1, levels: "nna" },
              { x: -7, y: 0, levels: "aan" },
            ],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [{ x: -4, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -3, y: 2, type: "Wall" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -6, y: 2, type: "Wall" },
              { x: -2, y: 0, type: "Wall" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "130.1",
        reference: { tile: "02-J", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 0 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "nee" },
              { x: 1, y: -3, levels: "ane" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 2, y: -2, levels: "nne" }],
          },
        ],
        overlays: [
          { name: "Stalagmites", orientation: 0, positions: [{ x: 1, y: 0 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      { type: "section", name: "134.2", triggers: [] },
      {
        type: "section",
        name: "141.4",
        reference: { tile: "07-A", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -19, y: 20 },
              { x: -18, y: 19 },
              { x: -18, y: 18 },
              { x: -17, y: 17 },
            ],
          },
          { name: "11", orientation: 0, positions: [{ x: -8, y: 3 }] },
          { name: "12", orientation: 0, positions: [{ x: -5, y: 3 }] },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -19, y: 20 },
              { x: -18, y: 19 },
              { x: -18, y: 18 },
              { x: -17, y: 17 },
            ],
          },
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -15, y: 19 },
              { x: -14, y: 18 },
              { x: -12, y: 6 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -15, y: 19 },
              { x: -14, y: 18 },
              { x: -12, y: 6 },
            ],
          },
          { name: "3", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "d", orientation: 0, positions: [{ x: -18, y: 20 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [{ x: -7, y: 0, levels: "nne" }],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: -13, y: 9 },
              { x: -3, y: 2, levels: "ann" },
              { x: -2, y: 2, levels: "nne" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: -5, y: 1, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              { x: -15, y: 19, type: "Door" },
              { x: -14, y: 18, type: "Door" },
            ],
          },
          { name: "Snow Door", orientation: 0, positions: [{ x: -12, y: 6 }] },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: -1, y: 1 }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 1 },
              { x: -3, y: 0 },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -17, y: 19, type: "Obstacle" },
              { x: -14, y: 17, type: "Obstacle" },
              { x: -6, y: 2 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "159.3",
        reference: { tile: "04-A", tileOrientation: "0" },
        tokens: [
          { name: "8", orientation: 0, positions: [{ x: -4, y: 3 }] },
          { name: "g", orientation: 0, positions: [{ x: -2, y: 2 }] },
          { name: "j", orientation: 0, positions: [{ x: 0, y: 1 }] },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -3, y: 4, levels: "nne" },
              { x: -1, y: 0, levels: "nee" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "177.6",
        reference: { tile: "04-A", tileOrientation: "240" },
        tokens: [
          { name: "11", orientation: 0, positions: [{ x: 7, y: -19 }] },
          { name: "3", orientation: 0, positions: [{ x: 13, y: -19 }] },
          { name: "3g", orientation: 0, positions: [{ x: 13, y: -19 }] },
          { name: "4", orientation: 0, positions: [{ x: 3, y: -3 }] },
          { name: "d", orientation: 0, positions: [{ x: 15, y: -22 }] },
        ],
        monsters: [
          { name: "Black Imp", orientation: 0, positions: [{ x: 8, y: -22 }] },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: 12, y: -20, levels: "nne" },
              { x: 13, y: -20 },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 10, y: -21 }],
          },
        ],
        overlays: [
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [{ x: 14, y: -21, type: "Wall" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 12, y: -22, type: "Wall" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [{ x: 9, y: -20, type: "Wall" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [
              { x: 1, y: 2 },
              { x: 0, y: 0, type: "Treasure" },
              { x: 4, y: 0, type: "Treasure" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "178.4",
        reference: { tile: "07-C", tileOrientation: "0" },
        tokens: [
          { name: "11", orientation: 0, positions: [{ x: -3, y: -1 }] },
          { name: "12", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "5", orientation: 0, positions: [{ x: -5, y: 0 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: -3, y: 2, type: "Wall" }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -6, y: 2 },
              { x: -2, y: 0 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "181.3",
        reference: { tile: "07-C", tileOrientation: "0" },
        tokens: [
          { name: "10", orientation: 0, positions: [{ x: -2, y: 3 }] },
          { name: "11", orientation: 0, positions: [{ x: -3, y: -1 }] },
          { name: "12", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "2g", orientation: 0, positions: [{ x: -5, y: 3 }] },
          { name: "5", orientation: 0, positions: [{ x: -5, y: 0 }] },
        ],
        monsters: [],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -3, y: 2 },
              { x: -3, y: 1, type: "Wall" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: -6, y: 2, type: "Wall" },
              { x: -2, y: 0 },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "194.1",
        reference: { tile: "02-J", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 0 }] },
          { name: "9", orientation: 0, positions: [{ x: 4, y: -4 }] },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "nee" },
              { x: 1, y: -3, levels: "ane" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [{ x: 2, y: -2, levels: "nne" }],
          },
        ],
        overlays: [
          { name: "Stalagmites", orientation: 0, positions: [{ x: 1, y: 0 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "07-C",
        orientation: "0",
        center: { x: -3, y: 3 },
        origin: { x: 1, y: 2 },
      },
      {
        name: "07-A",
        orientation: "0",
        center: { x: 2, y: -1 },
        origin: { x: 6, y: -2 },
      },
      {
        name: "05-A",
        orientation: "0",
        center: { x: -4, y: 8 },
        origin: { x: -2, y: 6 },
      },
      {
        name: "04-A",
        orientation: "0",
        center: { x: -1, y: -7 },
        origin: { x: 1, y: -9 },
      },
      {
        name: "02-L",
        orientation: "180",
        center: { x: 3, y: 3 },
        origin: { x: 1, y: 5 },
      },
      {
        name: "02-J",
        orientation: "180",
        center: { x: 0, y: 8 },
        origin: { x: -2, y: 10 },
      },
      {
        name: "02-E",
        orientation: "180",
        center: { x: 6, y: -8 },
        origin: { x: 4, y: -6 },
      },
      {
        name: "01-G",
        orientation: "180",
        center: { x: 9, y: -7 },
        origin: { x: 7, y: -7 },
      },
      {
        name: "01-F",
        orientation: "0",
        center: { x: -4, y: -2 },
        origin: { x: -2, y: -2 },
      },
    ],
  },
  "86": {
    id: "86",
    maps: [
      {
        type: "scenario",
        name: 107,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -6, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 5, y: 1 },
              { x: 4, y: 0 },
              { x: 5, y: 0 },
              { x: 6, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 0, y: 5, levels: "nee" },
              { x: 3, y: 4, levels: "aee" },
              { x: 1, y: 4, levels: "eee" },
            ],
          },
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "nne" },
              { x: -5, y: 4, levels: "nee" },
              { x: -4, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -6, y: 6, levels: "nnn" },
              { x: 4, y: 3, levels: "aee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "6.3" },
                  id: "scenario/107/token/1",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: 4 },
              { x: 1, y: 2 },
            ],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 0, y: 3, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 0, y: 3, type: "Corridor" }],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: -3, y: 3, type: "Hazardous Terrain" },
              { x: 1, y: 3, type: "Hazardous Terrain" },
              { x: -2, y: 1, type: "Hazardous Terrain" },
            ],
          },
          {
            name: "Log",
            orientation: 60,
            positions: [
              { x: -4, y: 5 },
              { x: 2, y: 5 },
            ],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: -4, y: 2, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "6.3",
        reference: { tile: "16-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 9, y: -3 }] },
          { name: "1g", orientation: 0, positions: [{ x: 9, y: -3 }] },
        ],
        monsters: [
          {
            name: "Earth Demon",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "nee" },
              { x: 6, y: -5, levels: "nne" },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 7, y: -2, levels: "aae" },
              { x: 3, y: -5, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Hazardous Terrain" },
              { x: 3, y: -2, type: "Hazardous Terrain" },
            ],
          },
          { name: "Log", orientation: 60, positions: [{ x: 5, y: -2 }] },
          {
            name: "Large Snow Rock",
            orientation: 60,
            positions: [{ x: 6, y: -1 }],
          },
          { name: "Tree", orientation: 180, positions: [{ x: 7, y: -6 }] },
          { name: "Tree", orientation: 240, positions: [{ x: 2, y: -1 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 3, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-A",
        orientation: "180",
        center: { x: -6, y: 0 },
        origin: { x: -11, y: 3 },
      },
      {
        name: "15-A",
        orientation: "0",
        center: { x: 1, y: 0 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "13-A",
        orientation: "0",
        center: { x: 7, y: 0 },
        origin: { x: 10, y: -3 },
      },
    ],
  },
  "87": {
    id: "87",
    maps: [
      {
        type: "scenario",
        name: 108,
        reference: { tile: "10-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -4, y: 0 },
              { x: -3, y: 0 },
              { x: -2, y: 0 },
              { x: -1, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "eee" },
              { x: -4, y: 4, levels: "aan" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 3, levels: "aee" },
              { x: -3, y: 3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "31.2" },
                  id: "scenario/108/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: -4, y: 3, type: "Trap" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "31.2",
        reference: { tile: "10-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -2, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: -7, y: 3 }] },
          { name: "3g", orientation: 0, positions: [{ x: -1, y: 3 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -5, y: 4, levels: "nnn" },
              { x: -4, y: 4, levels: "ann" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [{ x: -4, y: 3, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "73.1" },
                  id: "section/31.2/token/4",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 90,
            positions: [
              {
                x: -7,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "184.6" },
                  id: "section/31.2/token/2",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "77.2" },
                  id: "section/31.2/token/3",
                },
              },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 300,
            positions: [{ x: -4, y: 1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "73.1",
        reference: { tile: "15-D", tileOrientation: "0" },
        tokens: [
          { name: "4", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "a", orientation: 0, positions: [{ x: -5, y: 5 }] },
          { name: "b", orientation: 0, positions: [{ x: -3, y: 5 }] },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "ane" },
              { x: -5, y: 2, levels: "eee" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -4, y: 1, levels: "aan" },
              { x: -2, y: 1, levels: "nee" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [{ x: -4, y: 5, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: -3, y: 1, type: "Trap" },
              { x: -1, y: 1, type: "Trap" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: -4, y: 3, type: "Obstacle" },
              { x: -2, y: 3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "77.2",
        reference: { tile: "02-H", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: -2 }] },
        ],
        monsters: [
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nee" },
              { x: 2, y: -2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Trap" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "184.6",
        reference: { tile: "02-F", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nee" },
              { x: 2, y: -2, levels: "nne" },
            ],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Trap" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: -3, y: 6 },
        origin: { x: 0, y: 3 },
      },
      {
        name: "10-C",
        orientation: "0",
        center: { x: 3, y: -7 },
        origin: { x: 7, y: -9 },
      },
      {
        name: "10-A",
        orientation: "0",
        center: { x: 0, y: -1 },
        origin: { x: 4, y: -3 },
      },
      {
        name: "02-H",
        orientation: "180",
        center: { x: 5, y: 0 },
        origin: { x: 3, y: 2 },
      },
      {
        name: "02-F",
        orientation: "180",
        center: { x: -5, y: 0 },
        origin: { x: -7, y: 2 },
      },
    ],
  },
  "88": {
    id: "88",
    maps: [
      {
        type: "scenario",
        name: 109,
        reference: { tile: "04-B", tileOrientation: "120" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -2, y: 1 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: -3 },
              { x: 1, y: -3 },
              { x: 0, y: -4 },
              { x: 1, y: -4 },
              { x: 2, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Savvas Icestorm",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nee" }],
          },
          {
            name: "Savvas Lavaflow",
            orientation: 0,
            positions: [
              { x: -2, y: -1, levels: "aan" },
              { x: 1, y: -1, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: -2,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "79.3" },
                  id: "scenario/109/token/1",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "25.1",
        reference: { tile: "10-C", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 1, y: -3 }] },
          { name: "a", orientation: 0, positions: [{ x: 2, y: 0 }] },
        ],
        monsters: [
          {
            name: "The Collector",
            orientation: 0,
            positions: [{ x: 3, y: 0, levels: "bbb" }],
          },
          {
            name: "Savvas Icestorm",
            orientation: 0,
            positions: [{ x: 5, y: -2, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 5, y: -1, type: "Trap" },
              { x: 5, y: -3, type: "Trap" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [{ x: 3, y: -2, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 5, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "79.3",
        reference: { tile: "02-H", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 2 }] },
        ],
        monsters: [
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "nee" },
              { x: -3, y: 2, levels: "nnn" },
              { x: 0, y: 1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: 0,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "25.1" },
                  id: "section/79.3/token/2",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "10-C",
        orientation: "180",
        center: { x: 2, y: 2 },
        origin: { x: -2, y: 4 },
      },
      {
        name: "04-B",
        orientation: "120",
        center: { x: 0, y: -5 },
        origin: { x: 0, y: -3 },
      },
      {
        name: "02-H",
        orientation: "0",
        center: { x: -3, y: 1 },
        origin: { x: -1, y: -1 },
      },
    ],
  },
  "89": {
    id: "89",
    maps: [
      {
        type: "scenario",
        name: 110,
        reference: { tile: "11-A", tileOrientation: "300" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 9 },
              { x: -3, y: 8 },
              { x: 0, y: 2 },
              { x: 1, y: 1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -5, y: 7, levels: "nnn" },
              { x: -3, y: 5, levels: "ane" },
              { x: -3, y: 3, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -5,
                y: 5,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "83.1" },
                  id: "scenario/110/token/1",
                },
              },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: -4, y: 7, type: "Obstacle" },
              { x: -1, y: 2, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "83.1",
        reference: { tile: "01-G", tileOrientation: "0" },
        tokens: [{ name: "2g", orientation: 0, positions: [{ x: -6, y: 4 }] }],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -9, y: 10, levels: "eee" },
              { x: -5, y: 9, levels: "aan" },
              { x: -1, y: 0, levels: "nne" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: -6, y: 7, levels: "ann" },
              { x: -2, y: 4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -6,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "131.5" },
                  id: "section/83.1/token/2",
                },
              },
            ],
          },
          {
            name: "Stairs",
            orientation: 0,
            positions: [{ x: -5, y: 8, type: "Difficult Terrain" }],
          },
          {
            name: "Stairs",
            orientation: 180,
            positions: [{ x: -2, y: 2, type: "Difficult Terrain" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              {
                x: -3,
                y: 4,
                type: "Obstacle",
                trigger: {
                  type: "door",
                  display: "Section 36.1",
                  action: "reveal",
                  what: { type: "section", name: "36.1" },
                  id: "section/83.1/token/c",
                },
              },
            ],
          },
          {
            name: "Large Snow Rock",
            orientation: 0,
            positions: [
              { x: -6, y: 8, type: "Obstacle" },
              { x: -3, y: 2, type: "Obstacle" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [
              {
                x: -4,
                y: 5,
                type: "Objective",
                trigger: {
                  type: "door",
                  display: "Section 119.2",
                  action: "reveal",
                  what: { type: "section", name: "119.2" },
                  id: "section/83.1/token/a",
                },
              },
              {
                x: -3,
                y: 5,
                type: "Objective",
                trigger: {
                  type: "door",
                  display: "Section 119.2",
                  action: "reveal",
                  what: { type: "section", name: "119.2" },
                  id: "section/83.1/token/b",
                },
              },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "131.5",
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: -8, y: 1 }] },
        ],
        monsters: [
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -2, y: 1, levels: "nnn" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [
              { x: -7, y: 2, levels: "ane" },
              { x: -4, y: 0, levels: "eee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: -8,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "146.3" },
                  id: "section/131.5/token/3",
                },
              },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -4, y: 2, type: "Difficult Terrain" },
              { x: -6, y: 1, type: "Difficult Terrain" },
              { x: -5, y: 0, type: "Difficult Terrain" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "146.3",
        reference: { tile: "05-A", tileOrientation: "0" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 0, y: 2 }] },
          { name: "3g", orientation: 0, positions: [{ x: 0, y: 2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -4, y: 4 },
              { x: -5, y: 3 },
              { x: -4, y: 3 },
              { x: -3, y: 1 },
              { x: -4, y: 1 },
              { x: -2, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [{ x: -3, y: 0, levels: "nne" }],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [{ x: -1, y: 0, levels: "nne" }],
          },
          {
            name: "Algox Priest",
            orientation: 0,
            positions: [{ x: -2, y: 3 }],
          },
          {
            name: "Vanjal",
            orientation: 0,
            positions: [{ x: -4, y: 2, levels: "bbb" }],
          },
        ],
        overlays: [
          {
            name: "Water",
            orientation: 0,
            positions: [{ x: -3, y: 2, type: "Difficult Terrain" }],
          },
          { name: "Barricade", orientation: 60, positions: [{ x: -3, y: 4 }] },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -5, y: 4, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-A",
        orientation: "300",
        center: { x: 9, y: 0 },
        origin: { x: 11, y: -5 },
      },
      {
        name: "10-D",
        orientation: "180",
        center: { x: 2, y: 1 },
        origin: { x: -1, y: 3 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: -4, y: 0 },
        origin: { x: 0, y: -1 },
      },
      {
        name: "05-A",
        orientation: "0",
        center: { x: -10, y: 0 },
        origin: { x: -8, y: -2 },
      },
      {
        name: "01-G",
        orientation: "0",
        center: { x: 4, y: -4 },
        origin: { x: 6, y: -4 },
      },
      {
        name: "01-A",
        orientation: "180",
        center: { x: -1, y: 6 },
        origin: { x: -3, y: 6 },
      },
    ],
  },
  "9": {
    id: "9",
    maps: [
      {
        type: "scenario",
        name: 13,
        reference: { tile: "16-C", tileOrientation: "180" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 9, y: -3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 1, y: -2 },
              { x: 2, y: -3 },
              { x: 3, y: -3 },
              { x: 2, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 5, y: 0, levels: "aan" },
              { x: 5, y: -5, levels: "aee" },
              { x: 9, y: -6, levels: "nnn" },
            ],
          },
          {
            name: "Living Doom",
            orientation: 0,
            positions: [
              { x: 5, y: -2, levels: "nnn" },
              { x: 6, y: -4, levels: "nne" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [{ x: 6, y: 0, levels: "ana" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 9,
                y: -3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "78.2" },
                  id: "scenario/13/token/1",
                },
              },
            ],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Trap" },
              { x: 6, y: -3, type: "Trap" },
              { x: 5, y: -6, type: "Trap" },
            ],
          },
          {
            name: "Altar",
            orientation: 0,
            positions: [{ x: 5, y: -3, type: "Obstacle" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: 7, y: 0, type: "Obstacle" },
              { x: 4, y: -2, type: "Obstacle" },
              { x: 4, y: -4, type: "Obstacle" },
              { x: 7, y: -5, type: "Obstacle" },
            ],
          },
          {
            name: "Sarcophagus",
            orientation: 60,
            positions: [
              { x: 2, y: -1 },
              { x: 8, y: -4 },
            ],
          },
          {
            name: "Sarcophagus",
            orientation: 300,
            positions: [
              { x: 7, y: -2, type: "Obstacle" },
              { x: 4, y: -5, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 10, y: -6, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "26.1",
        reference: { tile: "08-B", tileOrientation: "60" },
        tokens: [
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: -5, y: 2 },
              { x: -5, y: 1 },
              { x: -5, y: 0 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: -5, y: 2 },
              { x: -5, y: 1 },
              { x: -5, y: 0 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 1, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ooze",
            orientation: 0,
            positions: [
              { x: -1, y: 1, levels: "nne" },
              { x: -1, y: -3, levels: "nne" },
            ],
          },
        ],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "78.2",
        reference: { tile: "12-B", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -2, y: -11 }] },
          { name: "1g", orientation: 0, positions: [{ x: -2, y: -11 }] },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 1, y: -1 },
              { x: 1, y: -2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 2, y: -10, levels: "aee" },
              { x: 3, y: -11, levels: "eee" },
            ],
          },
          {
            name: "Living Spirit",
            orientation: 0,
            positions: [
              { x: -2, y: 1, levels: "aan" },
              { x: -1, y: -1, levels: "nnn" },
              { x: 2, y: -6, levels: "nne" },
              { x: 4, y: -7, levels: "nne" },
            ],
          },
          {
            name: "Ooze",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nee" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 1,
                y: 0,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "26.1" },
                  mode: "all",
                  id: "section/78.2/token/2",
                },
              },
              {
                x: 1,
                y: -1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "26.1" },
                  mode: "all",
                  id: "section/78.2/token/2",
                },
              },
              {
                x: 1,
                y: -2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "26.1" },
                  mode: "all",
                  id: "section/78.2/token/2",
                },
              },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 60,
            positions: [{ x: 1, y: -6 }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -2, y: 0, type: "Obstacle" },
              { x: -4, y: -1, type: "Obstacle" },
              { x: 3, y: -9, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-C",
        orientation: "180",
        center: { x: -5, y: -4 },
        origin: { x: -10, y: -1 },
      },
      {
        name: "12-B",
        orientation: "60",
        center: { x: -1, y: 5 },
        origin: { x: 1, y: 7 },
      },
      {
        name: "11-B",
        orientation: "60",
        center: { x: 2, y: -2 },
        origin: { x: 5, y: 0 },
      },
      {
        name: "08-B",
        orientation: "60",
        center: { x: 5, y: 4 },
        origin: { x: 7, y: 5 },
      },
    ],
  },
  "90": {
    id: "90",
    maps: [
      {
        type: "scenario",
        name: 111,
        reference: { tile: "15-A", tileOrientation: "0" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -5, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -5, y: 1 }] },
          { name: "2", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "3", orientation: 0, positions: [{ x: -4, y: -4 }] },
          { name: "3g", orientation: 0, positions: [{ x: -4, y: -4 }] },
          { name: "4", orientation: 0, positions: [{ x: 1, y: -6 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 6 },
              { x: -5, y: 6 },
              { x: -4, y: 6 },
              { x: -3, y: 6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -3, y: 3, levels: "nne" },
              { x: -6, y: -1 },
              { x: 3, y: -5 },
              { x: -1, y: -7 },
            ],
          },
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: -6, y: -3 },
              { x: 4, y: -3 },
              { x: 5, y: -5 },
              { x: -3, y: -6 },
              { x: 0, y: -6 },
              { x: 5, y: -7 },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: -2, y: 3 },
              { x: -3, y: 1 },
            ],
          },
          {
            name: "Snow Imp",
            orientation: 0,
            positions: [
              { x: -8, y: 1, levels: "eee" },
              { x: -7, y: 1 },
              { x: -8, y: 0 },
              { x: -2, y: -5 },
              { x: 1, y: -8 },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: -3, y: -4, type: "Corridor" },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 300,
            positions: [
              { x: -4, y: 0, type: "Corridor" },
              { x: 2, y: -7, type: "Corridor" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "15-A",
        orientation: "0",
        center: { x: -1, y: 5 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "08-B",
        orientation: "60",
        center: { x: 5, y: -3 },
        origin: { x: 7, y: -2 },
      },
      {
        name: "04-C",
        orientation: "0",
        center: { x: -4, y: 1 },
        origin: { x: -2, y: -1 },
      },
      {
        name: "03-D",
        orientation: "180",
        center: { x: 1, y: -5 },
        origin: { x: -2, y: -3 },
      },
    ],
  },
  "91": {
    id: "91",
    maps: [
      {
        type: "scenario",
        name: 112,
        reference: { tile: "07-D", tileOrientation: "0" },
        tokens: [
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: -4, y: -1 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -3, y: 0 },
              { x: -2, y: 0 },
              { x: -1, y: 0 },
              { x: -2, y: -1 },
              { x: -1, y: -1 },
            ],
          },
        ],
        monsters: [],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: -3, y: -1, type: "Corridor" }],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -7, y: -1, type: "Difficult Terrain" },
              { x: -6, y: -1, type: "Difficult Terrain" },
              { x: -5, y: -1, type: "Difficult Terrain" },
              { x: -2, y: -1, type: "Difficult Terrain" },
              { x: -1, y: -1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [
              { x: -2, y: 2, type: "Obstacle" },
              { x: -5, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "scenario",
        name: 113,
        reference: { tile: "07-B", tileOrientation: "0" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -9, y: 3 },
              { x: 7, y: -17 },
              { x: 7, y: -18 },
              { x: 8, y: -18 },
              { x: 8, y: -19 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -9, y: 3 },
              { x: 7, y: -17 },
              { x: 7, y: -18 },
              { x: 8, y: -18 },
              { x: 8, y: -19 },
            ],
          },
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 0, y: 3 },
              { x: 13, y: -14 },
              { x: 13, y: -15 },
              { x: 14, y: -15 },
              { x: 14, y: -16 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 0, y: 3 },
              { x: 13, y: -14 },
              { x: 13, y: -15 },
              { x: 14, y: -15 },
              { x: 14, y: -16 },
            ],
          },
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: -6, y: -3 },
              { x: 15, y: -19 },
              { x: 15, y: -20 },
              { x: 16, y: -20 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: -6, y: -3 },
              { x: 15, y: -19 },
              { x: 15, y: -20 },
              { x: 16, y: -20 },
            ],
          },
          { name: "4", orientation: 0, positions: [{ x: 3, y: -3 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 4, y: -12 },
              { x: 5, y: -12 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: 8, y: -15 }] },
          { name: "c", orientation: 0, positions: [{ x: 7, y: -20 }] },
          { name: "d", orientation: 0, positions: [{ x: 11, y: -16 }] },
          { name: "e", orientation: 0, positions: [{ x: 17, y: -16 }] },
          { name: "f", orientation: 0, positions: [{ x: 12, y: -19 }] },
          { name: "g", orientation: 0, positions: [{ x: 19, y: -20 }] },
          { name: "h", orientation: 0, positions: [{ x: 12, y: -14 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 7, y: 1 },
              { x: 8, y: 0 },
              { x: 6, y: -4 },
              { x: -2, y: -1 },
              { x: 1, y: -6 },
              { x: 2, y: -6 },
              { x: 10, y: -6 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 10, y: -13 },
              { x: 11, y: -13 },
              { x: 12, y: -13 },
              { x: 13, y: -13 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lightning Eel",
            orientation: 0,
            positions: [
              { x: -6, y: -1, levels: "eees" },
              { x: 0, y: -1, levels: "anes" },
              { x: 9, y: -1, levels: "nnes" },
              { x: -2, y: -7, levels: "nnns2" },
              { x: 12, y: -7, levels: "nnes" },
            ],
          },
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [
              { x: 7, y: 2, levels: "ane" },
              { x: -6, y: 2, levels: "nne" },
              { x: -2, y: 0, levels: "nee" },
              { x: 5, y: -4, levels: "nne" },
              { x: 2, y: -5, levels: "nne" },
              { x: 5, y: -17, levels: "nee" },
            ],
          },
          {
            name: "Lurker Mindsnipper",
            orientation: 0,
            positions: [
              { x: 2, y: 1, levels: "eee" },
              { x: 10, y: -4, levels: "nee" },
              { x: -4, y: -5, levels: "eee" },
            ],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: 5, y: 0, levels: "eee" },
              { x: 2, y: -6, levels: "aee" },
              { x: 7, y: -6, levels: "nee" },
              { x: 13, y: -18, levels: "nne" },
              { x: 18, y: -18, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: -3, y: -1, type: "Corridor" },
              { x: 6, y: -1, type: "Corridor" },
              { x: 0, y: -7 },
              { x: 9, y: -7 },
            ],
          },
          {
            name: "Log",
            orientation: 0,
            positions: [
              { x: -6, y: 1, type: "Difficult Terrain" },
              { x: -1, y: 1, type: "Difficult Terrain" },
              { x: 4, y: 0 },
              { x: -2, y: -4, type: "Difficult Terrain" },
            ],
          },
          { name: "Log", orientation: 60, positions: [{ x: 3, y: 2 }] },
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: 13, y: -13, type: "Corridor" },
              { x: 14, y: -15, type: "Corridor" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: -7, y: -1, type: "Difficult Terrain" },
              { x: -5, y: -1, type: "Difficult Terrain" },
              { x: -1, y: -1, type: "Difficult Terrain" },
              { x: 2, y: -1, type: "Difficult Terrain" },
              { x: 3, y: -1, type: "Difficult Terrain" },
              { x: 4, y: -1, type: "Difficult Terrain" },
              { x: 7, y: -1, type: "Difficult Terrain" },
              { x: 8, y: -1, type: "Difficult Terrain" },
              { x: -5, y: -6 },
              { x: -4, y: -6 },
              { x: 3, y: -6 },
              { x: 4, y: -6 },
              { x: 5, y: -6 },
              { x: 6, y: -6, type: "Hazardous Terrain" },
              { x: 9, y: -6 },
              { x: 13, y: -14, type: "Corridor" },
              { x: 14, y: -16, type: "Corridor" },
              { x: -6, y: -1 },
              { x: 0, y: -1 },
              { x: 9, y: -1 },
              { x: -2, y: -7 },
              { x: 12, y: -7 },
            ],
          },
          {
            name: "Ice Spikes",
            orientation: 0,
            positions: [
              { x: 6, y: -3 },
              { x: 8, y: -3 },
              { x: 6, y: -4 },
              { x: 5, y: -5 },
            ],
          },
          {
            name: "Barrels",
            orientation: 0,
            positions: [{ x: 1, y: -6, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "07-G",
        orientation: "180",
        center: { x: -8, y: 0 },
        origin: { x: -12, y: 1 },
      },
      {
        name: "07-D",
        orientation: "0",
        center: { x: 8, y: 0 },
        origin: { x: 12, y: -1 },
      },
      {
        name: "07-B",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 4, y: -1 },
      },
    ],
  },
  "92": {
    id: "92",
    maps: [
      {
        type: "scenario",
        name: 113,
        reference: { tile: "14-A", tileOrientation: "60" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: -3, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
              { x: -2, y: 1 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: -3, y: 3 },
              { x: -3, y: 2 },
              { x: -2, y: 2 },
              { x: -2, y: 1 },
            ],
          },
          {
            name: "2",
            orientation: 0,
            positions: [
              { x: 2, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 6 },
              { x: 3, y: 5 },
            ],
          },
          {
            name: "2g",
            orientation: 0,
            positions: [
              { x: 2, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 6 },
              { x: 3, y: 5 },
            ],
          },
          {
            name: "3",
            orientation: 0,
            positions: [
              { x: 5, y: 1 },
              { x: 5, y: 0 },
              { x: 6, y: 0 },
            ],
          },
          {
            name: "3g",
            orientation: 0,
            positions: [
              { x: 5, y: 1 },
              { x: 5, y: 0 },
              { x: 6, y: 0 },
            ],
          },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -6, y: 8 },
              { x: -5, y: 8 },
            ],
          },
          { name: "b", orientation: 0, positions: [{ x: -2, y: 5 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 0 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 5 }] },
          { name: "e", orientation: 0, positions: [{ x: 6, y: 5 }] },
          { name: "f", orientation: 0, positions: [{ x: 2, y: 1 }] },
          { name: "g", orientation: 0, positions: [{ x: 9, y: 0 }] },
          { name: "h", orientation: 0, positions: [{ x: 1, y: 7 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -1, y: 8 },
              { x: 0, y: 8 },
              { x: 1, y: 8 },
              { x: 2, y: 8 },
            ],
          },
        ],
        monsters: [
          {
            name: "Lurker Clawcrusher",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "nee" }],
          },
          {
            name: "Lurker Soldier",
            orientation: 0,
            positions: [{ x: -3, y: 6, levels: "nne" }],
          },
          {
            name: "Lurker Wavethrower",
            orientation: 0,
            positions: [
              { x: 3, y: 2, levels: "nne" },
              { x: 8, y: 2, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Water",
            orientation: 0,
            positions: [
              { x: 2, y: 8 },
              { x: 3, y: 6, type: "Corridor" },
            ],
          },
          {
            name: "Water",
            orientation: 0,
            positions: [
              { x: 2, y: 7 },
              { x: 3, y: 5 },
            ],
          },
          {
            name: "Crate",
            orientation: 0,
            positions: [
              { x: 4, y: 8 },
              { x: -1, y: 6 },
              { x: 6, y: 2, type: "Obstacle" },
              { x: 0, y: 0, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 114, triggers: [] },
    ],
    layout: [
      {
        name: "14-A",
        orientation: "90",
        center: { x: -6, y: 0 },
        origin: { x: -2, y: -5 },
      },
      {
        name: "07-G",
        orientation: "180",
        center: { x: 4, y: -4 },
        origin: { x: 0, y: -3 },
      },
      {
        name: "02-D",
        orientation: "0",
        center: { x: 3, y: 2 },
        origin: { x: 5, y: 0 },
      },
      {
        name: "02-B",
        orientation: "0",
        center: { x: -1, y: 2 },
        origin: { x: 1, y: 0 },
      },
    ],
  },
  "93": { id: "93", maps: [{ type: "scenario", name: 115, triggers: [] }] },
  "93A": {
    id: "93A",
    maps: [
      { type: "scenario", name: 115, triggers: [] },
      {
        type: "scenario",
        name: 116,
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -2, y: 6 }] },
          { name: "b", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 6 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 0 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: 2, y: 4 },
              { x: 3, y: 4 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
              { x: 3, y: 2 },
              { x: 4, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Archer",
            orientation: 0,
            positions: [
              { x: -1, y: 5, levels: "nne" },
              { x: 1, y: 1, levels: "nne" },
            ],
          },
          {
            name: "Algox Guard",
            orientation: 0,
            positions: [
              { x: 1, y: 4, levels: "ann" },
              { x: 0, y: 3, levels: "naa" },
              { x: 2, y: 2, levels: "ann" },
            ],
          },
          {
            name: "Algox Scout",
            orientation: 0,
            positions: [{ x: -1, y: 3, levels: "nees" }],
          },
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [{ x: 3, y: 3, levels: "nnn" }],
          },
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "eee" }],
          },
        ],
        overlays: [
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [
              { x: -3, y: 3, type: "Obstacle" },
              { x: 2, y: 3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-D",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 6, y: -3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 1, y: -3 },
      },
    ],
  },
  "93B": {
    id: "93B",
    maps: [
      { type: "scenario", name: 115, triggers: [] },
      {
        type: "scenario",
        name: 116,
        reference: { tile: "13-B", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: -2, y: 6 }] },
          { name: "b", orientation: 0, positions: [{ x: 1, y: 0 }] },
          { name: "c", orientation: 0, positions: [{ x: -3, y: 6 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 0 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: 2, y: 4 },
              { x: 3, y: 4 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
              { x: 3, y: 2 },
              { x: 4, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Algox Snowspeaker",
            orientation: 0,
            positions: [{ x: 3, y: 3, levels: "nnn" }],
          },
          {
            name: "Hound",
            orientation: 0,
            positions: [
              { x: -1, y: 4, levels: "nnes" },
              { x: 0, y: 2, levels: "nees" },
            ],
          },
          {
            name: "Polar Bear",
            orientation: 0,
            positions: [
              { x: -6, y: 5, levels: "ann" },
              { x: -4, y: 1, levels: "nnn" },
            ],
          },
          {
            name: "Vermling Priest",
            orientation: 0,
            positions: [{ x: -5, y: 3, levels: "eee" }],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: -1, y: 6, levels: "aae" },
              { x: 2, y: 0, levels: "aae" },
              { x: -2, y: 4, levels: "eees" },
              { x: -1, y: 2, levels: "eees" },
            ],
          },
        ],
        overlays: [
          {
            name: "Barrels",
            orientation: 0,
            positions: [
              { x: -2, y: 5, type: "Obstacle" },
              { x: 0, y: 1, type: "Obstacle" },
            ],
          },
          {
            name: "Supply Shelf",
            orientation: 0,
            positions: [
              { x: -3, y: 3, type: "Obstacle" },
              { x: 2, y: 3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-D",
        orientation: "0",
        center: { x: 2, y: 0 },
        origin: { x: 6, y: -3 },
      },
      {
        name: "13-B",
        orientation: "0",
        center: { x: -3, y: 0 },
        origin: { x: 1, y: -3 },
      },
    ],
  },
  "94": {
    id: "94",
    maps: [
      { type: "scenario", name: 116, triggers: [] },
      {
        type: "scenario",
        name: 117,
        reference: { tile: "16-D", tileOrientation: "180" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 8, y: -1 },
              { x: 10, y: -5 },
            ],
          },
          { name: "2g", orientation: 0, positions: [{ x: 3, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 7, y: -7 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 6, y: -1 },
              { x: 3, y: -2 },
              { x: 4, y: -4 },
              { x: 8, y: -5 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 1, y: -1 },
              { x: 1, y: -2 },
              { x: 2, y: -3 },
              { x: 2, y: -4 },
              { x: 3, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 2, y: 0, levels: "nee" },
              { x: 7, y: 0, levels: "nne" },
              { x: 5, y: -6, levels: "nee" },
              { x: 10, y: -6, levels: "nne" },
            ],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: 6, y: 0, levels: "nnn" },
              { x: 2, y: -2, levels: "nnn" },
              { x: 5, y: -4, levels: "nnn" },
              { x: 9, y: -6, levels: "nnn" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 8, y: -2, levels: "nne" },
              { x: 9, y: -4, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 0,
            positions: [
              {
                x: 3,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "20.3" },
                  locked: true,
                  id: "scenario/117/token/2",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 180,
            positions: [
              {
                x: 7,
                y: -7,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "87.3" },
                  locked: true,
                  id: "scenario/117/token/3",
                },
              },
            ],
          },
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: 8,
                y: -1,
                type: "Door",
                trigger: { id: "scenario/117/token/1" },
              },
              {
                x: 10,
                y: -5,
                type: "Door",
                trigger: { id: "scenario/117/token/1" },
              },
            ],
          },
          {
            name: "Control Console",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: -3,
                type: "Obstacle",
                trigger: {
                  type: "door",
                  display: "Section 150.2",
                  action: "reveal",
                  what: { type: "section", name: "150.2" },
                  also: [
                    { action: "open", what: "scenario/117/token/1" },
                    { action: "unlock", what: "scenario/117/token/2" },
                    { action: "unlock", what: "scenario/117/token/3" },
                  ],
                  id: "scenario/117/token/b",
                },
              },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 4, y: -4, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [
              { x: 6, y: -1, type: "Obstacle" },
              { x: 8, y: -5, type: "Obstacle" },
            ],
          },
          {
            name: "Metal Cabinet",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Obstacle" },
              { x: 3, y: -2, type: "Obstacle" },
              { x: 6, y: -6, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "20.3",
        reference: { tile: "01-D", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -2 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -2 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 0, y: 0, levels: "nnn" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [{ x: 1, y: -1, levels: "aae" }],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 3, y: -1, type: "Trap" },
              { x: 4, y: -1, type: "Trap" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 4, y: 0, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 2, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "87.3",
        reference: { tile: "01-B", tileOrientation: "180" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: 3, y: 1 }] },
          { name: "3g", orientation: 0, positions: [{ x: 3, y: 1 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 1, y: -1, levels: "nnn" }],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [{ x: 1, y: 0, levels: "ane" }],
          },
        ],
        overlays: [
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: 3, y: 0, type: "Trap" },
              { x: 4, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Obstacle" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 3, y: -1, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "150.2",
        reference: { tile: "13-F", tileOrientation: "180" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: 2, y: -5 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 0, y: -1 },
              { x: 2, y: -5 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 3, y: -2, levels: "nne" },
              { x: 4, y: -3 },
              { x: 4, y: -4, levels: "nne" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 4, y: -2, levels: "aan" },
              { x: 5, y: -3, levels: "nen" },
              { x: 5, y: -4, levels: "aan" },
            ],
          },
          {
            name: "Vermling Scout",
            orientation: 0,
            positions: [
              { x: 1, y: 0, levels: "eee" },
              { x: 4, y: 0, levels: "aae" },
              { x: 3, y: -1, levels: "aee" },
              { x: 5, y: -2, levels: "eee" },
              { x: 6, y: -4, levels: "eee" },
              { x: 5, y: -5, levels: "aee" },
              { x: 4, y: -6, levels: "eee" },
              { x: 7, y: -6, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 3, y: 0, type: "Obstacle" }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [{ x: 3, y: -4, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "16-D",
        orientation: "180",
        center: { x: -1, y: 0 },
        origin: { x: -6, y: 3 },
      },
      {
        name: "13-F",
        orientation: "180",
        center: { x: 6, y: 0 },
        origin: { x: 2, y: 3 },
      },
      {
        name: "01-D",
        orientation: "180",
        center: { x: -5, y: 6 },
        origin: { x: -7, y: 6 },
      },
      {
        name: "01-B",
        orientation: "180",
        center: { x: 0, y: -5 },
        origin: { x: -2, y: -5 },
      },
    ],
  },
  "95": {
    id: "95",
    maps: [
      {
        type: "scenario",
        name: 118,
        reference: { tile: "11-A", tileOrientation: "180" },
        tokens: [
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 0, y: 1 },
            ],
          },
          { name: "a", orientation: 0, positions: [{ x: 9, y: -5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 9, y: -4 },
              { x: 8, y: -5 },
              { x: 10, y: -5 },
              { x: 9, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "ann" },
              { x: 1, y: -1, levels: "nan" },
              { x: 6, y: -2, levels: "eee" },
              { x: 1, y: -2, levels: "ann" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: 0,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "84.1" },
                  mode: "all",
                  id: "scenario/118/token/1",
                },
              },
              {
                x: 1,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "84.1" },
                  mode: "all",
                  id: "scenario/118/token/1",
                },
              },
            ],
          },
          {
            name: "Sarcophagus",
            orientation: 300,
            positions: [{ x: 9, y: -5, type: "Difficult Terrain" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 1, y: 0, type: "Obstacle" }],
          },
          {
            name: "Tree",
            orientation: 240,
            positions: [{ x: 5, y: -3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "84.1",
        reference: { tile: "11-C", tileOrientation: "240" },
        tokens: [
          {
            name: "1",
            orientation: 0,
            positions: [
              { x: 5, y: 2 },
              { x: 6, y: 2 },
            ],
          },
          {
            name: "1g",
            orientation: 0,
            positions: [
              { x: 5, y: 2 },
              { x: 6, y: 2 },
            ],
          },
          { name: "2g", orientation: 0, positions: [{ x: -1, y: 2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 1, y: 8 },
              { x: 0, y: 7 },
              { x: 3, y: 7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "ann" },
              { x: 1, y: 0, levels: "naa" },
              { x: 2, y: -1, levels: "ann" },
            ],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: -1, y: 8, levels: "nne" },
              { x: 3, y: 8, levels: "nee" },
            ],
          },
          {
            name: "Living Doom",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "aan" },
              { x: 1, y: 4, levels: "nna" },
              { x: 2, y: 3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Snow Door",
            orientation: 0,
            positions: [
              {
                x: -1,
                y: 2,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "149.3" },
                  id: "section/84.1/token/2",
                },
              },
            ],
          },
          {
            name: "Large Snow Corridor",
            orientation: 0,
            positions: [{ x: 3, y: 6, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 0,
            positions: [{ x: 1, y: 6, type: "Corridor" }],
          },
          {
            name: "Snow Corridor",
            orientation: 60,
            positions: [{ x: 1, y: 6, type: "Corridor" }],
          },
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 1, y: 7, type: "Obstacle" }],
          },
          {
            name: "Tree",
            orientation: 180,
            positions: [
              { x: 4, y: 5 },
              { x: 2, y: 1 },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "149.3",
        reference: { tile: "02-E", tileOrientation: "240" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 4, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 4, y: -1 }] },
          {
            name: "b",
            orientation: 0,
            positions: [
              { x: 1, y: 1 },
              { x: 1, y: 0 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ice Wraith",
            orientation: 0,
            positions: [{ x: 0, y: 1, levels: "eee" }],
          },
          {
            name: "Living Bones",
            orientation: 0,
            positions: [
              { x: 0, y: 2, levels: "ann" },
              { x: 0, y: 0, levels: "ann" },
            ],
          },
          {
            name: "Living Doom",
            orientation: 0,
            positions: [{ x: 2, y: 0, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Snow Rock",
            orientation: 0,
            positions: [{ x: 2, y: -1, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-C",
        orientation: "240",
        center: { x: 0, y: -1 },
        origin: { x: -3, y: -3 },
      },
      {
        name: "11-A",
        orientation: "180",
        center: { x: 7, y: -5 },
        origin: { x: 2, y: -2 },
      },
      {
        name: "02-E",
        orientation: "240",
        center: { x: -6, y: 0 },
        origin: { x: -8, y: 0 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: -2, y: 5 },
        origin: { x: -4, y: 5 },
      },
      {
        name: "01-E",
        orientation: "180",
        center: { x: -2, y: 5 },
        origin: { x: -4, y: 5 },
      },
    ],
  },
  "96": {
    id: "96",
    maps: [
      {
        type: "scenario",
        name: 119,
        reference: { tile: "07-C", tileOrientation: "60" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 1 }] },
          { name: "b", orientation: 0, positions: [{ x: -1, y: -5 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -2, y: -5 },
              { x: -2, y: -6 },
              { x: 0, y: -6 },
              { x: 0, y: -7 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: -2, y: 1, levels: "nee" }],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [{ x: -1, y: -1, levels: "nne" }],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -1, y: 1, type: "Door" }],
          },
          {
            name: "Large Metal Corridor",
            orientation: 60,
            positions: [{ x: -1, y: -4 }],
          },
          {
            name: "Stairs",
            orientation: 150,
            positions: [{ x: -1, y: -6, type: "Difficult Terrain" }],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: -2, y: 0, type: "Objective" }],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Objective" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "18.1",
        reference: { tile: "13-B", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -4, y: -8 }] },
          { name: "1g", orientation: 0, positions: [{ x: -4, y: -8 }] },
          { name: "2", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 6, y: -3 }] },
          { name: "c", orientation: 0, positions: [{ x: -4, y: -3 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -8, y: 2 },
              { x: -8, y: 1 },
              { x: 4, y: 0 },
              { x: 7, y: -6 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: -9, y: 3, levels: "nnn" },
              { x: 0, y: 0, levels: "nnn" },
              { x: -5, y: -3, levels: "nnn" },
              { x: 6, y: -6, levels: "aan" },
            ],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -9, y: 2, levels: "nee" },
              { x: -6, y: 0, levels: "nnn" },
              { x: 2, y: -3, levels: "nne" },
              { x: 5, y: -3, levels: "nee" },
              { x: -3, y: -4, levels: "aan" },
              { x: 5, y: -5, levels: "nne" },
              { x: -4, y: -6, levels: "eee" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: -6, y: -1, levels: "ann" },
              { x: 4, y: -1, levels: "aan" },
              { x: 0, y: -3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [{ x: 6, y: -3, type: "Door" }],
          },
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: 1, y: -3, type: "Corridor" }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [
              { x: 1, y: -2, type: "Corridor" },
              { x: 2, y: -4, type: "Corridor" },
            ],
          },
          {
            name: "Large Cave Corridor",
            orientation: 300,
            positions: [{ x: -4, y: -2, type: "Corridor" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -2, y: -2, type: "Obstacle" },
              { x: 3, y: -2, type: "Obstacle" },
              { x: -1, y: -4, type: "Obstacle" },
              { x: 4, y: -4, type: "Obstacle" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [{ x: 3, y: 0, type: "Objective" }],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [
              { x: 0, y: -4, type: "Objective" },
              { x: 5, y: -6, type: "Objective" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "116.2",
        reference: { tile: "01-B", tileOrientation: "60" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: -6, y: -5 }] },
          { name: "2g", orientation: 0, positions: [{ x: -6, y: -5 }] },
          { name: "3", orientation: 0, positions: [{ x: 4, y: -10 }] },
          { name: "3g", orientation: 0, positions: [{ x: 4, y: -10 }] },
          { name: "d", orientation: 0, positions: [{ x: -1, y: -5 }] },
          { name: "loot", orientation: 0, positions: [{ x: -6, y: -4 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nee" },
              { x: 1, y: -6, levels: "nen" },
            ],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 0, y: -7, levels: "ane" },
              { x: 3, y: -8, levels: "nee" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: 0, y: -2, levels: "ane" },
              { x: -3, y: -5, levels: "ene" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 60,
            positions: [{ x: 0, y: -4 }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -4, y: -4, type: "Obstacle" },
              { x: -3, y: -6, type: "Obstacle" },
            ],
          },
          {
            name: "Debris",
            orientation: 0,
            positions: [
              { x: -1, y: -1, type: "Objective" },
              { x: -1, y: -2, type: "Objective" },
              { x: 3, y: -9, type: "Objective" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 0,
            positions: [{ x: 0, y: -6, type: "Objective" }],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -1, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "167.4",
        reference: { tile: "05-A", tileOrientation: "120" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: -11, y: 5 }] },
          { name: "1g", orientation: 0, positions: [{ x: -11, y: 5 }] },
          { name: "2", orientation: 0, positions: [{ x: -15, y: 13 }] },
          { name: "2g", orientation: 0, positions: [{ x: -15, y: 13 }] },
          { name: "3", orientation: 0, positions: [{ x: -2, y: 0 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: 0 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: 2, y: -3 },
              { x: 1, y: -4 },
              { x: 3, y: -4 },
              { x: 2, y: -5 },
            ],
          },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 0, y: 0 },
              { x: 2, y: -2 },
              { x: -1, y: -3 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 3, y: -3, levels: "nnn" }],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: -1, y: 0, levels: "aee" },
              { x: 0, y: -4, levels: "eee" },
            ],
          },
          {
            name: "Rending Drake",
            orientation: 0,
            positions: [
              { x: 1, y: -2, levels: "nne" },
              { x: 0, y: -3, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [{ x: -15, y: 13, type: "Door" }],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -15, y: 12, type: "Objective" },
              { x: -13, y: 11, type: "Objective" },
              { x: -15, y: 10, type: "Objective" },
              { x: -14, y: 9, type: "Objective" },
              { x: -12, y: 9, type: "Objective" },
              { x: -10, y: 6, type: "Objective" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: -9, y: 6 }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-B",
        orientation: "180",
        center: { x: 0, y: 1 },
        origin: { x: -4, y: 4 },
      },
      {
        name: "11-F",
        orientation: "180",
        center: { x: 7, y: -1 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "11-B",
        orientation: "240",
        center: { x: -6, y: -1 },
        origin: { x: -9, y: -3 },
      },
      {
        name: "07-C",
        orientation: "60",
        center: { x: -8, y: -8 },
        origin: { x: -7, y: -5 },
      },
      {
        name: "05-A",
        orientation: "120",
        center: { x: 14, y: -6 },
        origin: { x: 14, y: -4 },
      },
      {
        name: "01-F",
        orientation: "120",
        center: { x: -11, y: 5 },
        origin: { x: -13, y: 7 },
      },
      {
        name: "01-B",
        orientation: "60",
        center: { x: 8, y: 4 },
        origin: { x: 8, y: 6 },
      },
    ],
  },
  "97": {
    id: "97",
    maps: [
      {
        type: "scenario",
        name: 120,
        reference: { tile: "08-A", tileOrientation: "0" },
        tokens: [
          { name: "a", orientation: 0, positions: [{ x: 1, y: -8 }] },
          { name: "b", orientation: 0, positions: [{ x: -5, y: 2 }] },
          { name: "c", orientation: 0, positions: [{ x: 4, y: -8 }] },
          { name: "d", orientation: 0, positions: [{ x: 0, y: 2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: -1, y: 2 },
              { x: 0, y: -2 },
              { x: -2, y: -3 },
              { x: 7, y: -6 },
              { x: 0, y: -7 },
            ],
          },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 7, y: -9 },
              { x: 8, y: -9 },
              { x: 7, y: -10 },
              { x: 8, y: -10 },
              { x: 8, y: -11 },
            ],
          },
        ],
        monsters: [
          {
            name: "Program Director",
            orientation: 0,
            positions: [{ x: -3, y: 3, levels: "bbb" }],
          },
          {
            name: "Flaming Bladespinner",
            orientation: 0,
            positions: [
              { x: -2, y: 3, levels: "ann" },
              { x: -1, y: -6, levels: "ane" },
              { x: 6, y: -7, levels: "ann" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -3, y: 0, levels: "nne" },
              { x: 2, y: -8, levels: "nnn" },
            ],
          },
          {
            name: "Ruined Machine",
            orientation: 0,
            positions: [
              { x: 0, y: 0, levels: "nnn" },
              { x: 0, y: -3, levels: "aen" },
              { x: 5, y: -4, levels: "aan" },
              { x: -2, y: -4, levels: "aan" },
              { x: 3, y: -8 },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: -4, y: 3, levels: "eee" },
              { x: 6, y: -4, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Large Metal Corridor",
            orientation: 0,
            positions: [
              { x: 0, y: -1, type: "Corridor" },
              { x: 4, y: -4, type: "Corridor" },
              { x: 5, y: -6, type: "Corridor" },
            ],
          },
          {
            name: "Metal Corridor",
            orientation: 0,
            positions: [{ x: -2, y: -1 }],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              { x: -5, y: 2 },
              { x: 0, y: 2, type: "Pressure Plate" },
              { x: 1, y: -8 },
              { x: 4, y: -8, type: "Pressure Plate" },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -4, y: 4, type: "Trap" },
              { x: -3, y: 4, type: "Trap" },
              { x: -2, y: -2, type: "Trap" },
              { x: 1, y: -2, type: "Trap" },
              { x: -1, y: -5, type: "Trap" },
              { x: 3, y: -5, type: "Trap" },
            ],
          },
          {
            name: "Control Console",
            orientation: 60,
            positions: [{ x: -5, y: 4 }],
          },
          {
            name: "Control Console",
            orientation: 300,
            positions: [{ x: -1, y: 3, type: "Obstacle" }],
          },
        ],
        triggers: [],
      },
      { type: "scenario", name: 121, triggers: [] },
    ],
    layout: [
      {
        name: "15-D",
        orientation: "0",
        center: { x: -1, y: -1 },
        origin: { x: 2, y: -4 },
      },
      {
        name: "08-A",
        orientation: "0",
        center: { x: -4, y: 6 },
        origin: { x: -2, y: 4 },
      },
      {
        name: "06-B",
        orientation: "180",
        center: { x: 5, y: -4 },
        origin: { x: 2, y: 0 },
      },
    ],
  },
  "98": {
    id: "98",
    maps: [
      {
        type: "scenario",
        name: 121,
        reference: { tile: "11-F", tileOrientation: "240" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: 6, y: 4 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: 0, y: 1 },
              { x: 0, y: 0 },
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 2, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 5, y: 5, levels: "nne" }],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 1, y: 5, levels: "aan" },
              { x: 2, y: 5, levels: "eee" },
              { x: 2, y: 4, levels: "nnn" },
              { x: 5, y: 3, levels: "ane" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [
              { x: 0, y: 3, levels: "ann" },
              { x: 2, y: 2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: 6,
                y: 4,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "160.1" },
                  id: "scenario/121/token/1",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [{ x: 3, y: 4, type: "Difficult Terrain" }],
          },
          {
            name: "Large Debris",
            orientation: 60,
            positions: [{ x: 1, y: 3 }],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 5, y: 4, type: "Obstacle" },
              { x: 3, y: 3, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "131.3",
        reference: { tile: "02-G", tileOrientation: "60" },
        tokens: [
          { name: "3", orientation: 0, positions: [{ x: -2, y: -2 }] },
          { name: "3g", orientation: 0, positions: [{ x: -2, y: -2 }] },
          {
            name: "a",
            orientation: 0,
            positions: [
              { x: -3, y: 2 },
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: 0, y: 0 },
            ],
          },
        ],
        monsters: [],
        overlays: [],
        triggers: [],
      },
      {
        type: "section",
        name: "145.3",
        reference: { tile: "01-F", tileOrientation: "180" },
        tokens: [
          { name: "2", orientation: 0, positions: [{ x: 8, y: -3 }] },
          { name: "2g", orientation: 0, positions: [{ x: 8, y: -3 }] },
          { name: "3g", orientation: 0, positions: [{ x: 10, y: 4 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 11, y: 1 },
              { x: 7, y: 0 },
              { x: 1, y: -1 },
            ],
          },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [
              { x: 9, y: 4, levels: "nee" },
              { x: 11, y: -1, levels: "nee" },
            ],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: 9, y: 2, levels: "nnn" },
              { x: 8, y: 0, levels: "ann" },
              { x: 6, y: -1, levels: "nne" },
            ],
          },
          {
            name: "Spitting Drake",
            orientation: 0,
            positions: [
              { x: 3, y: 0, levels: "nnn" },
              { x: 3, y: -1, levels: "aan" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Corridor",
            orientation: 0,
            positions: [{ x: 5, y: -1 }],
          },
          {
            name: "Large Cave Corridor",
            orientation: 0,
            positions: [{ x: 5, y: 0, type: "Corridor" }],
          },
          {
            name: "Spike Pit",
            orientation: 0,
            positions: [
              { x: 9, y: 3, type: "Trap" },
              { x: 11, y: 2, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 9, y: 1, type: "Difficult Terrain" },
              { x: 2, y: -1, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Stalagmites",
            orientation: 0,
            positions: [
              { x: 10, y: 2, type: "Obstacle" },
              { x: 6, y: 0, type: "Obstacle" },
              { x: 11, y: 0, type: "Obstacle" },
              { x: 8, y: -1, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 0, y: 0, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "160.1",
        reference: { tile: "07-H", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -1 }] },
          { name: "2g", orientation: 0, positions: [{ x: 6, y: 1 }] },
          { name: "loot", orientation: 0, positions: [{ x: 0, y: 0 }] },
        ],
        monsters: [
          {
            name: "Ancient Artillery",
            orientation: 0,
            positions: [{ x: 7, y: -1, levels: "nne" }],
          },
          {
            name: "Black Imp",
            orientation: 0,
            positions: [
              { x: 7, y: 0, levels: "aen" },
              { x: 3, y: -2, levels: "nnn" },
              { x: 4, y: -2, levels: "aan" },
            ],
          },
          {
            name: "Burrowing Blade",
            orientation: 0,
            positions: [
              { x: 4, y: 0, levels: "ane" },
              { x: 3, y: -1, levels: "nnn" },
              { x: 6, y: -2, levels: "nnn" },
            ],
          },
        ],
        overlays: [
          {
            name: "Cave Door",
            orientation: 0,
            positions: [
              {
                x: 6,
                y: 1,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  what: { type: "section", name: "145.3" },
                  id: "section/160.1/token/2",
                },
              },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: 1, y: -1, type: "Difficult Terrain" },
              { x: 4, y: -1, type: "Difficult Terrain" },
              { x: 5, y: -2, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Large Debris",
            orientation: 300,
            positions: [
              { x: 2, y: -1, type: "Obstacle" },
              { x: 7, y: -2, type: "Obstacle" },
            ],
          },
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 8, y: -2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "11-F",
        orientation: "240",
        center: { x: -6, y: -6 },
        origin: { x: -9, y: -8 },
      },
      {
        name: "11-B",
        orientation: "60",
        center: { x: 3, y: 2 },
        origin: { x: 6, y: 4 },
      },
      {
        name: "07-H",
        orientation: "180",
        center: { x: 1, y: -4 },
        origin: { x: -3, y: -3 },
      },
      {
        name: "02-G",
        orientation: "60",
        center: { x: 5, y: 7 },
        origin: { x: 7, y: 7 },
      },
      {
        name: "01-F",
        orientation: "180",
        center: { x: -3, y: 1 },
        origin: { x: -5, y: 1 },
      },
    ],
  },
  "99": {
    id: "99",
    maps: [
      {
        type: "scenario",
        name: 122,
        reference: { tile: "13-C", tileOrientation: "0" },
        tokens: [
          { name: "1g", orientation: 0, positions: [{ x: -1, y: 3 }] },
          {
            name: "start",
            orientation: 0,
            positions: [
              { x: -6, y: 4 },
              { x: -5, y: 4 },
              { x: -5, y: 3 },
              { x: -5, y: 2 },
              { x: -4, y: 2 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [
              { x: -10, y: 11, levels: "nee" },
              { x: -3, y: 4, levels: "aan" },
              { x: -3, y: 3, levels: "nee" },
              { x: -2, y: 2, levels: "nnn" },
              { x: -2, y: -5, levels: "nnn" },
            ],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: -9, y: 12, levels: "nnn" },
              { x: -7, y: 11, levels: "aee" },
              { x: -7, y: 6, levels: "nne" },
              { x: 1, y: -5, levels: "nnn" },
              { x: 0, y: -6, levels: "aae" },
            ],
          },
        ],
        overlays: [
          {
            name: "Metal Door",
            orientation: 270,
            positions: [
              {
                x: -1,
                y: 3,
                type: "Door",
                trigger: {
                  type: "door",
                  action: "reveal",
                  locked: true,
                  what: {},
                  id: "scenario/122/token/1",
                },
              },
            ],
          },
          {
            name: "Pressure Plate",
            orientation: 0,
            positions: [
              {
                x: -7,
                y: 12,
                type: "Pressure Plate",
                trigger: {
                  type: "door",
                  display: "Section 127.3",
                  action: "reveal",
                  what: { type: "section", name: "127.3" },
                  also: [{ action: "open", what: "scenario/122/token/1" }],
                  id: "scenario/122/token/a",
                },
              },
              {
                x: 2,
                y: -6,
                trigger: {
                  type: "door",
                  display: "Section 127.3",
                  action: "reveal",
                  what: { type: "section", name: "127.3" },
                  also: [{ action: "open", what: "scenario/122/token/1" }],
                  id: "scenario/122/token/a",
                },
              },
            ],
          },
          {
            name: "Bear Trap",
            orientation: 0,
            positions: [
              { x: -9, y: 9, type: "Trap" },
              { x: -8, y: 9, type: "Trap" },
              { x: -1, y: 0, type: "Trap" },
            ],
          },
          {
            name: "Rubble",
            orientation: 0,
            positions: [
              { x: -5, y: 8, type: "Difficult Terrain" },
              { x: -3, y: -2, type: "Difficult Terrain" },
              { x: -2, y: -3 },
            ],
          },
          {
            name: "Stairs",
            orientation: 0,
            positions: [
              { x: -9, y: 10, type: "Difficult Terrain" },
              { x: -4, y: 7, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Stairs",
            orientation: 180,
            positions: [
              { x: 0, y: -1, type: "Difficult Terrain" },
              { x: -2, y: -4, type: "Difficult Terrain" },
            ],
          },
          {
            name: "Ice Pillar",
            orientation: 0,
            positions: [
              { x: -6, y: 5, type: "Obstacle" },
              { x: -3, y: 5, type: "Obstacle" },
              { x: -1, y: 1, type: "Obstacle" },
              { x: -4, y: 1, type: "Obstacle" },
            ],
          },
        ],
        triggers: [],
      },
      {
        type: "section",
        name: "127.3",
        reference: { tile: "05-A", tileOrientation: "180" },
        tokens: [
          { name: "1", orientation: 0, positions: [{ x: 0, y: -2 }] },
          { name: "1g", orientation: 0, positions: [{ x: 0, y: -2 }] },
          {
            name: "loot",
            orientation: 0,
            positions: [
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 4, y: -1 },
              { x: 5, y: -3 },
              { x: 3, y: -4 },
              { x: 4, y: -4 },
            ],
          },
        ],
        monsters: [
          {
            name: "Frozen Corpse",
            orientation: 0,
            positions: [{ x: 2, y: -2, levels: "nne" }],
          },
          {
            name: "Robotic Boltshooter",
            orientation: 0,
            positions: [
              { x: 3, y: -1, levels: "ann" },
              { x: 5, y: -4, levels: "nnn" },
            ],
          },
          {
            name: "Steel Automaton",
            orientation: 0,
            positions: [
              { x: 1, y: -1, levels: "nne" },
              { x: 2, y: -3, levels: "nee" },
            ],
          },
        ],
        overlays: [
          {
            name: "Treasure Chest",
            orientation: 0,
            positions: [{ x: 4, y: -2, type: "Treasure" }],
          },
        ],
        triggers: [],
      },
    ],
    layout: [
      {
        name: "13-C",
        orientation: "0",
        center: { x: 0, y: 0 },
        origin: { x: 3, y: -3 },
      },
      {
        name: "05-A",
        orientation: "180",
        center: { x: 4, y: 0 },
        origin: { x: 2, y: 2 },
      },
      {
        name: "01-H",
        orientation: "180",
        center: { x: -6, y: 9 },
        origin: { x: -8, y: 9 },
      },
      {
        name: "01-E",
        orientation: "0",
        center: { x: 3, y: -9 },
        origin: { x: 5, y: -9 },
      },
      {
        name: "01-C",
        orientation: "180",
        center: { x: -4, y: 6 },
        origin: { x: -6, y: 6 },
      },
      {
        name: "01-B",
        orientation: "0",
        center: { x: 2, y: -6 },
        origin: { x: 4, y: -6 },
      },
    ],
  },
};
