import React, { useEffect, useRef, useState } from "react";
import "./moreAbout.css";
import video from "/src/assets/video.mp4";
import { FaRegPlayCircle } from "react-icons/fa";

const MoreAbout = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        setShowPlayButton(false);
    };
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                }
            });
        }, options);

        observer.observe(videoRef.current);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="more_about-page">
                <div className="container position-relative">
                    <div className="heading-container">
                        <p className="section-heading text-center">About Us</p>
                        <p className="text-heading text-center pt-150">
                            We are a modern website building agency that can scale as your
                            business grow.
                        </p>
                        <p className="text-body text-center pt-20">
                            Createch IT Solutions offers a variety of website design and
                            development services, from creating mobile web development
                            solutions and responsive website designs, to building custom
                            e-commerce and intranet experiences using the latest and proven
                            web technologies.
                        </p>
                    </div>

                    <div className="video-container position-relative">
                        <video
                            src={video}
                            className="w-100"
                            muted
                            ref={videoRef}
                            onClick={togglePlay}
                            onPause={() => {
                                setIsPlaying(false);
                                setShowPlayButton(true);
                            }}
                            onPlay={() => {
                                setIsPlaying(true);
                                setShowPlayButton(false);
                            }}
                            onEnded={() => {
                                setIsPlaying(false);
                                setShowPlayButton(true);
                            }}
                        />
                        {showPlayButton && (
                            <div className="play-pause-button" onClick={togglePlay}>
                                <FaRegPlayCircle />
                            </div>
                        )}
                    </div>

                    <div className="desc-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="text-body text-justify">
                                    Lorem ipsum dolor sit amet consectetur. Arcu nec nulla
                                    hendrerit libero id. Consectetur in velit auctor orci etiam
                                    interdum nibh cras velit. Ut sodales eget orci purus viverra
                                    sit fringilla urna. Porta tempus nisl sagittis nam metus
                                    senectus risus enim nec. Ut lectus nulla dolor enim tristique
                                    facilisi dignissim curabitur. Aliquet habitasse et faucibus
                                    nibh volutpat libero ultricies mattis varius. Mollis eget
                                    platea consequat fermentum sem mauris nullam. Etiam varius
                                    habitant eu blandit quam molestie consequat pharetra praesent
                                    Morbi pulvinar.
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <p className="text-body text-justify">
                                    Lorem ipsum dolor sit amet consectetur. Arcu nec nulla
                                    hendrerit libero id. Consectetur in velit auctor orci etiam
                                    interdum nibh cras velit. Ut sodales eget orci purus viverra
                                    sit fringilla urna. Porta tempus nisl sagittis nam metus
                                    senectus risus enim nec. Ut lectus nulla dolor enim tristique
                                    facilisi dignissim curabitur. Aliquet habitasse et faucibus
                                    nibh volutpat libero ultricies mattis varius. Mollis eget
                                    platea consequat fermentum sem mauris nullam. Etiam varius
                                    habitant eu blandit quam molestie consequat pharetra praesent
                                    Morbi pulvinar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoreAbout;
