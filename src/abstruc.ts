// oop => abstraction

/**
 * interface
 * abstract class
 */

// idea
// interface MediaPlayer {
//   paly(): void;
//   pause(): void;
//   stop(): void;
// }


// implementation

// class MusicPlayer implements MediaPlayer{
//     paly(): void {
//         console.log('Play the music')
//     }
//     pause(): void {
//         console.log('Pause the music')
//     }
//     stop(): void {
//         console.log('Stop the music')
//     }
// }

// const musicPlayer = new MusicPlayer()
// musicPlayer.paly()



// with abstract class
abstract class MediaPlayer {
  abstract paly(): void;
  abstract pause(): void;
  abstract stop(): void;
}


class MusicPlayer extends MediaPlayer{
    paly(): void {
        console.log('Play the music')
    }
    pause(): void {
        console.log('Pause the music')
    }
    stop(): void {
        console.log('Stop the music')
    }
}

const myMusicPlayer = new MusicPlayer();
myMusicPlayer.pause()