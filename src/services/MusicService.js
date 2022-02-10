var MusicService = {
    AlbumData : require('@/assets/datas/AlbumData.json'),
    ArtistData : require('@/assets/datas/ArtistData.json'),
           
    getAlbumList : function({keyword="",sort=""}){
        const list = [];
        this.AlbumData.list.forEach(album => {
            this.ArtistData.list.forEach(artist=>{
                if(album.artistCode == artist.code){
                    album.artist = artist;
                    return;
                }
            });
            if(album.title.includes(keyword) || album.artist.name.includes(keyword) || album.title.includes(keyword) ){
                list.push(album);
            }
            if(sort != ""){
                if(sort == '0'){
                    list.sort((a,b)=>{
                        if(a.release < b.release) return -1;
                        if(a.release > b.release) return 1;
                        return 0;
                    })
                }
            }
        });
        return list;
    }
}

export default MusicService;