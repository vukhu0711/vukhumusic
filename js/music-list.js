// Template

/*      {
        name: "",
        artist: "",
        img: "music-",
        id: "music-",
        src: "https://files.catbox.moe/",
        },
 */

let allGenres = [{
        genre: "Vinahouse",
        songs: [{
                name: "LamSung SCL NST #1",
                artist: "Lamsung026",
                img: "https://i.ibb.co/dwBvK94K/music-1.gif",
                id: "music-2",
                src: "https://files.catbox.moe/9fy2ex.mp3",
            },
            {
                name: "Chú Hề Chơi Đồ",
                artist: "Chill",
                img: "https://i.ibb.co/9HBN0M7V/music-3.gif",
                id: "music-3",
                src: "https://files.catbox.moe/gwxkal.mp3",
            },
            {
                name: "LamSung SCL NST #2",
                artist: "Lamsung026",
                img: "https://i.ibb.co/1fhTvqKC/music-4.gif",
                id: "music-4",
                src: "https://files.catbox.moe/2a0dun.mp3",
            },
            {
                name: "Gõ Gãy Người",
                artist: "CDAN",
                img: "https://i.ibb.co/67SRsvvW/music-5.gif",
                id: "music-5",
                src: "https://files.catbox.moe/qml7rz.mp3",
            }
        ]
    },
    {
        genre: "Vietmix",
        songs: [{
            name: "Infinity Music Vol 6",
            artist: "Ferrari",
            img: "https://i.ibb.co/hx7KZhcD/music-6.gif",
            id: "music-6",
            src: "https://files.catbox.moe/2a0dun.mp3",
        }]
    },
    {
        genre: "Track Lẻ",
        songs: [{
                name: "Đừng Ai Nhắc Về Cô Ấy",
                artist: "Future Mix",
                img: "https://i.ibb.co/KcYnNHth/music-2.gif",
                id: "music-7",
                src: "https://files.catbox.moe/xyx091.mp3",
            },
            {
                name: "Full Track",
                artist: "MACOL",
                img: "https://i.ibb.co/KcYnNHth/music-2.gif",
                id: "music-13",
                src: "https://files.catbox.moe/xyx091.mp3",
            }
        ]
    },
    {
        genre: "Nonstop",
        songs: [{
                name: "Vẽ Cảnh",
                artist: "VanhJB",
                img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGkwNWJmanExdmxyNXk5MTJmcmlzcW95NGQyd2s2aWQzZWoyNWZvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XcX3Ae8GSDWN1ciqqi/giphy.gif",
                id: "music-8",
                src: "https://files.catbox.moe/n9d4rv.mp3",
            },
            {
                name: "Bay Kem Mix",
                artist: "VanhJB",
                img: "https://i.ibb.co/placeholder2.gif",
                id: "music-9",
                src: "https://files.catbox.moe/nc8fbe.mp3",
            },
            {
                name: "2h Ketamin",
                artist: "Mix",
                img: "https://i.ibb.co/placeholder3.gif",
                id: "music-10",
                src: "https://files.catbox.moe/uru2ru.mp3",
            },
            {
                name: "Nonstop Love Songs",
                artist: "DJ Hoàng Anh",
                img: "https://i.ibb.co/placeholder4.gif",
                id: "music-11",
                src: "https://files.catbox.moe/sample4.mp3",
            },
            {
                name: "Nonstop Best Hits",
                artist: "DJ Quang Đăng",
                img: "https://i.ibb.co/placeholder5.gif",
                id: "music-12",
                src: "https://files.catbox.moe/sample5.mp3",
            }
        ]
    }
];

// Biến allMusic hiện tại sẽ được khởi tạo (tải) bằng thể loại đầu tiên
let allMusic = allGenres[0].songs;
