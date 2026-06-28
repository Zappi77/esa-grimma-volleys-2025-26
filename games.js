const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const youtubeViewsDate = "28.06.2026";

const youtubeViews = {
  "3005": 1490,
  "3008": 1044,
  "3019": 1093,
  "3027": 1674,
  "3029": 1386,
  "3040": 2933,
  "3054": 2072,
  "3063": 1147,
  "3068": 1182,
  "3075": 1044,
  "3082": 2451,
  "3087": 1381,
  "3096": 1556,
  "3099": 982,
  "3110": 1053,
  "3118": 886,
  "3120": 888,
  "3131": 5285,
  "3136": 1011,
  "3145": 1116,
  "3154": 1571,
  "3159": 2282,
  "3166": 825,
  "3173": 1718,
  "3178": 1022,
  "3191": 1227,
  "3205": 2688
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Carlotta Strube": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Marian Mischo": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413",
  "Georgia McGovern": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387",
  "Charlotte Kerscher": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985",
  "Lilly Roßberg": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Sophia Minlend": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=752329376",
  "Mille Kjosaas": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892",
  "Amber de Tant": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162",
  "Franziska Nitsche": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921",
  "Theresa Barner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046",
  "Maja Löcker": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=750736056",
  "Maia Rackel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028",
  "Zoe Albert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233",
  "Julia Ziegler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Franziska Finke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=45496772",
  "Katherine Konkle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954769",
  "Marie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333",
  "Jette Hippel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134",
  "Delaney Elizabeth Hogan": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=777743932",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Paula Gürsching": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Elisabeth Kettenbach": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633",
  "Annika Stenchly": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Sophie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
};

const gameSummaries = {};

