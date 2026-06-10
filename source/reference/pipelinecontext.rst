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

+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`addTextureBuffer<api_PipelineContext_1492503b>` (Texture * texture)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      :ref:`CommandBuffer<api_CommandBuffer>` * | :ref:`buffer<api_PipelineContext_153b8097>` () const                                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`cameraReset<api_PipelineContext_fcd87415>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
| std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & | :ref:`culledPostEffectSettings<api_PipelineContext_be0f7dc4>` ()                                                                               |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`culledRenderables<api_PipelineContext_dc219fbe>` ()                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Camera<api_Camera>` * | :ref:`currentCamera<api_PipelineContext_e4f0126a>` () const                                                                                    |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`RenderTarget<api_RenderTarget>` * | :ref:`defaultTarget<api_PipelineContext_4db03c91>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`frustumCulling<api_PipelineContext_6f5be801>` (const Frustum & frustum, const RenderList & in, RenderList & out, AABBox * box = nullptr) |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`insertRenderTask<api_PipelineContext_7091cab8>` (PipelineTask * task, PipelineTask * before = nullptr)                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`invalidateTasks<api_PipelineContext_4e920b1d>` ()                                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                               const std::list<PipelineTask :ref:`*><api_*>>` & | :ref:`renderTasks<api_PipelineContext_7adb2f40>` () const                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     StringList | :ref:`renderTextures<api_PipelineContext_9abf012e>` () const                                                                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`resize<api_PipelineContext_c9be7286>` (int32_t  width, int32_t  height)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`resultTexture<api_PipelineContext_cb54f312>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                      LightList | :ref:`sceneLights<api_PipelineContext_84b7a130>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`sceneRenderables<api_PipelineContext_12fb7e43>` ()                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setCurrentCamera<api_PipelineContext_7432ad81>` (Camera * camera)                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setDefaultTarget<api_PipelineContext_d4ba28f1>` (RenderTarget * target)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setPipeline<api_PipelineContext_45637fda>` (Pipeline * pipeline)                                                                         |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setWorld<api_PipelineContext_85364e1a>` (World * world)                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Vector2<api_Vector2>` | :ref:`size<api_PipelineContext_6d503e14>` () const                                                                                             |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`subscribePost<api_PipelineContext_28c705e4>` (PipelineContext::RenderCallback  callback, void * object)                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`textureBuffer<api_PipelineContext_9d602eb1>` (const TString & name)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`unsubscribePost<api_PipelineContext_36720adb>` (void * object)                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`World<api_World>` * | :ref:`world<api_PipelineContext_629451eb>` ()                                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`AABBox<api_AABBox>` | :ref:`worldBound<api_PipelineContext_743e861a>` () const                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineContext_static:

Static Methods
--------------

+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultCube<api_PipelineContext_0e4b8512>` ()  |
+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultPlane<api_PipelineContext_7f481ba0>` () |
+--------------------------------+------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`whiteTexture<api_PipelineContext_f920d7ce>` () |
+--------------------------------+------------------------------------------------------+

.. _api_PipelineContext_methods:

Methods Description
-------------------

.. _api_PipelineContext_1492503b:

 void **PipelineContext::addTextureBuffer** (:ref:`Texture<api_Texture>` * *texture*)

Adds a *texture* buffer to the global textures in the command buffer.

----

.. _api_PipelineContext_153b8097:

 :ref:`CommandBuffer<api_CommandBuffer>` * **PipelineContext::buffer** () const

Retrieves the command buffer associated with the pipeline context.

----

.. _api_PipelineContext_fcd87415:

 void **PipelineContext::cameraReset** ()

Resets the camera view and projection matrices in the command buffer.

----

.. _api_PipelineContext_be0f7dc4:

std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & **PipelineContext::culledPostEffectSettings** ()

Returns the list of filtered scene post effect settings relevant for rendering.

----

.. _api_PipelineContext_dc219fbe:

 RenderList **PipelineContext::culledRenderables** ()

Returns the list of culled scene components based on frustum culling.

----

.. _api_PipelineContext_e4f0126a:

 :ref:`Camera<api_Camera>` * **PipelineContext::currentCamera** () const

Returns the currently set camera for rendering.

**See also** setCurrentCamera().

----

.. _api_PipelineContext_0e4b8512:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultCube** ()

Return the default cube mesh used in rendering.

----

.. _api_PipelineContext_7f481ba0:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultPlane** ()

