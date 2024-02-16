export default function XSocial(props) {
    const url = props.url
    return ( 
        <li className="mr-3">
            <a href={url} className="group" target="_blank">
                <svg
                className="group-hover:opacity-75"
                width="30px"
                height="30px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <title>X Social</title>
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g id="twitter" transform="translate(0.946952, 0.000000)">
                        <path
                            d="M0,4.39452198 L0,24.6689234 C-5.78718724e-16,25.4247133 0.185790259,26.1689153 0.541017032,26.8360227 C0.893297687,27.4975974 1.43898654,28.0359849 2.1052463,28.3793225 L2.19010691,28.4230529 C2.89517641,28.7863944 3.67657273,28.9767768 4.46975436,28.978479 C18.2373916,29.0080254 25.4695156,29.0071484 26.1661263,28.975848 C27.241164,28.927544 27.7536223,28.3891076 28.2739421,27.8520399 C28.3934229,27.7287132 28.509304,27.5675042 28.6215853,27.3684129 L28.5858953,27.3482849 C29.0034445,26.6079084 29.2236784,25.7726331 29.2254581,24.9226323 C29.2540875,11.2488951 29.2534538,4.0216503 29.223557,3.24089788 C29.1777407,2.04440873 28.8137198,1.59303369 28.2739421,1.02086553 C28.1100096,0.847095942 27.8749452,0.681867684 27.5687488,0.525180759 C26.8562349,0.187246661 26.0792767,-1.44796104e-16 25.2910434,0 L4.37519564,0 C3.64257232,1.02275914e-15 2.91889963,0.160998153 2.25537789,0.471603737 L2.17243055,0.510432767 C1.46688506,0.840710371 0.895860652,1.40284149 0.554549821,2.10311619 L0.505433222,2.20388977 C0.172846577,2.88626487 -1.86932114e-15,3.63541087 0,4.39452198 Z"
                            id="Path"
                            fill="#000000"
                            opacity="0.723468599"
                        ></path>
                        <g
                            id="Group-3"
                            opacity="0.945507958"
                            transform="translate(5.623233, 6.000000)"
                        >
                            <polygon
                            id="Path-4"
                            fill="#FFFFFF"
                            points="0.66252143 16.3160087 1.88938528 16.3160087 17.2275311 0.186351626 15.9211983 0.186351626"
                            ></polygon>
                            <polygon
                            id="Path-6"
                            stroke="#FFFFFF"
                            points="1.72792939 0.885632638 5.44633022 0.885632638 16.4943713 15.8594531 12.6519 15.9413875 4.12425543 4.12846444"
                            ></polygon>
                        </g>
                        </g>
                    </g>
                </svg>
            </a>
        </li>
    )
}