import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { BackSide, VideoTexture } from "three";
import "./home.css"

function CameraController() {
  const [cameraPosX, setCameraPosX] = useState(0);
  const [cameraPosZ, setCameraPosZ] = useState(0);
  const [cameraRot, setCameraRot] = useState(0);
  const [rotAngle, setRotAngle] = useState(-2);

  // Update it every frame
  useFrame((state) => {
    if(rotAngle >= 2 * Math.PI) {
      setRotAngle(0);
    } else {
      setRotAngle(rotAngle + 0.003);
    }
    setCameraPosX(Math.cos(-rotAngle) * 5);
    setCameraPosZ(Math.sin(-rotAngle) * 5);
    setCameraRot(rotAngle + 1.87);

    state.camera.position.x = cameraPosX;
    state.camera.position.z = cameraPosZ;
    state.camera.rotation.y = cameraRot;
    state.camera.position.y = 5;
  })
  return null;
}

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/jdrscene2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube_1.geometry} material={materials.TV} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Rope} />
    </group>
  )
}


function Sphere(props) {
  const [active, setActive] = useState(false)
  const {size: { height }  } = useThree()

  const [percent, setPercent] = useState(0)
  const [hovered, setHover] = useState(false)

  useEffect(() => {
    const calcPercent = () => {
      if(props.pagePosition) setPercent(props.pagePosition / height)
      //console.log(height)
      //console.log(percent)
    }
    calcPercent()
  }, [props.pagePosition, height, percent])

  return (
    <>
    <Screen position={[props.position[0] + 1, props.position[1], props.position[2]]} rotation={[0, Math.PI/2, 0]} video={props.video} black={props.black}/>
    <mesh
      position={props.position}
      //rotation-y={percent}
      //rotation-x={percent}
      //scale-x={percent + 1}
      //scale-z={scale}
      //onPointerOver={(e) => setHover(true)}
      //onPointerOut={(e) => setHover(false)}
      //onWheel={(e) => console.log("wheel spins")}
      onClick={() => {
        console.log('yo')
        setActive(!active)
      }}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0.5} attach="material" color={hovered ? 'hotpink' : 0x70101D} />
    </mesh>
    </>
  )
}

function Screen(props) {
  const texture = new VideoTexture(props.video);
  props.video.play();
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1.2, 0.7]}/>
      {props.black === "true" ? <meshStandardMaterial attach="material" color="black"/> : <meshBasicMaterial attach="material" map={texture}/>}
    </mesh>
  )
}

function Plane(props) {
  //const color = props.color ? props.color : 0x3B493E;
  const color = props.color ? props.color : 0x555560;
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[20, 20]}/>
      <meshStandardMaterial attach="material" color={color}/>
    </mesh>
  )
}