Retrieves the default plane mesh used in rendering.

----

.. _api_PipelineContext_4db03c91:

 :ref:`RenderTarget<api_RenderTarget>` * **PipelineContext::defaultTarget** ()

Returns the default render target associated with the pipeline context.

**See also** setDefaultTarget().

----

.. _api_PipelineContext_6f5be801:

 void **PipelineContext::frustumCulling** (:ref:`Frustum<api_Frustum>` & *frustum*, RenderList & *in*, RenderList & *out*, :ref:`AABBox<api_AABBox>` * *box* = nullptr)

Filters *out* an incoming *in* list which are not *in* the frustum. Returns filtered list. The output parameter returns a bounding *box* for filtered objects.

----

.. _api_PipelineContext_7091cab8:

 void **PipelineContext::insertRenderTask** (:ref:`PipelineTask<api_PipelineTask>` * *task*, :ref:`PipelineTask<api_PipelineTask>` * *before* = nullptr)

Inserts a rendering *task* into the pipeline context. Optionally, specifies the *task* to insert before.

----

.. _api_PipelineContext_4e920b1d:

 void **PipelineContext::invalidateTasks** ()

Invalidates all the pipeline tasks to let them to reestablish connections.

----

.. _api_PipelineContext_7adb2f40:

const std::list<PipelineTask :ref:`*><api_*>>` & **PipelineContext::renderTasks** () const

Returns the list of rendering tasks associated with the pipeline context.

----

.. _api_PipelineContext_9abf012e:

 StringList **PipelineContext::renderTextures** () const

Returns a list of names of the global textures.

----

.. _api_PipelineContext_c9be7286:

 void **PipelineContext::resize** (int32_t  *width*, int32_t  *height*)

Resizes the pipeline context to the specified *width* and height. Updates render tasks accordingly.

----

.. _api_PipelineContext_cb54f312:

 :ref:`Texture<api_Texture>` * **PipelineContext::resultTexture** ()

Returns the resulting texture containing the rendering result.

----

.. _api_PipelineContext_84b7a130:

 LightList **PipelineContext::sceneLights** ()

Returns the list of scene lights relevant for rendering.

----

.. _api_PipelineContext_12fb7e43:

 RenderList **PipelineContext::sceneRenderables** ()

Returns the list of scene components relevant for rendering.

----

.. _api_PipelineContext_7432ad81:

 void **PipelineContext::setCurrentCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets the current *camera* and updates associated matrices in the command buffer.

**See also** currentCamera().

----

.. _api_PipelineContext_d4ba28f1:

 void **PipelineContext::setDefaultTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*)

Sets the default render *target* for the pipeline context.

**See also** defaultTarget().

----

.. _api_PipelineContext_45637fda:

 void **PipelineContext::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Sets the rendering *pipeline* for the context, creating and linking associated rendering tasks.

----

.. _api_PipelineContext_85364e1a:

 void **PipelineContext::setWorld** (:ref:`World<api_World>` * *world*)

Sets the curent *world* instance to process.

**See also** world().

----

.. _api_PipelineContext_6d503e14:

 :ref:`Vector2<api_Vector2>`  **PipelineContext::size** () const

Returns screen size

----

.. _api_PipelineContext_28c705e4:

 void **PipelineContext::subscribePost** (:ref:`PipelineContext::RenderCallback<api_PipelineContext_RenderCallback>`  *callback*, void * *object*)

Subscribes *callback* for *object* to handle post rendering step.

----

.. _api_PipelineContext_9d602eb1:

 :ref:`Texture<api_Texture>` * **PipelineContext::textureBuffer** (:ref:`TString<api_TString>` & *name*)

Returns a texture buffer based on its name.

----

.. _api_PipelineContext_36720adb:

 void **PipelineContext::unsubscribePost** (void * *object*)

Unsubscribes an *object* to stop handle post rendering step.

----

.. _api_PipelineContext_f920d7ce:

 :ref:`Texture<api_Texture>` * **PipelineContext::whiteTexture** ()

Return the white texture used in rendering.

----

.. _api_PipelineContext_629451eb:

 :ref:`World<api_World>` * **PipelineContext::world** ()

Returns the curent world instance to process.

**See also** setWorld().

----

.. _api_PipelineContext_743e861a:

 :ref:`AABBox<api_AABBox>`  **PipelineContext::worldBound** () const

Returns the bounding box representing the world-bound.


