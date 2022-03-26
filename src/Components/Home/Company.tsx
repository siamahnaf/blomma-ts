import React, { useEffect, useCallback, useRef } from "react";
import { Container, Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

//Data
import Companies from "Data/Home/Company.data";

//Styles
import styles from "Styles/Home/Company.styles";

const Company = () => {
    const autoplay = useRef(
        Autoplay(
            { delay: 4000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        )
    );
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: "trimSnaps" }, [autoplay.current]);
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
    }, [emblaApi]);
    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);
    return (
        <Container maxWidth={false} disableGutters sx={{ py: "6em" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport" ref={emblaRef}>
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {Companies && Companies.length > 0 &&
                            Companies.map((comapny, i) => (
                                <Box className="embla__slide" key={i} sx={styles.EmblaSlide}>
                                    <Box sx={styles.Images}>
                                        <Box className="image-src" width="200px" component="img" src={comapny.image} alt="client" />
                                        <Box className="image-src-hover" width="200px" component="img" src={comapny.imageHover} alt="clientHover" />
                                    </Box>
                                </Box>
                            ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
export default Company;