const games = [
  {
    "number": 3005,
    "matchId": 777353318,
    "weekday": "Samstag",
    "date": "20.09.2025",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "TV Planegg-Krailling",
    "score": "0:3",
    "ballPoints": "58:75",
    "sets": [
      "23:25",
      "21:25",
      "14:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/d08378a3-ca19-402a-bee2-4ef45f1c7705/3005",
    "venue": "Muldentalhalle",
    "spectators": 225,
    "duration": 72,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      },
      {
        "team": "TV Planegg-Krailling",
        "name": "Nora Harner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=767130990"
      }
    ],
    "rankAfter": 11,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778417707",
    "summary": [
      "Der Saisonauftakt in der Sparda 2. Liga Pro ist geglückt. Der TV Planegg-Krailling kann sich auswärts 3:0 gegen die ESA Grimma Volleys durchsetzen."
    ],
    "videoUrl": "https://www.youtube.com/live/Gjn4jRFiAkQ?si=TipjmW7FeW_UDr5u",
    "youtubeViews": 1490,
    "articleLinks": [
      {
        "title": "Gelungener Saisonauftakt",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778417707"
      },
      {
        "title": "Planegg Krailling entführt die ersten Punk",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778416406"
      },
      {
        "title": "ESA VOLLEYS starten mit ganz viel Elan",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778390194"
      }
    ]
  },
  {
    "number": 3027,
    "matchId": 777353459,
    "weekday": "Samstag",
    "date": "11.10.2025",
    "time": "19:30",
    "home": "TV Hörde",
    "away": "ESA Grimma Volleys",
    "score": "2:3",
    "ballPoints": "94:110",
    "sets": [
      "25:21",
      "26:24",
      "12:25",
      "18:25",
      "13:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/e6aa3cfb-a30d-41ee-b780-3aa93949d7e1/3027",
    "venue": "Sporthalle Phoenix (Hörde III)",
    "spectators": 167,
    "duration": 112,
    "mvps": [
      {
        "team": "TV Hörde",
        "name": "Frauke Böcker",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Hannah Polzin",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=758122301"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "Hörde gewann die ersten beiden Sätze mit 25:21 und 26:24, doch Grimma antwortete mit mehr Kraft und Spielwitz. Die Gäste glichen durch 25:12 und 25:18 aus und entschieden den bis zuletzt offenen Tie-Break mit 15:13 für sich."
    ],
    "videoUrl": "https://www.youtube.com/live/GMDN1AGmXig?si=CabP8bmXkzACjbaY",
    "articleLinks": [
      {
        "title": "Endlich wieder Heim",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778686259"
      },
      {
        "title": "Fünf Satz Krimi sorgt für einen Punkt",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778686243"
      }
    ]
  },
  {
    "number": 3029,
    "matchId": 777353508,
    "weekday": "Samstag",
    "date": "18.10.2025",
    "time": "20:00",
    "home": "TV Waldgirmes",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:51",
    "sets": [
      "25:19",
      "25:11",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/813b3e17-f426-4927-8647-18d1fd2e921e/3029",
    "venue": "Sporthalle der Lahntalschule Atzbach",
    "spectators": 80,
    "duration": 70,
    "mvps": [
      {
        "team": "TV Waldgirmes",
        "name": "Vanessa Krauß",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=742992709"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Ylva Holthues",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=767267283"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778796186",
    "summary": [
      "Waldgirmes bestätigte seine starke Frühform mit einem souveränen Heimsieg gegen Grimma. Nach dem 25:19 zum Auftakt dominierte der TVW den zweiten Satz mit 25:11 und brachte auch den dritten Durchgang mit 25:21 sicher nach Hause."
    ],
    "videoUrl": "https://www.youtube.com/live/aaz57m8uz5s?si=4g1GuSv6u03HISz_",
    "youtubeViews": 1385,
    "articleLinks": [
      {
        "title": "Waldgirmes in der Erfolgsspur",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778796186"
      }
    ]
  },
  {
    "number": 3082,
    "matchId": 777353791,
    "weekday": "Sonntag",
    "date": "19.10.2025",
    "time": "16:00",
    "home": "ESA Grimma Volleys",
    "away": "Sparkassen Wildcats Stralsund",
    "score": "3:2",
    "ballPoints": "104:87",
    "sets": [
      "23:25",
      "16:25",
      "25:12",
      "25:17",
      "15:8"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/80013780-f447-4a7d-8d59-580110205bab/3082",
    "venue": "Muldentalhalle",
    "spectators": 285,
    "duration": 117,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sydney Moore",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=778381936"
      },
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Mille Kjosaas",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892"
      }
    ],
    "rankAfter": 10,
    "summary": [
      "Nach zwei verlorenen Sätzen kämpfte sich Grimma gegen Stralsund eindrucksvoll zurück. Die Gastgeberinnen dominierten die Durchgänge drei und vier mit 25:12 und 25:17 und entschieden den Tie-Break mit 15:8 zum 3:2-Heimsieg."
    ],
    "videoUrl": "https://www.youtube.com/live/83DLCMIYopk?si=eaehsLqaJ-u28Yhf",
    "articleLinks": [
      {
        "title": "Sportliche Fairness in Grimma vermisst",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778808968"
      },
      {
        "title": "Es kann nur besser werden",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778757661"
      }
    ]
  },
  {
    "number": 3019,
    "matchId": 777353404,
    "weekday": "Samstag",
    "date": "25.10.2025",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "TV Dingolfing",
    "score": "3:0",
    "ballPoints": "75:54",
    "sets": [
      "25:23",
      "25:15",
      "25:16"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/1b679d2b-ae13-4d82-9a9a-081a1470e50d/3019",
    "venue": "Muldentalhalle",
    "spectators": 235,
    "duration": 64,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Hannah Polzin",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=758122301"
      },
      {
        "team": "TV Dingolfing",
        "name": "Samira Winkler",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=760887548"
      }
    ],
    "rankAfter": 8,
    "summary": [
      "Vor 235 Zuschauern setzte sich Grimma nach einem umkämpften ersten Satz immer deutlicher durch. Eine Aufschlagserie von Sydney Moore brachte die Gastgeberinnen auf Kurs; starke Blockarbeit, sichere Annahme und variables Angriffsspiel führten zum klaren 3:0 (25:23, 25:15, 25:16)."
    ],
    "videoUrl": "https://www.youtube.com/live/NzHaoPYy3V8?si=P8wxC0K-zXCcLaLf",
    "articleLinks": [
      {
        "title": "Ungefährdeter 3:0 Heimsieg der ESA Grimma",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778897988"
      },
      {
        "title": "Weiterhin kein Auswärtssieg",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778890085"
      },
      {
        "title": "ESA VOLLEYS empfangen die DINGO’s",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778862929"
      },
      {
        "title": "Hohe Auswärtshürde",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778825289"
      }
    ]
  },
  {
    "number": 3054,
    "matchId": 777353625,
    "weekday": "Freitag",
    "date": "31.10.2025",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "VfL Oythe",
    "score": "1:3",
    "ballPoints": "87:96",
    "sets": [
      "25:21",
      "20:25",
      "23:25",
      "19:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/64a0861f-994b-416c-99e2-7074af434e8b/3054",
    "venue": "Muldentalhalle",
    "spectators": 260,
    "duration": 97,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Hannah Polzin",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=758122301"
      },
      {
        "team": "VfL Oythe",
        "name": "Annelis Lotte Denise Tyws",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=767172913"
      }
    ],
    "rankAfter": 8,
    "articleUrl": "",
    "summary": [
      "Grimma startete gegen Oythe mit einem 25:21-Satzgewinn, musste danach aber drei enge Durchgänge abgeben. Der VfL drehte die Partie mit 25:20, 25:23 und 25:19 und gewann in der Muldentalhalle mit 3:1."
    ],
    "videoUrl": "https://www.youtube.com/live/gl3SAF81Dks?si=vndED-xXncZJXff5",
    "youtubeViews": 2072,
    "articleLinks": []
  },
  {
    "number": 3040,
    "matchId": 777353539,
    "weekday": "Sonntag",
    "date": "02.11.2025",
    "time": "15:00",
    "home": "ESA Grimma Volleys",
    "away": "Eintracht Spontent Düsseldorf",
    "score": "3:1",
    "ballPoints": "102:75",
    "sets": [
      "25:19",
      "25:10",
      "27:29",
      "25:17"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/276f2a7f-1091-4304-80bb-aac64dc48b32/3040",
    "venue": "Muldentalhalle",
    "spectators": 307,
    "duration": 93,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      },
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Carlotta Strube",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    "rankAfter": 8,
    "videoUrl": "https://www.youtube.com/watch?v=q7z0jP-bmGE",
    "summary": [
      "Grimma kontrollierte das Heimspiel gegen Düsseldorf über weite Strecken und gewann mit 3:1. Nach den klaren ersten beiden Sätzen holten die Gäste den dritten Durchgang knapp mit 29:27, ehe Grimma mit 25:17 den Heimsieg vollendete."
    ],
    "youtubeViews": 2932,
    "articleLinks": []
  },
  {
    "number": 3045,
    "matchId": 777353564,
    "weekday": "Samstag",
    "date": "08.11.2025",
    "time": "20:00",
    "home": "BayerVolleys Leverkusen",
    "away": "ESA Grimma Volleys",
    "score": "2:3",
    "ballPoints": "101:108",
    "sets": [
      "22:25",
      "15:25",
      "28:26",
      "25:17",
      "11:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/251ac440-93ea-44a7-a9ec-757ce9f88ea5/3045",
    "venue": "Ostermann-Arena",
    "spectators": 286,
    "duration": 113,
    "mvps": [
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Lena Rößler",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=9573817"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Meghan Barthel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=22354682"
      }
    ],
    "rankAfter": 6,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779197920",
    "summary": [
      "ESA Grimma Volleys gewann das Saisonspiel gegen BayerVolleys Leverkusen mit 2:3 nach Sätzen."
    ],
    "videoUnavailable": true,
    "articleLinks": [
      {
        "title": "Volleys fehlt gegen Grimma der Rhythmus",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779197920"
      },
      {
        "title": "Volleys ziehen Stärke aus Favoritenrolle",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779154761"
      }
    ]
  },
  {
    "number": 3205,
    "matchId": 777354538,
    "weekday": "Mittwoch",
    "date": "19.11.2025",
    "time": "15:00",
    "home": "ESA Grimma Volleys",
    "away": "VCO Dresden",
    "score": "3:2",
    "ballPoints": "92:96",
    "sets": [
      "25:22",
      "25:18",
      "11:25",
      "16:25",
      "15:6"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/251ee324-8cf0-4a0f-b9cf-c91d8660e2f9/3205",
    "venue": "Muldentalhalle",
    "spectators": 460,
    "duration": 94,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sandra Seyfferth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=6325"
      },
      {
        "team": "VCO Dresden",
        "name": "Jette Hippel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      }
    ],
    "rankAfter": 7,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779325732",
    "summary": [
      "Grimma bestimmte die ersten beiden Sätze und führte nach 25:22 und 25:18 mit 2:0. Dresden steigerte sich deutlich, glich mit 25:11 und 25:16 aus, geriet im Tie-Break aber früh ins Hintertreffen; Grimma entschied ihn vor 460 Zuschauern mit 15:6."
    ],
    "videoUrl": "https://www.youtube.com/live/75vU1v6kMrA?si=B6m6AR16s6L5x90S",
    "youtubeViews": 2688,
    "articleLinks": [
      {
        "title": "SACHSENDERBY in Grimma",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779325732"
      },
      {
        "title": "SACHSENDERBY in der MULDENTALHÖLLE",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779305013"
      }
    ]
  },
  {
    "number": 3063,
    "matchId": 777353674,
    "weekday": "Samstag",
    "date": "29.11.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "ESA Grimma Volleys",
    "score": "0:3",
    "ballPoints": "43:75",
    "sets": [
      "13:25",
      "16:25",
      "14:25"
    ],
    "statsUrl": "https://live.volleyball-bundesliga.de/2025-26/SAMSscore/3063.pdf",
    "venue": "Neuseenlandhalle",
    "spectators": 411,
    "duration": 66,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Sarah Bergmann",
        "url": "https://women.volleybox.net/de/sarah-bergmann-p324105"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamMemberId=778186766&hideHistoryBackButton=true"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779503647",
    "summary": [
      "Vor 411 Zuschauern bestimmten die favorisierten ESA Grimma Volleys das Landkreis-Leipzig-Derby in Markkleeberg und gewannen klar mit 3:0 (25:13, 25:16, 25:14). Die Gastgeberinnen hielten im dritten Satz bis zum 11:11 dagegen, ehe Grimma erneut davonzog und den deutlichen Auswärtssieg vollendete."
    ],
    "videoUrl": "https://www.youtube.com/live/L8Owx_vCn6o?si=_TkutiM34w0VeGIG",
    "articleLinks": [
      {
        "title": "Derbysieg leider deutlich verpasst",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779503647"
      },
      {
        "title": "„Derby“ in der Neuseenlandhalle",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779421148"
      }
    ]
  },
  {
    "number": 3068,
    "matchId": 777353711,
    "weekday": "Samstag",
    "date": "06.12.2025",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "Rote Raben Vilsbiburg",
    "score": "0:3",
    "ballPoints": "64:78",
    "sets": [
      "25:27",
      "24:26",
      "15:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/f32c7784-c951-4f21-ba5a-ef1856d2be09/3068",
    "venue": "Muldentalhalle",
    "spectators": 245,
    "duration": 69,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sally Marie Marong",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=760900352"
      },
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Anne Marie Hatch",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056897"
      }
    ],
    "rankAfter": 8,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779587002",
    "summary": [
      "Die ESA VOLLEYS sehr sehr nah an einer kleiner Sensation! Doch Vilsbiburg setzte sich routiniert durch...."
    ],
    "videoUrl": "https://www.youtube.com/live/gavNYpG6a0g?si=wngRH6b9zQOIm-DT",
    "youtubeViews": 1181,
    "articleLinks": [
      {
        "title": "Letztes Heimspiel ein wahres TOPSPIEL",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779587002"
      },
      {
        "title": "Rote Raben bleiben an der Spitze",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779575849"
      },
      {
        "title": "Raben erwarten eine harte Aufgabe",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779560374"
      },
      {
        "title": "ESA VOLLEYS wollen die Roten Raben ärgern",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779559790"
      }
    ]
  },
  {
    "number": 3075,
    "matchId": 777353748,
    "weekday": "Sonntag",
    "date": "14.12.2025",
    "time": "15:00",
    "home": "BBSC Berlin",
    "away": "ESA Grimma Volleys",
    "score": "0:3",
    "ballPoints": "56:75",
    "sets": [
      "16:25",
      "19:25",
      "21:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/7aefcd0d-bee7-4f43-b235-3085be8df4a6/3075",
    "venue": "Sporthalle Hämmerlingstraße",
    "spectators": 130,
    "duration": 67,
    "mvps": [
      {
        "team": "BBSC Berlin",
        "name": "Annalena Grätz",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=9117"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sally Marie Marong",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=760900352"
      }
    ],
    "rankAfter": 8,
    "summary": [
      "Grimma setzte den personell geschwächten BBSC von Beginn an mit druckvollen Aufschlägen unter Druck. Nach klaren Erfolgen in den ersten beiden Sätzen drehte Marie Dreblow im dritten Durchgang mit einer starken Aufschlagserie eine Berliner 14:9-Führung; Grimma gewann 3:0."
    ],
    "videoUrl": "https://www.youtube.com/live/Fko7HalsI0U?si=h3V1IhMCCTT1mWeR",
    "articleLinks": [
      {
        "title": "BBSC am Doppelspieltag ohne Erfolg",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779707622"
      },
      {
        "title": "BBSC mit Doppelspieltag gegen Grimma",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779647825"
      }
    ]
  },
  {
    "number": 3008,
    "matchId": 777353343,
    "weekday": "Sonntag",
    "date": "21.12.2025",
    "time": "15:00",
    "home": "DSHS SnowTrex Köln",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:50",
    "sets": [
      "25:11",
      "25:22",
      "25:17"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/47ac148f-c13e-48b9-9e42-2d0156b8fa06/3008",
    "venue": "Deutsche Sporthochschule Köln, Halle 22",
    "spectators": 140,
    "duration": 68,
    "mvps": [
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Maike Brönhorst",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=760227625"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.dshs-snowtrex-koeln.de/sechspunkte-wochenende-fuer-koeln-dshs-snowtrex-koeln-verabschiedet-sich-positiv-in-die-feiertagspause/",
    "galleryUrl": "https://www.flickr.com/photos/88608964@N07/albums/72177720331316793",
    "videoUrl": "https://www.youtube.com/watch?v=VUeSA_cmOak",
    "summary": [
      "DSHS SnowTrex Köln gewann das Saisonspiel gegen ESA Grimma Volleys mit 3:0 nach Sätzen."
    ],
    "youtubeViews": 1043,
    "articleLinks": [
      {
        "title": "Sechspunkte-Wochenende für Köln",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779821588"
      },
      {
        "title": "Jahresausklang in Halle 22",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779775284"
      }
    ]
  },
  {
    "number": 3096,
    "matchId": 777353883,
    "weekday": "Samstag",
    "date": "10.01.2026",
    "time": "16:30",
    "home": "TV Planegg-Krailling",
    "away": "ESA Grimma Volleys",
    "score": "3:1",
    "ballPoints": "98:75",
    "sets": [
      "23:25",
      "25:15",
      "25:16",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/cbd963b8-cf8c-4ffd-abbb-bdcb3295dc33/3096",
    "venue": "BMW Park",
    "spectators": 236,
    "duration": 102,
    "mvps": [
      {
        "team": "TV Planegg-Krailling",
        "name": "Julia Ziegler",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Marie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780013849",
    "summary": [
      "Der TV Planegg-Krailling hat sich im Heimspiel gegen die ESA Grimma Volleys mit einem verdienten 3:1-Erfolg durchgesetzt und damit wichtige Punkte in der 2. Bundesliga Pro gesammelt."
    ],
    "videoUrl": "https://www.youtube.com/live/mQLVg7K8GK0?si=ULImqzRO606LylAF",
    "youtubeViews": 1556,
    "articleLinks": [
      {
        "title": "TVP besiegt die ESA Grimma Volleys mit 3:1",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780013849"
      },
      {
        "title": "Volleyball-Abend zum Jahresauftakt",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779968820"
      }
    ]
  },
  {
    "number": 3087,
    "matchId": 777353828,
    "weekday": "Sonntag",
    "date": "11.01.2026",
    "time": "15:00",
    "home": "NawaRo Straubing",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:59",
    "sets": [
      "25:22",
      "25:16",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/59f25bf9-1bde-4131-9b34-61fa9ca6d7d7/3087",
    "venue": "turmair Volleyballarena",
    "spectators": 350,
    "duration": 75,
    "mvps": [
      {
        "team": "NawaRo Straubing",
        "name": "Maia Rackel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Marie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787"
      }
    ],
    "rankAfter": 10,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780018188",
    "summary": [
      "NawaRo Straubing macht mit einem 3:0-Heimsieg über Grimma (25:22 25:16 25:21) das erste Sechs-Punkte-Wochenende 2026 eindrucksvoll perfekt."
    ],
    "videoUrl": "https://www.youtube.com/live/ZjQ4oANHm3k?si=leIJCZLYJyTAteJd",
    "youtubeViews": 1381,
    "articleLinks": [
      {
        "title": "6-Punkte-Wochenende!",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780018188"
      },
      {
        "title": "Spiel zwei am Wochenende",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780010143"
      }
    ]
  },
  {
    "number": 3099,
    "matchId": 777353902,
    "weekday": "Sonntag",
    "date": "18.01.2026",
    "time": "15:00",
    "home": "ESA Grimma Volleys",
    "away": "DSHS SnowTrex Köln",
    "score": "1:3",
    "ballPoints": "87:95",
    "sets": [
      "18:25",
      "22:25",
      "25:20",
      "22:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/42a28a15-03cc-4b62-8c93-c9a230196f49/3099",
    "venue": "Muldentalhalle",
    "spectators": 295,
    "duration": 97,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      },
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Annika Stenchly",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721"
      }
    ],
    "rankAfter": 10,
    "articleUrl": "https://www.dshs-snowtrex-koeln.de/ein-sechs-punkte-wochenende-in-sachsen-fuer-dshs-snowtrex-koeln/",
    "videoUrl": "https://www.youtube.com/watch?v=AzUDGRhbIdM",
    "summary": [
      "DSHS SnowTrex Köln gewann das Saisonspiel gegen ESA Grimma Volleys mit 1:3 nach Sätzen."
    ],
    "youtubeViews": 982,
    "articleLinks": [
      {
        "title": "Köln krönt Doppelspieltag mit Auswärtssieg",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780112565"
      },
      {
        "title": "ESA VOLLEYS mit leeren Händen im 1.Heimspi",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780110636"
      },
      {
        "title": "Köln will Serie ausbauen",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780089558"
      },
      {
        "title": "ESA VOLLEYS wollen zurück in Erfolgsspur",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780086824"
      }
    ]
  },
  {
    "number": 3110,
    "matchId": 777353969,
    "weekday": "Sonntag",
    "date": "25.01.2026",
    "time": "15:00",
    "home": "TV Dingolfing",
    "away": "ESA Grimma Volleys",
    "score": "1:3",
    "ballPoints": "79:95",
    "sets": [
      "23:25",
      "15:25",
      "25:20",
      "16:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/fde97f34-5ac2-40ad-9928-70fd9a215d19/3110",
    "venue": "Sporthalle Höll-Ost",
    "spectators": 121,
    "duration": 91,
    "mvps": [
      {
        "team": "TV Dingolfing",
        "name": "Franziska Koob",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Meghan Barthel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=22354682"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Grimma gewann in Dingolfing die ersten beiden Sätze mit 25:23 und 25:15. Die Gastgeberinnen verkürzten im dritten Durchgang, doch Grimma antwortete mit einem klaren 25:16 und nahm beim 3:1 alle drei Punkte mit."
    ],
    "videoUrl": "https://www.youtube.com/live/qooeCazf1Qs?si=lcMMAqbYm03Ce2S9",
    "articleLinks": []
  },
  {
    "number": 3118,
    "matchId": 777354012,
    "weekday": "Samstag",
    "date": "31.01.2026",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "TV Hörde",
    "score": "3:2",
    "ballPoints": "111:98",
    "sets": [
      "21:25",
      "25:18",
      "25:27",
      "25:18",
      "15:10"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/173840af-7f2e-404c-909a-1d772f8520d3/3118",
    "venue": "Muldentalhalle",
    "spectators": 295,
    "duration": 119,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      },
      {
        "team": "TV Hörde",
        "name": "Samanta Gega",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=770792672"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Trotz vier krankheitsbedingter Ausfälle und vieler Abstimmungsfehler rang Grimma den TV Hörde vor knapp 300 Zuschauern mit 3:2 nieder. Nach wechselhaftem Verlauf übernahm Grimma im vierten Satz wieder die Kontrolle und gewann den Tie-Break mit 15:10."
    ],
    "videoUrl": "https://www.youtube.com/live/8V3OZuF_rvQ?si=Te0sLHyg5FZiHxCY",
    "articleLinks": [
      {
        "title": "5 Sätze, 3 Spielunterbrechungen & 1 Punkt",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780302262"
      },
      {
        "title": "ESA VOLLEYS stolpern fast über Hörde",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780281075"
      },
      {
        "title": "Zwei Chancen für Hörde",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780253632"
      },
      {
        "title": "ESA VOLLEYS empfangen den TV Hörde",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780253556"
      }
    ]
  },
  {
    "number": 3120,
    "matchId": 777354031,
    "weekday": "Samstag",
    "date": "07.02.2026",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "TV Waldgirmes",
    "score": "3:0",
    "ballPoints": "79:60",
    "sets": [
      "29:27",
      "25:19",
      "25:14"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/4ed1c414-184d-412d-bc11-023907c3f536/3120",
    "venue": "Muldentalhalle",
    "spectators": 270,
    "duration": 74,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      },
      {
        "team": "TV Waldgirmes",
        "name": "Leonie Amann",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780378303",
    "summary": [
      "Der erste Satz in Grimma war bis in die Verlängerung völlig offen, ging aber mit 29:27 an die Gastgeberinnen. Dieser Rückschlag zeigte Wirkung: Grimma spielte anschließend druckvoll und nahezu fehlerfrei und vollendete mit 25:19 und 25:14 die Revanche für das Hinspiel."
    ],
    "videoUrl": "https://www.youtube.com/live/S1UCFiaGQvI?si=qAO7_vGTLljll5P9",
    "youtubeViews": 888,
    "articleLinks": [
      {
        "title": "Klarer 3:0 Heimsieg der ESA VOLLEYS",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780378303"
      },
      {
        "title": "DUELL auf AUGENHÖHE",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780354994"
      }
    ]
  },
  {
    "number": 3131,
    "matchId": 777354092,
    "weekday": "Samstag",
    "date": "14.02.2026",
    "time": "16:00",
    "home": "Eintracht Spontent Düsseldorf",
    "away": "ESA Grimma Volleys",
    "score": "2:3",
    "ballPoints": "99:97",
    "sets": [
      "20:25",
      "25:17",
      "25:15",
      "20:25",
      "9:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/d2ac2149-ae88-4ee5-b49c-aa1555a79f7a/3131",
    "venue": "DH Brinckmannstraße, Hulda Pankok",
    "spectators": 105,
    "duration": 98,
    "mvps": [
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Carlotta Strube",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      }
    ],
    "rankAfter": 8,
    "videoUrl": "https://www.youtube.com/watch?v=hQWUKAPwC5s",
    "summary": [
      "Grimma entschied in Düsseldorf einen wechselhaften Fünf-Satz-Krimi für sich. Nach zweimaligem Satzrückstand erzwangen die Gäste mit 25:20 den Tie-Break und dominierten den Entscheidungsdurchgang mit 15:9."
    ],
    "youtubeViews": 5284,
    "articleLinks": []
  },
  {
    "number": 3136,
    "matchId": 777354129,
    "weekday": "Samstag",
    "date": "21.02.2026",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "BayerVolleys Leverkusen",
    "score": "1:3",
    "ballPoints": "85:94",
    "sets": [
      "25:17",
      "18:25",
      "25:27",
      "17:25"
    ],
    "statsUrl": null,
    "venue": "Muldentalhalle",
    "spectators": 0,
    "duration": 94,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Meghan Barthel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=22354682"
      },
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Marian Mischo",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780558172",
    "videoUrl": "https://www.youtube.com/watch?v=5_j-zFHVGaI&t=208",
    "summary": [
      "BayerVolleys Leverkusen gewann das Saisonspiel gegen ESA Grimma Volleys mit 1:3 nach Sätzen."
    ],
    "youtubeViews": 1011,
    "articleLinks": [
      {
        "title": "ESA VOLLEYS unterliegen Leverkusen mit 1:3",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780558172"
      },
      {
        "title": "Volleys gehen auf Tour in den Osten",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780541716"
      },
      {
        "title": "ESA VOLLEYS empfangen LEVERKUSEN",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780534617"
      }
    ]
  },
  {
    "number": 3145,
    "matchId": 777354178,
    "weekday": "Samstag",
    "date": "07.03.2026",
    "time": "18:00",
    "home": "VfL Oythe",
    "away": "ESA Grimma Volleys",
    "score": "3:1",
    "ballPoints": "97:83",
    "sets": [
      "25:14",
      "25:21",
      "22:25",
      "25:23"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ac36f221-1ded-41e7-871a-a75bc301d5f4/3145",
    "venue": "SH Gymnasium Antonianum Vechta",
    "spectators": 150,
    "duration": 91,
    "mvps": [
      {
        "team": "VfL Oythe",
        "name": "Georgia McGovern",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sally Marie Marong",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=760900352"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780729469",
    "summary": [
      "Der VfL Oythe ist seiner Favoritenrolle im Heimspiel gegen die ESA Grimma Volleys gerecht geworden, musste sich den Sieg jedoch hart erarbeiten. Vor allem die Gäste aus Grimma zeigten eine starke Leis"
    ],
    "videoUrl": "https://www.youtube.com/live/I0HrVjTPQ78?si=AnhffU1iMZA2w-BN",
    "youtubeViews": 1116,
    "articleLinks": [
      {
        "title": "VfL Oythe erfüllt Favoritenrolle",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780729469"
      },
      {
        "title": "VfL Oythe empfängt ESA Grimma",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780662404"
      }
    ]
  },
  {
    "number": 3154,
    "matchId": 777354239,
    "weekday": "Sonntag",
    "date": "15.03.2026",
    "time": "16:00",
    "home": "ESA Grimma Volleys",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:0",
    "ballPoints": "75:49",
    "sets": [
      "25:11",
      "25:23",
      "25:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/86cd92a5-0ab5-47cf-a65b-9d8d016f05d8/3154",
    "venue": "Muldentalhalle",
    "spectators": 512,
    "duration": 65,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Vor der Saisonrekordkulisse von 512 Zuschauern dominierte Grimma das Derby gegen Markkleeberg. Nach dem klaren 25:11 wehrten die Gastgeberinnen im zweiten Satz die Aufholjagd bis zum 25:23 ab und vollendeten den 3:0-Erfolg mit 25:15."
    ],
    "videoUrl": "https://www.youtube.com/live/aKxaoBMTtfc?si=9w6wLPjvghgWSUBc",
    "articleLinks": [
      {
        "title": "Revanche im Derby-Rückspiel nicht geglückt",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780833460"
      },
      {
        "title": "ESA GRIMMA zum 2. Mal DERBYSIEGER",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780826774"
      },
      {
        "title": "DAS DERBY, GRIMMA empfängt Markkleeberg",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780797330"
      },
      {
        "title": "„Landkreis-Derby“- in der Muldentalhalle",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780795852"
      }
    ]
  },
  {
    "number": 3191,
    "matchId": 777354460,
    "weekday": "Sonntag",
    "date": "22.03.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:51",
    "sets": [
      "25:12",
      "25:18",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b24ebf2d-b93b-4c2e-b159-b8ae07e00bc3/3191",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 182,
    "duration": 66,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780944030",
    "summary": [
      "Trotz sieben Abstellungen für einen Nationalmannschaftslehrgang trat Dresden im Sachsenderby geschlossen auf. Nach dem klaren 25:12 kontrollierte der VCO auch den zweiten Satz und entschied den engeren dritten Durchgang mit einem Block zum 25:21."
    ],
    "videoUrl": "https://www.youtube.com/live/fcH49xt8wx4?si=MqOKyr1z__rsoxUd",
    "youtubeViews": 1227,
    "articleLinks": [
      {
        "title": "Dresden – Leuchtturm der Eliteausbildung",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781028795"
      },
      {
        "title": "VCO Dresden gewinnt 3:0 gegen ESA Grimma",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780944030"
      },
      {
        "title": "Sachsenderby",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780890062"
      }
    ]
  },
  {
    "number": 3159,
    "matchId": 777354264,
    "weekday": "Samstag",
    "date": "28.03.2026",
    "time": "19:00",
    "home": "Rote Raben Vilsbiburg",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:51",
    "sets": [
      "25:16",
      "25:15",
      "25:20"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/c6397b86-f4bc-4700-bd96-02dc9b5c7599/3159",
    "venue": "Ballsporthalle Vilsbiburg",
    "spectators": 1467,
    "duration": 58,
    "mvps": [
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Tina De Groot",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sydney Moore",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=778381936"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780995486",
    "summary": [
      "Mit einem überzeugenden 3:0-Erfolg gegen Grimma sind die Roten Raben nicht mehr einzuholen. Damit haben sie sich bereits vier Spieltage vor dem Ende der Saison den Meistertitel."
    ],
    "videoUrl": "https://www.youtube.com/live/mqbgCeE5SVM?si=F4V7Rt1GN2AyZ86E",
    "youtubeViews": 2278,
    "articleLinks": [
      {
        "title": "Rote Raben sichern sich vorzeitig Titel",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780995486"
      },
      {
        "title": "Erstes \"Endspiel\" für die Roten Raben",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780985198"
      }
    ]
  },
  {
    "number": 3166,
    "matchId": 777354313,
    "weekday": "Samstag",
    "date": "11.04.2026",
    "time": "18:00",
    "home": "ESA Grimma Volleys",
    "away": "BBSC Berlin",
    "score": "2:3",
    "ballPoints": "103:109",
    "sets": [
      "25:20",
      "25:23",
      "21:25",
      "18:25",
      "14:16"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/76590242-fd94-47cd-a994-d6b526162b0f/3166",
    "venue": "Muldentalhalle",
    "spectators": 245,
    "duration": 108,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sandra Seyfferth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=6325"
      },
      {
        "team": "BBSC Berlin",
        "name": "Sarah Nur Kayadibi",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=769209866"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Grimma führte gegen Berlin bereits mit 2:0, verlor danach jedoch Sicherheit und Momentum. Der BBSC erhöhte den Aufschlagdruck, erzwang den Tie-Break und entschied den dramatischen fünften Satz nach einer Grimmaer Aufholjagd mit 16:14 für sich."
    ],
    "videoUrl": "https://www.youtube.com/live/DrK15_c7WGI?si=2NPQ-NwOiNJrsCUw",
    "articleLinks": [
      {
        "title": "BBSC Berlin dreht 0:2-Rückstand zum Sieg",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781154923"
      },
      {
        "title": "ESA VOLLEYS geben den Sieg aus der Hand",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781146048"
      },
      {
        "title": "ESA VOLLEYS empfangen den BBSC BERLIN",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781120896"
      }
    ]
  },
  {
    "number": 3173,
    "matchId": 777354356,
    "weekday": "Samstag",
    "date": "25.04.2026",
    "time": "17:00",
    "home": "Sparkassen Wildcats Stralsund",
    "away": "ESA Grimma Volleys",
    "score": "3:2",
    "ballPoints": "102:101",
    "sets": [
      "25:18",
      "25:23",
      "19:25",
      "18:25",
      "15:10"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b29cd9df-3abb-48cc-9ad2-2de1308eccfe/3173",
    "venue": "Diesterweg-Sporthalle",
    "spectators": 607,
    "duration": 109,
    "mvps": [
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Amelie Grawert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=70817295"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Marie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Stralsund gewann vor mehr als 600 Zuschauern die ersten beiden Sätze, ehe Grimma das Spiel mit 25:19 und 25:18 ausglich. Im Tie-Break brachte eine Aufschlagserie von Junora Vagele die Wildcats entscheidend mit 9:3 in Führung; Stralsund gewann 15:10."
    ],
    "videoUrl": "https://www.youtube.com/live/1NBHifJzX_c?si=1fYfWqHzcXutA_DN",
    "articleLinks": [
      {
        "title": "Sieg im letzten Heimspiel",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781306846"
      },
      {
        "title": "Über 600 Zuschauer erwartet",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781272421"
      }
    ]
  },
  {
    "number": 3178,
    "matchId": 777354387,
    "weekday": "Samstag",
    "date": "02.05.2026",
    "time": "19:00",
    "home": "ESA Grimma Volleys",
    "away": "NawaRo Straubing",
    "score": "1:3",
    "ballPoints": "79:99",
    "sets": [
      "24:26",
      "25:23",
      "15:25",
      "15:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/6d67145b-5c53-4d6f-8b3e-33b29bd7f543/3178",
    "venue": "Muldentalhalle",
    "spectators": 338,
    "duration": 95,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      },
      {
        "team": "NawaRo Straubing",
        "name": "Paula Gürsching",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781373398",
    "summary": [
      "NawaRo Straubing hat mit einem 3:1-Auswärtserfolg in Grimma (26:24, 23:25, 25:15, 25:15) die Vizemeisterschaft der Sparda 2. Liga Pro fixiert."
    ],
    "videoUrl": "https://www.youtube.com/live/-iWMObGD6sY?si=1g3_W2e_RiDDMnpi",
    "youtubeViews": 1021,
    "articleLinks": [
      {
        "title": "Straubing ist Vizemeister!",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781373398"
      },
      {
        "title": "ESA VOLLEYS fehlte das Quäntchen Glück",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781371562"
      },
      {
        "title": "ESA Volleys empfangen Straubing",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781357358"
      },
      {
        "title": "Saisonfinale in Grimma.",
        "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781353668"
      }
    ]
  }
];

games.forEach((game) => {
  const views = youtubeViews[String(game.number)];
  if (Number.isFinite(views)) game.youtubeViews = views;
});
