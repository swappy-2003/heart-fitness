'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoStory {
  id: string;
  number: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
}

const videoStories: VideoStory[] = [
  {
    id: 'story-1',
    number: '01',
    src: '/testimony video/Video-16017.mp4#t=0.5',
    title: 'Discipline & Daily Form',
    subtitle: 'Training consistency with Jerai apparatus & coaching guidance.',
    tag: 'STRENGTH JOURNEY',
    duration: '0:25',
  },
  {
    id: 'story-2',
    number: '02',
    src: '/testimony video/Video-29311.mp4#t=0.5',
    title: 'Atmosphere & Energy',
    subtitle: 'The motivating community and supportive floor environment in Virar East.',
    tag: 'GYM CULTURE',
    duration: '0:52',
  },
  {
    id: 'story-3',
    number: '03',
    src: '/testimony video/Video-39837.mp4#t=0.5',
    title: 'Recovery & Progress',
    subtitle: 'Post-workout steam recovery and targeted hypertrophy progression.',
    tag: 'MEMBER RESULTS',
    duration: '0:42',
  },
  {
    id: 'story-4',
    number: '04',
    src: '/testimony video/Video-63651.mp4#t=0.5',
    title: 'Long-Term Transformation',
    subtitle: 'Building mental resilience, joint health, and athletic capability.',
    tag: 'PERSONAL GROWTH',
    duration: '0:41',
  },
];

export default function VideoTestimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    'story-1': false,
    'story-2': false,
    'story-3': false,
    'story-4': false,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any previously playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play().catch(() => {
        // Fallback for browser autoplay policies if sound was active
        video.muted = true;
        setMutedStates((prev) => ({ ...prev, [id]: true }));
        video.play();
      });
      setPlayingId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setMutedStates((prev) => ({ ...prev, [id]: newMuted }));
  };

  const handleVideoEnded = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    }
  };

  return (
    <section
      ref={containerRef}
      id="video-testimonials"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B0B0B] text-[#FAF9F6] border-t border-white/[0.08] overflow-hidden"
      aria-label="Member Video Testimonials"
    >
      {/* Subtle Architectural Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[rgba(255,210,26,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow-bright)]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[var(--accent-yellow-bright)] uppercase">
                VIDEO TRANSMISSIONS • 04 MEMBER STORIES
              </span>
            </div>
            <h2
              ref={titleRef}
              className="heading-section text-white"
            >
              ATHLETE VOICES.<br />
              <span className="text-[var(--accent-yellow-bright)]">UNFILTERED TRUTH.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Authentic member reflections recorded directly on the Heart Fitness floor in Virar East. Hear firsthand about the training discipline, community, and results.
          </p>
        </div>

        {/* 4-Column Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {videoStories.map((story) => {
            const isPlaying = playingId === story.id;
            const isMuted = mutedStates[story.id];

            return (
              <div
                key={story.id}
                className="group relative flex flex-col bg-[#141414] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
              >
                {/* 9:16 Video Player Container */}
                <div
                  onClick={() => togglePlay(story.id)}
                  className="relative w-full aspect-[9/16] bg-black overflow-hidden cursor-pointer"
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[story.id] = el;
                    }}
                    src={story.src}
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 0.5;
                    }}
                    onEnded={() => handleVideoEnded(story.id)}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
                    <span className="text-[10px] font-mono tracking-wider font-bold px-2 py-0.5 rounded bg-black/80 text-white backdrop-blur-sm border border-white/10">
                      {story.number} / STORY
                    </span>

                    {/* Sound Toggle Button (interactive) */}
                    <button
                      onClick={(e) => toggleMute(e, story.id)}
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      className="pointer-events-auto w-8 h-8 rounded-full bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/10 shadow-md"
                    >
                      {isMuted ? (
                        <span className="text-xs" title="Unmute">
                          🔇
                        </span>
                      ) : (
                        <span className="text-xs" title="Mute">
                          🔊
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Play/Pause Overlay */}
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 ${
                      isPlaying
                        ? 'opacity-0 group-hover:opacity-100 bg-black/25'
                        : 'opacity-100 bg-gradient-to-t from-black/60 via-transparent to-black/30'
                    }`}
                  >
                    {/* Glowing Play / Pause Button */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD21A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,210,26,0.6)] group-hover:scale-110 transition-transform duration-300">
                      {isPlaying ? (
                        <svg
                          className="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 fill-current translate-x-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>

                    {!isPlaying && (
                      <span className="mt-3 text-[11px] font-mono tracking-widest text-white/90 uppercase font-bold drop-shadow">
                        Watch Story ({story.duration})
                      </span>
                    )}
                  </div>

                  {/* Live Status Tag */}
                  <div className="absolute bottom-3 left-3.5 z-20 pointer-events-none">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-[var(--accent-yellow-bright)] text-black font-bold uppercase shadow-sm">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Editorial Metadata */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 border-t border-white/[0.08] bg-[#121212]">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight uppercase mb-1.5 group-hover:text-[var(--accent-yellow-bright)] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {story.subtitle}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>Virar East Member</span>
                    <span className="text-[var(--accent-yellow-bright)]">● Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-white/80">
              Ready for your own transformation? Train with certified coaches in Virar East.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-xs !bg-[#FFD21A] !text-black !border-[#FFD21A]"
            >
              <span>Book 1-Day Trial</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
