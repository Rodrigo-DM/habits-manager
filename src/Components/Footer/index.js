import { useState } from "react";
import DeveloperCard from "../DeveloperCard";
import { FooterContainer } from "./styles";

const Footer = () => {
  const [developers] = useState([
    {
      id: 1,
      name: "André Kuratomi",
      img: "https://avatars.githubusercontent.com/u/68620412?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/andre-kuratomi",
        github: "https://github.com/AndreKuratomi",
        instagram: "https://www.instagram.com/andrebergamaschikuratomi/",
      },
    },
    {
      id: 2,
      name: "Fernando Vieira",
      img: "https://avatars.githubusercontent.com/u/79385030?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/fernandovieira-dev/",
        github: "https://github.com/F-Vieira",
        instagram: "https://www.instagram.com/fernando.v96/",
      },
    },
    {
      id: 3,
      name: "Miguel Maurer",
      img: "https://avatars.githubusercontent.com/u/79239268?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/miguel-maurer/",
        github: "https://github.com/miguel-maurer",
        instagram: "https://www.instagram.com/miguelmaurer/",
      },
    },
    {
      id: 4,
      name: "Rodrigo Diniz",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQEer_S0wkLJKw/profile-displayphoto-shrink_800_800/0/1624217655629?e=1634774400&v=beta&t=1Rie05qcy8tViWvkmHMjK1DSadxH7NreXSHDde_4Vrs",
      social: {
        linkedin: "https://www.linkedin.com/in/rodrigodmonteiro/",
        github: "https://github.com/Rodrigo-DM",
        instagram: "https://www.instagram.com/rodrigo_d.m/",
      },
    },
  ]);

  return (
    <FooterContainer>
      <h2>Quem fez...</h2>
      <section>
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </section>
    </FooterContainer>
  );
};

export default Footer;
