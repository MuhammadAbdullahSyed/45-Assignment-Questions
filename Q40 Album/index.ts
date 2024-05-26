//Album: Write a function called make_album() that builds a Object describing a music album. The function should take
//in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. Print each return value to show that 
//Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to 
//store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that
// value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

let makeAlbum = (artist:string, tile:string, track?:number ) => {
    let album = {
        artist: artist,
        title: tile,
        track: track     
    }
    return album
}
console.log(makeAlbum ("artist A", "Album 1"))
console.log(makeAlbum ("artist B", "Album 2"))
console.log(makeAlbum ("artist C", "Album 3", 4))