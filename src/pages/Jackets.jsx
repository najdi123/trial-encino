import Lightbox from 'react-image-lightbox';
import React from 'react';
import './lightbox.css';

import pic1 from "../images/jacket/pic (1).jpg";
import pic2 from "../images/jacket/pic (2).jpg";
import pic3 from "../images/jacket/pic (3).jpg";
import pic4 from "../images/jacket/pic (4).jpg";
import pic5 from "../images/jacket/pic (5).jpg";
import pic6 from "../images/jacket/pic (6).jpg";
import pic7 from "../images/jacket/pic (7).jpg";
import pic8 from "../images/jacket/pic (8).jpg";
import pic9 from "../images/jacket/pic (9).jpg";
// import pic10 from "../images/jacket/pic (10).jpg";





const images = [amoodiB1, amoodiB2, amoodiB3 ,O1, O2, O3, amoodiB4, amoodiB5, amoodiB6, O4,O5,O6,amoodiB7, amoodiB8, amoodiB9,O7, O8,O9, amoodiB10, amoodiB11, amoodiB12,O10,O11,O12, amoodiB13, amoodiB14, amoodiB15,O13,O14,O15, amoodiB16, amoodiB17, amoodiB18,O16,O17, amoodiB19, amoodiB20, amoodiB21, amoodiB22, amoodiB23, amoodiB24, amoodiB25, amoodiB26, amoodiB27, amoodiB28,
    amoodiB29, amoodiB30, amoodiB31, amoodiB32, amoodiB33, amoodiB34, amoodiB35, amoodiB36, amoodiB37, amoodiB38, amoodiB39, amoodiB40, amoodiB41, amoodiB42, amoodiB43, amoodiB44, amoodiB45, amoodiB46, amoodiB47, amoodiB48,  amoodiB49, amoodiB50, amoodiB51, amoodiB52, amoodiB53, amoodiB54, amoodiB55, amoodiB56, amoodiB57, amoodiB58, amoodiB59, amoodiB60, amoodiB61, amoodiB62, amoodiB63, amoodiB64, amoodiB65, amoodiB66, amoodiB67, amoodiB68, amoodiB69];


class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div style={{backgroundColor: 'black'}}>


                {!isOpen &&
                <div className="image-display">

                    <img alt="lightbox" src={pic1} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img alt="lightbox" src={pic2} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img alt="lightbox" src={pic3} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />

                    <img alt="lightbox" src={Ofoghi1} className="thumbnail "  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
                    <img alt="lightbox" src={Ofoghi2} className="thumbnail "  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img alt="lightbox" src={Ofoghi3} className="thumbnail "  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />

                    <img alt="lightbox" src={pic4} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img alt="lightbox" src={pic5} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img alt="lightbox" src={pic6} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />

                    <img alt="lightbox" src={Ofoghi4} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img alt="lightbox" src={Ofoghi5} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img alt="lightbox" src={Ofoghi6} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />

                    <img alt="lightbox" src={pic7} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img alt="lightbox" src={pic8} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img alt="lightbox" src={pic9} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />

                    <img alt="lightbox" src={Ofoghi7} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />
                    <img alt="lightbox" src={Ofoghi8} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />
                    <img alt="lightbox" src={Ofoghi9} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />

                    <img alt="lightbox" src={pic10} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img alt="lightbox" src={pic11} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img alt="lightbox" src={pic12} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />

                    <img alt="lightbox" src={Ofoghi10} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img alt="lightbox" src={Ofoghi11} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img alt="lightbox" src={Ofoghi12} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />

                    <img alt="lightbox" src={pic13} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />
                    <img alt="lightbox" src={pic14} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />
                    <img alt="lightbox" src={pic15} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:26 })} />

                    <img alt="lightbox" src={Ofoghi13} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:27 })} />
                    <img alt="lightbox" src={Ofoghi14} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:28 })} />
                    <img alt="lightbox" src={Ofoghi15} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:29 })} />

                    <img alt="lightbox" src={pic16} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:30 })} />
                    <img alt="lightbox" src={pic17} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:31 })} />
                    <img alt="lightbox" src={pic18} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:32 })} />

                    <img alt="lightbox" src={Ofoghi16} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:33 })} />
                    <img alt="lightbox" src={Ofoghi17} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:34 })} />


                    <img alt="lightbox" src={pic19} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:35 })} />
                    <img alt="lightbox" src={pic20} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:36 })} />
                    <img alt="lightbox" src={pic21} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:37 })} />
                    <img alt="lightbox" src={pic22} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:38 })} />
                    <img alt="lightbox" src={pic23} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:39 })} />
                    <img alt="lightbox" src={pic24} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:40 })} />
                    <img alt="lightbox" src={pic25} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:41 })} />
                    <img alt="lightbox" src={pic26} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:42 })} />
                    <img alt="lightbox" src={pic27} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:43 })} />
                    <img alt="lightbox" src={pic28} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:44 })} />
                    <img alt="lightbox" src={pic29} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:45 })} />
                    <img alt="lightbox" src={pic30} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:46 })} />
                    <img alt="lightbox" src={pic31} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:47 })} />
                    <img alt="lightbox" src={pic32} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:48 })} />
                    <img alt="lightbox" src={pic33} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:49 })} />
                    <img alt="lightbox" src={pic34} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:50 })} />
                    <img alt="lightbox" src={pic35} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:51 })} />
                    <img alt="lightbox" src={pic36} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:52 })} />
                    <img alt="lightbox" src={pic37} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:53 })} />
                    <img alt="lightbox" src={pic38} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:54 })} />
                    <img alt="lightbox" src={pic39} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:55 })} />
                    <img alt="lightbox" src={pic40} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:56 })} />
                    <img alt="lightbox" src={pic41} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:57 })} />
                    <img alt="lightbox" src={pic42} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:58 })} />
                    <img alt="lightbox" src={pic43} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:59 })} />
                    <img alt="lightbox" src={pic44} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:60 })} />
                    <img alt="lightbox" src={pic45} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:61 })} />
                    <img alt="lightbox" src={pic46} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:62 })} />
                    <img alt="lightbox" src={pic47} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:63 })} />
                    <img alt="lightbox" src={pic48} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:64 })} />
                    <img alt="lightbox" src={pic49} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:65 })} />
                    <img alt="lightbox" src={pic50} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:66 })} />
                    <img alt="lightbox" src={pic51} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:67 })} />
                    <img alt="lightbox" src={pic52} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:68 })} />
                    <img alt="lightbox" src={pic53} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:69 })} />
                    <img alt="lightbox" src={pic54} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:70 })} />
                    <img alt="lightbox" src={pic55} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:71 })} />
                    <img alt="lightbox" src={pic56} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:72 })} />
                    <img alt="lightbox" src={pic57} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:73 })} />
                    <img alt="lightbox" src={pic58} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:74 })} />
                    <img alt="lightbox" src={pic59} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:75 })} />
                    <img alt="lightbox" src={pic60} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:76 })} />
                    <img alt="lightbox" src={pic61} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:77 })} />
                    <img alt="lightbox" src={pic62} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:78 })} />
                    <img alt="lightbox" src={pic63} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:79 })} />
                    <img alt="lightbox" src={pic64} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:80 })} />
                    <img alt="lightbox" src={pic65} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:81 })} />
                    <img alt="lightbox" src={pic66} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:82 })} />
                    <img alt="lightbox" src={pic67} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:83 })} />
                    <img alt="lightbox" src={pic68} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:84 })} />
                    <img alt="lightbox" src={pic69} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:85 })} />



                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;