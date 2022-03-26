import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Box, Typography, ButtonBase } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

//Data
import Clients from "Data/Home/Client.data";

//Styles
import styles from "Styles/Home/Client.styles";

const Client = () => {
    const autoplay = useRef(
        Autoplay(
            { delay: 3000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        )
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        autoplay.current.reset();
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        autoplay.current.reset();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "2em" }}>
            <Box sx={{ position: "relative" }}>
                <Box className="embla" sx={styles.Embla}>
                    <Box className="embla__viewport" ref={emblaRef}>
                        <Box className="embla__container" sx={styles.EmblaContainer}>
                            {Clients && Clients.length > 0 &&
                                Clients.map((client, i) => (
                                    <Box className="embla__slide" key={i} sx={styles.EmblaSlide}>
                                        <Typography variant="h1" component="h1" sx={styles.Aposhtrophy}>
                                            ”
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            {client.description}
                                        </Typography>
                                        <Box sx={styles.AuthorBox}>
                                            <Typography variant="h6" component="h6">
                                                {client.name}
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                {client.job}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                        </Box>
                    </Box>
                </Box>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </Box>
        </Container>
    );
};
export default Client;

interface Props {
    enabled: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PrevButton = ({ enabled, onClick }: Props) => (
    <ButtonBase
        className="embla__button embla__button--prev"
        onClick={onClick}
        disabled={!enabled}
        sx={styles.LeftButton}
        disableRipple
    >
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="72px" height="14px" viewBox="0 0 72 14" enableBackground="new 0 0 72 14" xmlSpace="preserve"><g><defs><rect id="SVGID_1_" width="72" height="14"></rect></defs><clipPath id="SVGID_2_"><use xlinkHref="#SVGID_1_" overflow="visible"></use></clipPath><line clipPath="url(#SVGID_2_)" fill="none" stroke="#231F20" strokeWidth="0.991" strokeMiterlimit="10" x1="71" y1="7" x2="1" y2="7"></line><polyline clipPath="url(#SVGID_2_)" fill="none" stroke="#231F20" strokeMiterlimit="10" points="7.364,0.636 1,7 7.364,13.364 "></polyline></g></svg>
    </ButtonBase>
);

const NextButton = ({ enabled, onClick }: Props) => (
    <ButtonBase
        className="embla__button embla__button--next"
        onClick={onClick}
        disabled={!enabled}
        sx={styles.RightButton}
        disableRipple
    >
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="72px" height="14px" viewBox="0 0 72 14" enableBackground="new 0 0 72 14" xmlSpace="preserve"><g><defs><rect id="SVGID_1_" width="72" height="14"></rect></defs><clipPath id="SVGID_2_"><use xlinkHref="#SVGID_1_" overflow="visible"></use></clipPath><line clipPath="url(#SVGID_2_)" fill="none" stroke="#231F20" strokeWidth="0.991" strokeMiterlimit="10" x1="1" y1="7" x2="71" y2="7"></line><polyline clipPath="url(#SVGID_2_)" fill="none" stroke="#231F20" strokeMiterlimit="10" points="64.636,0.636 71,7 	64.636,13.364"></polyline></g></svg>
    </ButtonBase>
);
