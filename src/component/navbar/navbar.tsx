import React from 'react' 
import "./navbar.scss";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar"> 
      <div className="logo">
          <svg width="145" height="28" viewBox="0 0 145 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.22118C0 1.76087 0.369365 1.38771 0.825 1.38771H3.3C3.75563 1.38771 4.125 1.76087 4.125 2.22118V17.2235C4.125 17.6838 4.49437 18.057 4.95 18.057H15.675C16.1306 18.057 16.5 17.6838 16.5 17.2235V14.7231C16.5 14.2628 16.1306 13.8897 15.675 13.8897H10.725C9.3581 13.8897 8.25 12.7702 8.25 11.3893V3.8881C8.25 2.50718 9.3581 1.38771 10.725 1.38771H18.15C19.5169 1.38771 20.625 2.50718 20.625 3.8881V19.7239C20.625 21.1049 19.5169 22.2243 18.15 22.2243H2.475C1.1081 22.2243 0 21.1049 0 19.7239V2.22118ZM16.5 6.3885C16.5 5.92819 16.1306 5.55503 15.675 5.55503H12.375V8.88889C12.375 9.3492 12.7444 9.72236 13.2 9.72236H16.5V6.3885Z" fill="url(#paint0_linear_29113_21)"/>
            <path d="M29.4375 0V23.1713H33.4078V0H29.4375Z" fill="#213F7D"/>
            <path d="M52.9489 16.442C53.5724 9.71271 50.1927 6.33149 44.7786 6.33149C39.5286 6.33149 36.1818 9.9116 36.1818 14.884C36.1818 20.1215 39.4958 23.6022 45.0739 23.6022C47.5349 23.6022 50.3239 22.7403 52.0302 20.9503L49.4708 18.3978C48.5521 19.3591 46.6161 19.9227 45.1396 19.9227C42.3177 19.9227 40.5786 18.4641 40.3161 16.442H52.9489ZM40.3817 13.0939C40.9724 10.9724 42.7443 9.9116 44.9099 9.9116C47.2068 9.9116 48.8474 10.9724 49.1099 13.0939H40.3817Z" fill="#213F7D"/>
            <path d="M71.9476 23.1713V14.5856C71.9476 9.44751 68.8961 6.56354 65.0898 6.56354C63.0554 6.56354 61.4148 7.39227 59.7742 9.01658L59.5117 6.79558H55.9351V23.1713H59.9054V14.8177C59.9054 12.3315 61.5789 10.2431 64.0398 10.2431C66.5992 10.2431 67.9445 12.1326 67.9445 14.6188V23.1713H71.9476Z" fill="#213F7D"/>
            <path d="M83.23 10.2099C85.7566 10.2099 87.9222 12.1326 87.9222 14.9834C87.9222 17.9337 85.7566 19.7901 83.23 19.7901C80.6706 19.7901 78.6363 17.8343 78.6363 14.9834C78.6363 12.0331 80.6706 10.2099 83.23 10.2099ZM88.1847 0V9.04972C87.2331 7.35912 84.5753 6.43094 82.8691 6.43094C78.1441 6.43094 74.6331 9.34807 74.6331 14.9834C74.6331 20.3536 78.2097 23.5359 82.9675 23.5359C84.9363 23.5359 86.9378 22.8729 88.1847 20.9171L88.4472 23.1713H92.1878V0H88.1847Z" fill="#213F7D"/>
            <path d="M108.468 8.51934C106.598 6.86188 104.695 6.36464 102.168 6.36464C99.2151 6.36464 95.3432 7.69061 95.3432 11.4696C95.3432 15.1823 98.9854 16.3094 102.037 16.5414C104.334 16.674 105.253 17.1381 105.253 18.2652C105.253 19.4586 103.842 20.2541 102.332 20.221C100.528 20.1878 97.9026 19.2265 96.7541 17.9337L94.7854 20.8177C97.1479 23.3039 99.7073 23.7348 102.267 23.7348C106.893 23.7348 109.223 21.2486 109.223 18.3646C109.223 14.0221 105.351 13.326 102.299 13.1271C100.232 12.9945 99.2807 12.3978 99.2807 11.337C99.2807 10.3094 100.331 9.71271 102.234 9.71271C103.776 9.71271 105.089 10.0773 106.237 11.1713L108.468 8.51934Z" fill="#213F7D"/>
            <path d="M119.599 19.6575C116.875 19.6575 115.005 17.5691 115.005 15.0166C115.005 12.4641 116.711 10.3757 119.599 10.3757C122.486 10.3757 124.192 12.4641 124.192 15.0166C124.192 17.5691 122.322 19.6575 119.599 19.6575ZM128.556 30V6.82873H124.816L124.553 9.08287C123.306 7.25967 121.141 6.46409 119.303 6.46409C114.316 6.46409 111.002 10.2099 111.002 15.0166C111.002 19.7901 113.988 23.5691 119.172 23.5691C120.878 23.5691 123.405 23.0387 124.553 21.2486V30H128.556Z" fill="#213F7D"/>
            <path d="M132.073 6.82873V23.1713H136.076V14.5525C136.076 11.5359 138.012 10.4088 140.112 10.4088C141.424 10.4088 142.179 10.7735 142.999 11.4696L144.804 7.9558C143.918 7.06077 142.31 6.39779 140.637 6.39779C138.996 6.39779 137.323 6.69613 136.076 8.71823L135.781 6.82873H132.073Z" fill="#213F7D"/>
            <defs>
            <linearGradient id="paint0_linear_29113_21" x1="-1.55986e-06" y1="32.4343" x2="21.8776" y2="-3.51985" gradientUnits="userSpaceOnUse">
            <stop stop-color="#213F7D"/>
            <stop offset="1" stop-color="#39CDCC"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
    <div className="wrapper">
     
      <div className="search">
        <input type="text" placeholder="Search for anything" required />
        <button className="">
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z" fill="white"/>
          </svg>
        </button>
      </div>
  
      <div className="items">
        <div className="item">
          Docs
        </div>
      
        <div className="item">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M19.7001 13.691C19.718 16.5176 20.8517 19.2235 22.8584 21.2183C23.0327 21.3912 23.0856 21.6531 22.9916 21.8804L22.9912 21.8815C22.8964 22.107 22.676 22.2561 22.4284 22.2549M19.7001 13.691L22.429 22.0549M19.7001 13.691V13.5968V11.6642C19.7176 10.1275 19.2154 8.63071 18.275 7.41524C17.3984 6.28217 16.1892 5.45625 14.821 5.05095C15.2642 4.42355 15.3572 3.60324 15.0487 2.88438L15.0486 2.88426C14.6962 2.06444 13.8907 1.53333 12.9982 1.53333C12.1057 1.53333 11.3002 2.06444 10.9477 2.88426L10.9477 2.88438C10.6397 3.60199 10.7318 4.42065 11.173 5.04761C9.82501 5.42985 8.62769 6.22584 7.75338 7.32787C6.81219 8.51196 6.30025 9.97972 6.30025 11.4925L6.30025 13.5968L6.30025 13.5973C6.30723 16.4577 5.17067 19.2014 3.14185 21.2182C2.96751 21.3911 2.91458 21.6531 3.00854 21.8804L3.00898 21.8814C3.10373 22.107 3.32419 22.2561 3.57172 22.2549M19.7001 13.691L10.0221 22.2549M22.4284 22.2549C22.4282 22.2549 22.428 22.2549 22.4278 22.2549L22.429 22.0549M22.4284 22.2549H22.429V22.0549M22.4284 22.2549H15.9781M22.429 22.0549H15.8112M15.9781 22.2549C15.9899 22.1989 16.0002 22.1422 16.0089 22.085L15.8112 22.0549M15.9781 22.2549C15.6832 23.6549 14.4456 24.67 13.0001 24.67C11.5546 24.67 10.3171 23.6549 10.0221 22.2549M15.9781 22.2549H15.8112V22.0549M15.8112 22.0549L10.0221 22.2549M10.0221 22.2549H10.189V22.0549L9.99125 22.0851C9.99999 22.1423 10.0103 22.1989 10.0221 22.2549ZM10.0221 22.2549H3.57172M3.57172 22.2549C3.57195 22.2549 3.57218 22.2549 3.57241 22.2549L3.57118 22.0549V22.2549H3.57172ZM14.7285 22.2549C14.4747 22.9799 13.7867 23.4798 13.0001 23.4799H13C12.2133 23.4798 11.5254 22.9799 11.2716 22.2549H14.7285ZM7.51233 11.4924L7.51233 11.4921C7.51037 9.98893 8.12478 8.55137 9.21241 7.51489L9.21249 7.51481C10.2998 6.47745 11.7643 5.93259 13.2651 6.00474C14.6959 6.09328 16.0376 6.73143 17.0099 7.78408L17.0099 7.78409C17.9834 8.83803 18.5119 10.2253 18.4874 11.6596H18.4873V11.663L18.4873 13.5961C18.4873 13.5962 18.4873 13.5963 18.4873 13.5964C18.4786 16.3045 19.3943 18.9297 21.0743 21.0424H4.92542C6.60545 18.9296 7.52131 16.3045 7.51233 13.5964L7.51233 11.4924ZM13.0001 2.75485C13.4118 2.75485 13.7837 3.00273 13.9416 3.38386C14.0986 3.76422 14.0121 4.20229 13.7209 4.49444C13.4288 4.78554 12.9908 4.87212 12.6105 4.71515C12.2293 4.55724 11.9813 4.18537 11.9813 3.7736C11.9813 3.21071 12.4372 2.75485 13.0001 2.75485Z" fill="#213F7D" stroke="#213F7D" stroke-width="0.4"/>
        </svg>
        </div>

        <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
          <span className="">Adedeji</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z" fill="#213F7D"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar;