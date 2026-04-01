.. _doc_camera:

Camera
======

**Camera** is a component that determines how the scene is displayed on the screen. It defines the viewpoint, projection, and visual parameters. The camera always renders directly to the screen.

Overview
--------

The Camera component is the foundation of Thunder Engine's visual system. It transforms the 3D scene into a 2D image, defining:

- **Position and orientation** — where the camera is looking from and where it's looking at (defined via the `transform` component)
- **Projection** — perspective (3D games) or orthographic (2D games, interfaces)
- **View parameters** — field of view, near and far clipping planes
- **Background color** — the color used to fill the screen before rendering

.. note::
    Multiple cameras can exist in a scene, but only one can be active at a time. The active camera is set via ``Engine::setMainCamera()``.

Component Properties
--------------------

**fov** (float)
    Field of View in degrees for perspective projection.
    Determines how wide an angle the camera covers.
    
    - Typical values: 60° — 90°
    - Narrow angle (< 60°) creates a "telescope" effect
    - Wide angle (> 90°) creates a "fisheye" effect
    
    Default: ``60.0``.
    
    .. note::
        This property only affects rendering if ``orthographic = false``.

**near** (float)
    Near clipping plane. Objects closer than this distance are not rendered.
    
    - Too small a value may cause depth artifacts (z-fighting)
    - Too large a value may "cut off" objects that are close to the camera
    
    Default: ``0.1``.

**far** (float)
    Far clipping plane. Objects beyond this distance are not rendered.
    
    - Increasing this value improves visibility of distant objects but may reduce performance and depth buffer precision
    
    Default: ``1000.0``.

**size** (float)
    Orthographic projection size. Determines how many units of the game world fit vertically.
    
    - With a value of ``5.0``, the visible vertical area will be 10 units (from -5 to +5)
    - Horizontal size depends on the screen's aspect ratio
    
    Default: ``5.0``.
    
    .. note::
        This property only affects rendering if ``orthographic = true``.

**focalDistance** (float)
    Camera focus distance. Used for depth of field effects and other post-effects that depend on distance from the camera.
    
    Default: ``10.0``.

**backgroundColor** (Vector4)
    The color used to fill the screen before rendering the scene. Components: R, G, B, A.
    
    - Values range from ``0.0`` to ``1.0``
    - Represented as a Color-picker in the editor
    
    Default: ``(0.1, 0.1, 0.15, 1.0)`` — dark gray.

**orthographic** (bool)
    Determines the projection type:
    
    - ``false`` — perspective projection. Objects appear smaller with distance. Used in 3D games.
    - ``true`` — orthographic projection. Object size does not depend on distance. Used in 2D games, UI, level editors.
    
    Default: ``false`` (perspective).

Usage Examples
--------------

**Creating a Main 3D Camera**

.. code-block:: cpp

    // Create an actor for the camera
    Actor* cameraActor = scene->createActor("MainCamera");
    cameraActor->transform()->setPosition(Vector3(0.0f, 5.0f, -10.0f));
    cameraActor->transform()->setRotation(Quaternion::fromEuler(15.0f, 0.0f, 0.0f));
    
    // Add the camera component
    Camera* camera = cameraActor->addComponent<Camera>();
    camera->setFov(70.0f);
    camera->setNear(0.3f);
    camera->setFar(500.0f);
    camera->setOrthographic(false);
    camera->setColor(Vector4(0.2f, 0.3f, 0.4f, 1.0f));
    
    // Make this camera active
    Camera::setCurrent(camera);

**Creating a 2D Camera**

.. code-block:: cpp

    Actor* camera2DActor = scene->createActor("Camera2D");
    Camera* camera2D = camera2DActor->addComponent<Camera>();
    
    camera2D->setOrthographic(true);
    camera2D->setOrthoSize(5.0f);  // 10 units vertically
    camera2D->setNear(-100.0f);     // Negative values can be used for 2D
    camera2D->setFar(100.0f);
    camera2D->setColor(Vector4(0.0f, 0.0f, 0.0f, 1.0f));
    
    // Position the camera
    camera2DActor->transform()->setPosition(Vector3(0.0f, 0.0f, 0.0f));
    
    Camera::setCurrent(camera2D);

**2D Camera Following the Player**

