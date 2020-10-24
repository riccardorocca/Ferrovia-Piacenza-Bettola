var config = {
    style: 'mapbox://styles/ricroc/ckgmeeprs0w7q19sdqs4hnr8r',
    accessToken: 'pk.eyJ1Ijoicmljcm9jIiwiYSI6ImNpanZyajMxYTBhdmZ0dG01bmVsbG8ybzcifQ.RdmNKeWGLY_fqRmUrM9m4w',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Ferrovia_Piacenza_Bettola',
            title: 'Ferrovia Piacenza-Bettola',
            image0: './images/01-Piacenza_Deposito-01.JPG',
            image2: './images/01-Piacenza_Deposito-02.JPG',
            description: 'La stazione della Lupa com´era',
            location: {
                center: [9.66772, 44.91901],
                zoom: 9.95,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Stazione_di_Piacenza',
            title: 'Stazione di Piacenza',
            image: './path/to/image/source.png',
            description: 'La stazione di Piacenza com´era',
            location: {
                center: [9.70704, 45.04938],
                zoom: 16.45,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Stazione_della_Lupa',
            title: 'Stazione della Lupa',
            image: './path/to/image/source.png',
            description: 'Lastazione della Lupa com´era',
            location: {
                center: [9.70549, 45.04634],
                zoom: 16.45,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
