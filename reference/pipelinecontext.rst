.. _api_PipelineContext:

PipelineContext
===============

Inherited: None

.. _api_PipelineContext_description:

Description
-----------

PipelineContext is a class responsible for managing the rendering pipeline context, including rendering tasks, camera settings, and post-processing effects.



.. _api_PipelineContext_public:

Public Methods
--------------

+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`addTextureBuffer<api_PipelineContext_addTextureBuffer>` (Texture * texture)                                                                 |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                  :ref:`CommandBuffer<api_CommandBuffer>` * | :ref:`buffer<api_PipelineContext_buffer>` () const                                                                                                |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`cameraReset<api_PipelineContext_cameraReset>` ()                                                                                            |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                   std::list<Renderable :ref:`*><api_*>>` & | :ref:`culledComponents<api_PipelineContext_culledComponents>` ()                                                                                  |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                :ref:`Camera<api_Camera>` * | :ref:`currentCamera<api_PipelineContext_currentCamera>` () const                                                                                  |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                    :ref:`RenderTarget<api_RenderTarget>` * | :ref:`defaultTarget<api_PipelineContext_defaultTarget>` ()                                                                                        |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`drawRenderers<api_PipelineContext_drawRenderers>` (const std::list<Renderable *> & list, uint32_t  layer, uint32_t  flags = 0)              |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                     std::list<Renderable :ref:`*><api_*>>` | :ref:`frustumCulling<api_PipelineContext_frustumCulling>` (const  std::array<Vector3, 8> & frustum, std::list<Renderable *> & list, AABBox & box) |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`insertRenderTask<api_PipelineContext_insertRenderTask>` (PipelineTask * task, PipelineTask * before = nullptr)                              |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|           const std::list<PipelineTask :ref:`*><api_*>>` & | :ref:`renderTasks<api_PipelineContext_renderTasks>` () const                                                                                      |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`std::list<std::string><api_std::list<std::string>>` | :ref:`renderTextures<api_PipelineContext_renderTextures>` () const                                                                                |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`resize<api_PipelineContext_resize>` (int32_t  width, int32_t  height)                                                                       |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                   std::list<Renderable :ref:`*><api_*>>` & | :ref:`sceneComponents<api_PipelineContext_sceneComponents>` ()                                                                                    |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                    std::list<BaseLight :ref:`*><api_*>>` & | :ref:`sceneLights<api_PipelineContext_sceneLights>` ()                                                                                            |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setCurrentCamera<api_PipelineContext_setCurrentCamera>` (Camera * camera)                                                                   |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setDefaultTarget<api_PipelineContext_setDefaultTarget>` (RenderTarget * target)                                                             |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setPipeline<api_PipelineContext_setPipeline>` (Pipeline * pipeline)                                                                         |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                       void | :ref:`setWorld<api_PipelineContext_setWorld>` (World * world)                                                                                     |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                              :ref:`Texture<api_Texture>` * | :ref:`textureBuffer<api_PipelineContext_textureBuffer>` (const std::string & name)                                                                |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                  :ref:`World<api_World>` * | :ref:`world<api_PipelineContext_world>` ()                                                                                                        |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+
|                                  :ref:`AABBox<api_AABBox>` | :ref:`worldBound<api_PipelineContext_worldBound>` () const                                                                                        |
+------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineContext_static:

Static Methods
--------------

+--------------------------+----------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`defaultCube<api_PipelineContext_defaultCube>` ()   |
+--------------------------+----------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`defaultPlane<api_PipelineContext_defaultPlane>` () |
+--------------------------+----------------------------------------------------------+

.. _api_PipelineContext_methods:

Methods Description
-------------------

.. _api_PipelineContext_addTextureBuffer:

 void **PipelineContext::addTextureBuffer** (:ref:`Texture<api_Texture>` * *texture*)

Adds a *texture* buffer to the global *texture*s in the command buffer.

----

.. _api_PipelineContext_buffer:

 :ref:`CommandBuffer<api_CommandBuffer>` * **PipelineContext::buffer** () const

Retrieves the command buffer associated with the pipeline context.

----

.. _api_PipelineContext_cameraReset:

 void **PipelineContext::cameraReset** ()

Resets the camera view and projection matrices in the command buffer.

----

.. _api_PipelineContext_culledComponents:

std::list<Renderable :ref:`*><api_*>>` & **PipelineContext::culledComponents** ()

Returns the list of culled scene components based on frustum culling.

----

.. _api_PipelineContext_currentCamera:

 :ref:`Camera<api_Camera>` * **PipelineContext::currentCamera** () const

Returns the currently set camera for rendering.

**See also** setCurrentCamera().

----

.. _api_PipelineContext_defaultCube:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultCube** ()

Return the default cube mesh used in rendering.

----

.. _api_PipelineContext_defaultPlane:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultPlane** ()

Retrieves the default plane mesh used in rendering.

----

.. _api_PipelineContext_defaultTarget:

 :ref:`RenderTarget<api_RenderTarget>` * **PipelineContext::defaultTarget** ()

Returns the default render target associated with the pipeline context.

**See also** setDefaultTarget().

----

.. _api_PipelineContext_drawRenderers:

 void **PipelineContext::drawRenderers** (:ref:`*><api_*>>` & *list*, :ref:`uint32_t<api_uint32_t>`  *layer*, :ref:`uint32_t<api_uint32_t>`  *flags* = 0)

Draws the specified *list* of Renderable compoenents on the given *layer* and *flags*.

----

.. _api_PipelineContext_frustumCulling:

std::list<Renderable :ref:`*><api_*>>`  **PipelineContext::frustumCulling** (:ref:`const<api_const>`  *std::array<Vector3*, :ref:`8><api_8>>` & *frustum*, :ref:`*><api_*>>` & *list*, :ref:`AABBox<api_AABBox>` & *box*)

Filters out an incoming *list* which are not in the *frustum*. Returns filtered *list*. The output parameter returns a bounding *box* for filtered objects.

----

.. _api_PipelineContext_insertRenderTask:

 void **PipelineContext::insertRenderTask** (:ref:`PipelineTask<api_PipelineTask>` * *task*, :ref:`PipelineTask<api_PipelineTask>` * *before* = nullptr)

Inserts a rendering *task* into the pipeline context. Optionally, specifies the *task* to insert *before*.

----

.. _api_PipelineContext_renderTasks:

const std::list<PipelineTask :ref:`*><api_*>>` & **PipelineContext::renderTasks** () const

Returns the list of rendering tasks associated with the pipeline context.

----

.. _api_PipelineContext_renderTextures:

 :ref:`std::list<std::string><api_std::list<std::string>>`  **PipelineContext::renderTextures** () const

Returns a list of names of the global textures.

----

.. _api_PipelineContext_resize:

 void **PipelineContext::resize** (int32_t  *width*, int32_t  *height*)

Resizes the pipeline context to the specified *width* and *height*. Updates render tasks accordingly.

----

.. _api_PipelineContext_sceneComponents:

std::list<Renderable :ref:`*><api_*>>` & **PipelineContext::sceneComponents** ()

Returns the list of scene components relevant for rendering.

----

.. _api_PipelineContext_sceneLights:

std::list<BaseLight :ref:`*><api_*>>` & **PipelineContext::sceneLights** ()

Returns the list of scene lights relevant for rendering.

----

.. _api_PipelineContext_setCurrentCamera:

 void **PipelineContext::setCurrentCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets the current *camera* and updates associated matrices in the command buffer.

**See also** currentCamera().

----

.. _api_PipelineContext_setDefaultTarget:

 void **PipelineContext::setDefaultTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*)

Sets the default render *target* for the pipeline context.

**See also** defaultTarget().

----

.. _api_PipelineContext_setPipeline:

 void **PipelineContext::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Sets the rendering *pipeline* for the context, creating and linking associated rendering tasks.

----

.. _api_PipelineContext_setWorld:

 void **PipelineContext::setWorld** (:ref:`World<api_World>` * *world*)

Sets the curent *world* instance to process.

**See also** *world*().

----

.. _api_PipelineContext_textureBuffer:

 :ref:`Texture<api_Texture>` * **PipelineContext::textureBuffer** (std::string & *name*)

Returns a texture buffer based on its *name*.

----

.. _api_PipelineContext_world:

 :ref:`World<api_World>` * **PipelineContext::world** ()

Returns the curent world instance to process.

**See also** setWorld().

----

.. _api_PipelineContext_worldBound:

 :ref:`AABBox<api_AABBox>`  **PipelineContext::worldBound** () const

Returns the bounding box representing the world-bound.


