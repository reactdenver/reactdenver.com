import Container from "@/components/container";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import EventList from "@/components/eventlist";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Speaker(props) {
  const { events, speaker } = props;

  const slug = speaker?.slug;

  if (!slug) {
    notFound();
  }

  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            {speaker?.image && (
              <Image
                src={urlForImage(speaker.image).src}
                alt={speaker.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
            )}
          </div>
          <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
            {speaker.name}
          </h1>
          <div>
            <ul className="flex items-center justify-center mb-5 mt-3">
              <li className="mr-3">
                <a href="#" className="group">
                  <svg className="group-hover:opacity-75" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Github</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="github" transform="translate(0.481591, 0.000000)" fill="#000000" opacity="0.723468599">
                              <path d="M1.0658141e-14,4.39452198 L1.0658141e-14,24.6689234 C1.00794223e-14,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 8.7888199e-15,3.63541087 1.0658141e-14,4.39452198 Z" id="Path"></path>
                          </g>
                          <path d="M11.0709019,28.8085957 C11.4429104,27.5994557 11.5468048,26.5018774 11.3825851,25.5158607 C10.3023863,25.5899444 9.50683115,25.5899444 8.99591964,25.5158607 C8.22955237,25.4047353 7.92473003,25.2162484 7.48540548,24.9507585 C7.04608093,24.6852685 6.91312798,24.4470779 6.74324402,24.1545374 C6.59721375,23.903073 6.48664717,23.6476446 6.37004877,23.3229173 C5.90779858,22.0355476 4.36848833,21.7188627 4.36848833,20.8140758 C4.36848833,20.5985399 4.91992981,20.5064518 5.69055495,20.8140758 C6.08770053,20.9726113 6.21899096,20.9120054 7.02286929,21.6362342 C7.82674762,22.360463 7.62899568,22.9954941 8.4753149,23.3229173 C9.03952771,23.5411995 10.0086178,23.5411995 11.3825851,23.3229173 C11.5708331,22.6972736 11.7542019,22.264393 11.9326914,22.0242754 C12.1111808,21.7841579 12.2333406,21.6548108 12.2991707,21.6362342 C9.23657865,20.9967705 7.22247459,19.6147312 6.25685857,17.4901164 C5.9511833,16.8175487 5.65194839,15.6797775 5.69055495,14.6793102 C5.7786548,12.3962523 6.30194111,10.8253242 7.26041388,9.96652601 C7.02750485,9.65577059 6.94832332,8.99296285 7.02286929,7.97810279 C7.09741526,6.96324273 7.25159399,6.37928986 7.48540548,6.22624418 C8.02476938,6.12374257 8.67153106,6.22443516 9.42569052,6.52832195 C10.17985,6.83220874 10.8321482,7.23044322 11.3825851,7.7230254 C12.3510145,7.30863556 13.6013732,7.10144064 15.133661,7.10144064 C16.6659489,7.10144064 17.9286876,7.30863556 18.921877,7.7230254 C19.2373464,7.21423045 19.8919479,6.77095221 20.8856815,6.39319066 C21.8794152,6.01542912 22.5583306,5.89684136 22.9224278,6.0374274 C23.2090207,6.4896133 23.3523172,7.20223842 23.3523172,8.17530274 C23.3523172,9.14836705 23.2377981,9.79354364 23.0087598,10.1108325 C23.6216711,10.6128527 24.0262775,11.2282511 24.222579,11.9570278 C24.7646826,13.9696075 25.0098367,14.6345297 24.0337547,17.1931367 C23.0676246,19.7256567 21.0411262,21.2066892 17.9542593,21.6362342 C18.20041,21.8949283 18.4792376,22.4571561 18.7907421,23.3229173 C19.2579989,24.6215593 18.4451343,26.5711572 19.1812227,29 C19.9173111,31.4288428 10.5128891,30.6223057 11.0709019,28.8085957 Z" id="Path-7" fill="#FFFFFF"></path>
                      </g>
                  </svg>
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="group">
                  <svg className="group-hover:opacity-75" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
                      <title>Facebook</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="facebook" transform="translate(0.661331, 0.000000)">
                              <path d="M1.0658141e-14,4.39452198 L1.0658141e-14,24.6689234 C1.00794223e-14,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 8.7888199e-15,3.63541087 1.0658141e-14,4.39452198 Z" id="Path" fill="#000000" opacity="0.723468599"></path>
                              <path d="M24.3468781,8.30636338 L24.3468781,4.03367369 C21.8653793,3.79245272 20.2008275,3.79245272 19.3532225,4.03367369 C16.7184811,4.78349807 15.4123386,6.50062268 15.4347951,9.18504754 L15.4347951,13.9898561 L12.3082478,13.9898561 L12.3082478,18.142245 L15.4347951,18.142245 L15.4347951,29 L20.0353784,29 L20.0353784,18.142245 L23.8174733,18.142245 L23.8174733,13.9898561 L20.0353784,13.9898561 L20.0353784,9.30636338 C20.0353784,8.75407863 20.4830937,8.30636338 21.0353784,8.30636338 L24.3468781,8.30636338 L24.3468781,8.30636338 Z" id="Path-3" fill="#FFFFFF"></path>
                          </g>
                      </g>
                  </svg>
                </a>
              </li>
              <li className="mr-3">
                <a className="group" href="#">
                  <svg className="group-hover:opacity-75" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Instagram</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="instagram" transform="translate(0.716323, 0.000000)">
                              <path d="M1.0658141e-14,4.39452198 L1.0658141e-14,24.6689234 C1.00794223e-14,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 8.7888199e-15,3.63541087 1.0658141e-14,4.39452198 Z" id="Path" fill="#000000" opacity="0.723468599"></path>
                              <circle id="Mask" fill="#FFFFFF" cx="24.2683212" cy="5.26832118" r="1.26832118"></circle>
                              <circle id="Mask" stroke="#FFFFFF" stroke-width="2" cx="14.6232326" cy="14.5" r="6.59218556"></circle>
                          </g>
                      </g>
                  </svg>
                </a>
              </li>
              <li className="mr-3">
                <a className="group" href="#">
                  <svg className="group-hover:opacity-75" width="30px" height="30px" viewBox="0 0 30 30"  xmlns="http://www.w3.org/2000/svg">
                      <title>Linkedin</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="linkedin" transform="translate(0.500000, 0.000000)">
                              <path d="M1.0658141e-14,4.39452198 L1.0658141e-14,24.6689234 C1.00794223e-14,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 8.7888199e-15,3.63541087 1.0658141e-14,4.39452198 Z" id="Path" fill="#000000" opacity="0.723468599"></path>
                              <g id="Group-2" transform="translate(6.506236, 5.284718)" fill="#FFFFFF">
                                  <circle id="Mask" cx="1.95016454" cy="1.95016454" r="1.95016454"></circle>
                                  <polygon id="Mask" points="0.493764066 6.24883987 3.49376407 6.24883987 3.49376407 18.3877602 0.493764066 18.3877602"></polygon>
                              </g>
                              <path d="M13,11.5335583 L16,11.5335583 L16,13.4416975 L16.9933527,12.4086733 C17.6522021,11.7235114 18.5617298,11.3363005 19.5122714,11.3363005 C20.4761848,11.3363005 21.4122761,11.6594272 22.1709375,12.2540378 L22.3431339,12.388999 C23.1909974,13.053523 23.6862677,14.0709606 23.6862677,15.1482093 L23.6862677,23.6724786 L23.6862677,23.6724786 L21,23.6724786 L21,15.4148888 C21.021807,14.6925179 20.6759866,14.1768163 19.9625387,13.867784 C18.8923669,13.4042357 18.1098997,13.6016549 17.4282736,13.867784 C16.9738562,14.0452035 16.497765,14.560905 16,15.4148888 L16,23.6724786 L13,23.6724786 L13,11.5335583 Z" id="Path-2" fill="#FFFFFF"></path>
                          </g>
                      </g>
                  </svg>
                </a>
              </li>
              <li className="mr-3">
                <a className="group" href="#">
                  <svg className="group-hover:opacity-75" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Twitter</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="twitter" transform="translate(0.946952, 0.000000)">
                              <path d="M0,4.39452198 L0,24.6689234 C-5.78718724e-16,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 -1.86932114e-15,3.63541087 0,4.39452198 Z" id="Path" fill="#000000" opacity="0.723468599"></path>
                              <g id="Group-3" opacity="0.945507958" transform="translate(5.623233, 6.000000)">
                                  <polygon id="Path-4" fill="#FFFFFF" points="0.66252143 16.3160087 1.88938528 16.3160087 17.2275311 0.186351626 15.9211983 0.186351626"></polygon>
                                  <polygon id="Path-6" stroke="#FFFFFF" points="1.72792939 0.885632638 5.44633022 0.885632638 16.4943713 15.8594531 12.6519 15.9413875 4.12425543 4.12846444"></polygon>
                              </g>
                          </g>
                      </g>
                  </svg>
                </a>
              </li>
              <li className="mr-3">
                <a className="group" href="#">
                  <svg className="group-hover:opacity-75" width="30px" height="25px" viewBox="0 0 30 25" xmlns="http://www.w3.org/2000/svg">
                      <title>Youtube</title>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="youtube" transform="translate(0.730629, 0.000000)">
                              <path d="M0,3.93186501 L0,21.1923326 C-2.72292227e-15,21.8632122 0.187378276,22.5207573 0.541017032,23.0908618 C0.893481781,23.6590736 1.40915442,24.1077476 2.02064739,24.3782516 L2.30109285,24.5023113 C2.93535504,24.7828842 3.62105085,24.9284394 4.31459829,24.9297223 C18.1830608,24.9553775 25.4669034,24.9547201 26.1661263,24.9277502 C27.241164,24.8862847 27.7536223,24.4240751 28.2739421,23.9630405 C28.620822,23.6556841 28.9373603,23.0742316 29.223557,22.218683 L29.223557,22.218683 C29.2541012,9.98170724 29.2541012,3.52085228 29.223557,2.83611816 C29.1777407,1.80901696 28.8137198,1.42154346 28.2739421,0.93037762 C28.0367292,0.714527927 27.6505765,0.514030642 27.115484,0.328885765 C26.5895996,0.146931044 26.0370305,0.0540368602 25.4805578,0.0540368602 L4.22986084,0.0540368602 C3.59109029,0.0540368602 2.95823644,0.176435073 2.36553071,0.414610908 L2.09876135,0.521810843 C1.44045816,0.786346689 0.891310805,1.26629038 0.541017032,1.88324789 C0.186417517,2.50778892 -8.79525196e-17,3.21367819 0,3.93186501 Z" id="Path" fill="#000000" opacity="0.723468599"></path>
                              <polygon id="Mask" fill="#FFFFFF" points="10.5753341 7.81504804 10.5753341 17.184952 19.9438584 12.4498285"></polygon>
                          </g>
                      </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-2 flex flex-col px-5 text-center text-gray-500">
            {speaker.bio && <PortableText value={speaker.bio} />}
          </div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {events.map((event) => (
            <EventList key={event._id} event={event} aspect="square" />
          ))}
        </div>
      </Container>
    </>
  );
}