export default function Home() {
  const [pagePosition, setPagePosition] = useState(0);
  const [video, setVideo] = useState();
  const [videoName, setVideoName] = useState(
    "https://va.media.tumblr.com/tumblr_qurs42reg81z8nwq1.mp4"
  );
  const [black, setBlack] = useState("true");
  const [videoNameUnspammed, setVideoNameUnspammed] = useState(
    "https://va.media.tumblr.com/tumblr_qurs42reg81z8nwq1.mp4"
  );
  const [blackUnspammed, setBlackUnspammed] = useState("true");

  useEffect(() => {
  if(videoNameUnspammed !== videoName) {
      setVideoNameUnspammed(videoName);
    }
  }, [videoName])

  useEffect(() => {
    if(blackUnspammed !== black) {
      setBlackUnspammed(black);
    }
  }, [black])

  useEffect(() => {
    const makeVideo = () => {
      try {
        const vid = document.createElement("video");
        vid.src = videoNameUnspammed;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        setVideo(vid);
      } catch (err) {
        console.log(err);
      }
    };
    makeVideo("https://va.media.tumblr.com/tumblr_qurs42reg81z8nwq1.mp4");
  }, [videoName]);

  const onScroll = (e) => {
    setPagePosition(e.target.scrollTop)
  };

  return (
    <>
      <Canvas id={"canvas"} camera={{ fov: 45 }}>
      <ambientLight intensity={0.4}/>
        {/*<spotLight castShadow angle={1} intensity={0.4} position={[6, 23, 6]}   penumbra={1} decay={10}/>
        <spotLight castShadow angle={1} intensity={0.4} position={[6, 23, -6]}  penumbra={1} decay={10}/>
        <spotLight castShadow angle={1} intensity={0.4} position={[-6, 23, 6]}  penumbra={1} decay={10}/>
        <spotLight castShadow angle={1} intensity={0.4} position={[-6, 23, -6]} penumbra={1} decay={10}/>*/}
        <spotLight castShadow angle={0.8} intensity={0.4} position={[6, 23, 6]}   penumbra={1} decay={10}/>
        <spotLight castShadow angle={0.8} intensity={0.4} position={[6, 23, -6]}  penumbra={1} decay={10}/>
        <spotLight castShadow angle={0.8} intensity={0.4} position={[-6, 23, 6]}  penumbra={1} decay={10}/>
        <spotLight castShadow angle={0.8} intensity={0.4} position={[-6, 23, -6]} penumbra={1} decay={10}/>

        <Plane position={[0, 10, 10]}  rotation={[Math.PI, 0, 0]} />
        <Plane position={[0, 10, -10]} />
        <Plane position={[10, 10, 0]}  rotation={[0, -Math.PI / 2, 0]} />
        <Plane position={[-10, 10, 0]} rotation={[0, Math.PI / 2, 0]}  />
        <Plane position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} />
        <Plane position={[0, 20, 0]}  rotation={[Math.PI / 2, 0, 0]}  color={"white"} />

        {/*<Sphere pagePosition={pagePosition} position={[0, 5, 0]} video={video} black={blackUnspammed}/>*/}
        <Screen position={[0, 5, 0.45]} video={video} black={blackUnspammed}/>
        <Suspense fallback={null}>
          <Model position={[0, 4.7, 0]} scale={0.8}/>
        </Suspense>

        <CameraController/>
      </Canvas>
        <div
        onScroll={onScroll}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          display: "flex",
          justifyContent: "center"
        }}>
        <div className="homeContent" style={{ height: `${3 * 100}vh`}}>
          <div className="fiberTopBar">
            <div className="fiberTopLeft">
              <div>icon</div>
            </div>
            <div className="fiberTopCenter">
              <ul className="fiberTopList">
                <li className="fiberTopListItem">
                    <div className="link" onClick={() => window.appHistory.push("/portfolio")}>Portfolio</div>
                </li>
                <li className="fiberTopListItem">
                    <div className="link" onClick={() => window.appHistory.push("/projects")}>Projects</div>
                </li>
                <li className="fiberTopListItem">
                    <div className="link" onClick={() => window.appHistory.push("/blog")}>Blog</div>
                </li>
                <li className="fiberTopListItem">
                    <div className="link" onClick={() => window.appHistory.push("/about")}>About</div>
                </li>
              </ul>
            </div>
            <div className="fiberTopRight"/>
          </div>
          <div className="titleText">
            J. D.
            <br/>
            ROBINSON
          </div>
          <div className="linkButtonContainer">
            <div className="screenTrigger"
                 onPointerOver={() => {setBlack("false"); setVideoName("about")}}
                 onPointerOut={() => setBlack("true")}>
              <button className="linkButton"
                      onClick={() => window.appHistory.push("/about")}>
                About me
              <i className="btnIcon fas fa-angle-right"></i>
            </button>
            </div>
            <div className="screenTrigger"
                 onPointerOver={() => {setBlack("false"); setVideoName("/portfolio.mp4")}}
                 onPointerOut={() => setBlack("true")}>
              <button className="linkButton"
                      onClick={() => window.appHistory.push("/portfolio")}>
                Portfolio
              <i className="btnIcon fas fa-angle-right"></i>
            </button></div>
            <div className="screenTrigger"
                 onPointerOver={() => {setBlack("false"); setVideoName("//dm0qx8t0i9gc9.cloudfront.net/watermarks/videoGTYSdDW/videoblocks-gili-meno-turtles-underwater-360-vr-underwater-360-vr_H5tBLnQaW__25198781bb64ff033995b16494232071__P640.mp4")}}
                 onPointerOut={() => setBlack("true")}>
              <button className="linkButton"
                      onClick={() => window.appHistory.push("/projects")}>
                Projects
              <i className="btnIcon fas fa-angle-right"></i>
            </button>
            </div>
            <div className="screenTrigger"
                 onPointerOver={() => {setBlack("false"); setVideoName("blog")}}
                 onPointerOut={() => setBlack("true")}>
              <button className="linkButton"
                      onClick={() => window.appHistory.push("/blog")}>
                Blog
              <i className="btnIcon fas fa-angle-right"></i>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