.. code-block:: cpp

    class Camera2DFollow : public Actor {
    public:
        void start() override {
            m_camera = addComponent<Camera>();
            m_camera->setOrthographic(true);
            m_camera->setOrthoSize(5.0f);
            m_camera->setNear(-100.0f);
            m_camera->setFar(100.0f);
            
            m_target = scene->findActor("Player");
        }
        
        void update(float deltaTime) override {
            if (!m_target) return;
            
            // Follow the player with level bounds constraints
            Vector3 targetPos = m_target->position();
            float x = CLAMP(targetPos.x, m_minX, m_maxX);
            float y = CLAMP(targetPos.y, m_minY, m_maxY);
            
            transform()->setPosition(Vector3(x, y, transform()->position().z));
        }
        
    private:
        Camera* m_camera = nullptr;
        Actor* m_target = nullptr;
        float m_minX = -10.0f, m_maxX = 10.0f;
        float m_minY = -5.0f, m_maxY = 5.0f;
    };

**Switching Projection Type During Gameplay**

.. code-block:: cpp

    // Toggle between first-person view and top-down view
    void toggleCameraMode(Camera* camera) {
        if (camera->isOrthographic()) {
            // Switch to perspective mode (3D)
            camera->setOrthographic(false);
            camera->setFov(70.0f);
        } else {
            // Switch to orthographic mode (2D/map)
            camera->setOrthographic(true);
            camera->setOrthoSize(20.0f);
        }
    }

Recommendations
---------------

**Clipping Plane Configuration**
    - Set ``near`` as large as possible to avoid z-fighting (depth artifacts)
    - Set ``far`` only to the necessary distance — too large a value reduces depth precision and performance
    - For 2D games, negative ``near`` values can be used so objects behind the camera are not clipped

**Choosing Projection**
    -   **Perspective** (``orthographic = false``): 

        - 3D games
        - Realistic depth perception
        - "Fisheye" effect with wide FOV

    - **Orthographic** (``orthographic = true``):

        - 2D games (platformers, strategy games)
        - UI and HUD
        - Level editors
        - Mini-maps (via a separate camera)

**focalDistance**
    - Used for post-effects (depth of field, motion blur)
    - Can be changed dynamically to focus on different objects
    - Default ``10.0`` is suitable for most scenarios

**Multiple Cameras**
    - Multiple cameras can exist in a scene, but only one is active
    - Switch cameras using ``Camera::setCurrent``

**Optimization**
    - For distant views, use a larger ``far`` value only when necessary
    - In 2D games, use an orthographic camera with precisely tuned ``size``
    - Create separate cameras for cutscenes and switch them as needed

Complete Example: Simple Third-Person Camera
--------------------------------------------

.. code-block:: cpp

    class ThirdPersonCamera : public Actor {
    public:
        void start() override {
            m_camera = addComponent<Camera>();
            m_camera->setFov(60.0f);
            m_camera->setNear(0.1f);
            m_camera->setFar(1000.0f);
            m_camera->setColor(Vector4(0.1f, 0.1f, 0.15f, 1.0f));
            
            m_target = scene->findActor("Player")->transform();
            
            // Make this camera active
            Camera::setCurrent(m_camera);
        }
        
        void update(float deltaTime) override {
            if (!m_target) return;
            
            // Get mouse input
            Vector4 delta = Input::mouseDelta() * m_sensitivity;
            
            m_yaw += delta.x;
            m_pitch -= delta.y;
            m_pitch = CLAMP(m_pitch, -30.0f, 60.0f);
            
            // Calculate camera position relative to player
            Quaternion rotation = Quaternion::fromEuler(m_pitch, m_yaw, 0.0f);
            Vector3 offset = rotation * Vector3(0.0f, 2.0f, -5.0f);
            Vector3 desiredPosition = m_target->position() + offset;
            
            // Smooth movement
            Vector3 newPosition = MIX(transform()->position(), desiredPosition, deltaTime * m_smoothSpeed);
            transform()->setPosition(newPosition);
        }
        
    private:
        Camera* m_camera = nullptr;
        Transform* m_target = nullptr;
        
        float m_yaw = 0.0f;
        float m_pitch = 20.0f;
        float m_sensitivity = 0.1f;
        float m_smoothSpeed = 10.0f;
    };