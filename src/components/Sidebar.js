import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
    <ul>
    <h1  className="font-bold pt-2 flex items-center	"><img className="mr-2" height="20px" width="20px" src="https://e7.pngegg.com/pngimages/876/266/png-clipart-youtube-computer-icons-logo-youtube-logo-desktop-wallpaper.png"/><Link to="/">Home</Link></h1>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://t3.ftcdn.net/jpg/00/59/80/64/360_F_59806468_spBtUb6zwnqTrmpKTcIGuyegBgP1uXac.jpg"/>
          <Link to="/demo">Demo</Link>
        </li>
    <h1 className="font-bold pt-2 flex item-center"><img className="mr-2" height="20px" width="20px" src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"/>Shorts</h1>

    <h1 className="font-bold pt-2 flex item-center"><img className="mr-2" height="20px" width="20px" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"/>Subscription</h1>

    <h1 className="font-bold pt-2 flex item-center"><img className="mr-2" height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/512/7249/7249489.png"/>Library</h1>

    <h1 className="font-bold pt-2 flex item-center"><img className="mr-2" height="20px" width="20px" src="https://e7.pngegg.com/pngimages/919/667/png-clipart-computer-icons-icon-design-youtube-history-youtube-blue-angle.png"/>History</h1>
    
    <h1 className="font-bold pt-5">Explore</h1>
    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/512/1710/1710130.png"/>Trending</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://e7.pngegg.com/pngimages/241/287/png-clipart-shopping-cart-icon-cart-pic-orange-world-thumbnail.png"/>Shopping</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://seeklogo.com/images/Y/youtube-live-logo-43F98BDB4C-seeklogo.com.png"/>Live</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://cdn.icon-icons.com/icons2/2657/PNG/256/youtube_music_icon_161084.png"/>Music</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://w7.pngwing.com/pngs/790/844/png-transparent-computer-icons-movieclips-video-clip-youtube-film-youtube-text-rectangle-logo.png"/>Movies</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png"/>Gaming</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://w7.pngwing.com/pngs/201/665/png-transparent-computer-icons-youtube-competition-organization-sports-competition-game-logo-plan-thumbnail.png"/>Sports</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://p2.hiclipart.com/preview/664/222/464/exam-icon-education-icon-college-level-examination-program-test-study-skills-youtube-business-youtuber-png-clipart.png"/>Learning</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://static.wikia.nocookie.net/youtube/images/5/55/News.jpg/revision/latest/thumbnail/width/360/height/360?cb=20201105155525"/>News</li>

    <li className="flex item-center"><img className="mr-2" height="20px" width="20px" src="https://yt3.googleusercontent.com/QuLBjsA8gLefcCMGdv9W-DAYDglYw8G79nMAp4vb9gMjA84SM3qMpjcrRHJTpuW-i7XwtNeasA=s900-c-k-c0x00ffffff-no-rj"/>Fashion and Beauty</li>
</ul>
    
    
    </div>
  )
}

export default Sidebar