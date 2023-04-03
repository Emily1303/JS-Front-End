function songs(array) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let numberOfSongs = array[0];
    let songsArray = [];

    let typeListKey = array[array.length - 1];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = array[i].split('_');
        let song = new Song(typeList, name, time);
        songsArray.push(song);
    }

    if (typeListKey === 'all') {
        songsArray.forEach(song => console.log(song.name));
    } else {
        songsArray.filter(song => song.typeList === typeListKey).forEach(song => console.log(song.name));
    }
}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);