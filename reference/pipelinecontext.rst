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
|                                                                           void | :ref:`addTextureBuffer<api_PipelineContext_613b5a7f>` (Texture * texture)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      :ref:`CommandBuffer<api_CommandBuffer>` * | :ref:`buffer<api_PipelineContext_5eb4a0cd>` () const                                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`cameraReset<api_PipelineContext_79180ec6>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
| std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & | :ref:`culledPostEffectSettings<api_PipelineContext_ca347e8b>` ()                                                                               |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`culledRenderables<api_PipelineContext_95daf7e1>` ()                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Camera<api_Camera>` * | :ref:`currentCamera<api_PipelineContext_e8c3b0d1>` () const                                                                                    |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`RenderTarget<api_RenderTarget>` * | :ref:`defaultTarget<api_PipelineContext_4b362c5f>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`frustumCulling<api_PipelineContext_d948f106>` (const Frustum & frustum, const RenderList & in, RenderList & out, AABBox * box = nullptr) |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`insertRenderTask<api_PipelineContext_b29358cf>` (PipelineTask * task, PipelineTask * before = nullptr)                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`invalidateTasks<api_PipelineContext_4ac10fb3>` ()                                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                               const std::list<PipelineTask :ref:`*><api_*>>` & | :ref:`renderTasks<api_PipelineContext_c348bd67>` () const                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     StringList | :ref:`renderTextures<api_PipelineContext_75b901f2>` () const                                                                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`resize<api_PipelineContext_0c48527f>` (int32_t  width, int32_t  height)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`resultTexture<api_PipelineContext_eb2180f4>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                      LightList | :ref:`sceneLights<api_PipelineContext_cb548e7a>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`sceneRenderables<api_PipelineContext_5846ad2f>` ()                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setCurrentCamera<api_PipelineContext_852dac41>` (Camera * camera)                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setDefaultTarget<api_PipelineContext_df140e37>` (RenderTarget * target)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setPipeline<api_PipelineContext_7d061482>` (Pipeline * pipeline)                                                                         |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setWorld<api_PipelineContext_6a579c23>` (World * world)                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Vector2<api_Vector2>` | :ref:`size<api_PipelineContext_49e2afb8>` () const                                                                                             |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`subscribePost<api_PipelineContext_b6cd57a1>` (PipelineContext::RenderCallback  callback, void * object)                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`textureBuffer<api_PipelineContext_64835ef0>` (const TString & name)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`unsubscribePost<api_PipelineContext_f2634805>` (void * object)                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`World<api_World>` * | :ref:`world<api_PipelineContext_f3a78eb6>` ()                                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`AABBox<api_AABBox>` | :ref:`worldBound<api_PipelineContext_b3d71af8>` () const                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineContext_static:

Static Methods
--------------

+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultCube<api_PipelineContext_f5cb81d9>` ()  |
+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultPlane<api_PipelineContext_56783f1c>` () |
+--------------------------------+------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`whiteTexture<api_PipelineContext_2ed96831>` () |
+--------------------------------+------------------------------------------------------+

.. _api_PipelineContext_methods:

Methods Description
-------------------

.. _api_PipelineContext_613b5a7f:

 void **PipelineContext::addTextureBuffer** (:ref:`Texture<api_Texture>` * *texture*)

Adds a *texture* buffer to the global textures in the command buffer.

----

.. _api_PipelineContext_5eb4a0cd:

 :ref:`CommandBuffer<api_CommandBuffer>` * **PipelineContext::buffer** () const

Retrieves the command buffer associated with the pipeline context.

----

.. _api_PipelineContext_79180ec6:

 void **PipelineContext::cameraReset** ()

Resets the camera view and projection matrices in the command buffer.

----

.. _api_PipelineContext_ca347e8b:

std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & **PipelineContext::culledPostEffectSettings** ()

Returns the list of filtered scene post effect settings relevant for rendering.

----

.. _api_PipelineContext_95daf7e1:

 RenderList **PipelineContext::culledRenderables** ()

Returns the list of culled scene components based on frustum culling.

----

.. _api_PipelineContext_e8c3b0d1:

 :ref:`Camera<api_Camera>` * **PipelineContext::currentCamera** () const

Returns the currently set camera for rendering.

**See also** setCurrentCamera().

----

.. _api_PipelineContext_f5cb81d9:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultCube** ()

Return the default cube mesh used in rendering.

----

.. _api_PipelineContext_56783f1c:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultPlane** ()

Retrieves the default plane mesh used in rendering.

----

.. _api_PipelineContext_4b362c5f:

 :ref:`RenderTarget<api_RenderTarget>` * **PipelineContext::defaultTarget** ()

Returns the default render target associated with the pipeline context.

**See also** setDefaultTarget().

----

.. _api_PipelineContext_d948f106:

 void **PipelineContext::frustumCulling** (:ref:`Frustum<api_Frustum>` & *frustum*, RenderList & *in*, RenderList & *out*, :ref:`AABBox<api_AABBox>` * *box* = nullptr)

Filters *out* an incoming *in* list which are not *in* the frustum. Returns filtered list. The output parameter returns a bounding *box* for filtered objects.

----

.. _api_PipelineContext_b29358cf:

 void **PipelineContext::insertRenderTask** (:ref:`PipelineTask<api_PipelineTask>` * *task*, :ref:`PipelineTask<api_PipelineTask>` * *before* = nullptr)

Inserts a rendering *task* into the pipeline context. Optionally, specifies the *task* to insert before.

----

.. _api_PipelineContext_4ac10fb3:

 void **PipelineContext::invalidateTasks** ()

Invalidates all the pipeline tasks to let them to reestablish connections.

----

.. _api_PipelineContext_c348bd67:

const std::list<PipelineTask :ref:`*><api_*>>` & **PipelineContext::renderTasks** () const

Returns the list of rendering tasks associated with the pipeline context.

----

.. _api_PipelineContext_75b901f2:

 StringList **PipelineContext::renderTextures** () const

Returns a list of names of the global textures.

----

.. _api_PipelineContext_0c48527f:

 void **PipelineContext::resize** (int32_t  *width*, int32_t  *height*)

Resizes the pipeline context to the specified *width* and height. Updates render tasks accordingly.

----

.. _api_PipelineContext_eb2180f4:

 :ref:`Texture<api_Texture>` * **PipelineContext::resultTexture** ()

Returns the resulting texture containing the rendering result.

----

.. _api_PipelineContext_cb548e7a:

 LightList **PipelineContext::sceneLights** ()

Returns the list of scene lights relevant for rendering.

----

.. _api_PipelineContext_5846ad2f:

 RenderList **PipelineContext::sceneRenderables** ()

Returns the list of scene components relevant for rendering.

----

.. _api_PipelineContext_852dac41:

 void **PipelineContext::setCurrentCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets the current *camera* and updates associated matrices in the command buffer.

**See also** currentCamera().

----

.. _api_PipelineContext_df140e37:

 void **PipelineContext::setDefaultTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*)

Sets the default render *target* for the pipeline context.

**See also** defaultTarget().

----

.. _api_PipelineContext_7d061482:

 void **PipelineContext::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Sets the rendering *pipeline* for the context, creating and linking associated rendering tasks.

----

.. _api_PipelineContext_6a579c23:

 void **PipelineContext::setWorld** (:ref:`World<api_World>` * *world*)

Sets the curent *world* instance to process.

**See also** world().

----

.. _api_PipelineContext_49e2afb8:

 :ref:`Vector2<api_Vector2>`  **PipelineContext::size** () const

Returns screen size

----

.. _api_PipelineContext_b6cd57a1:

 void **PipelineContext::subscribePost** (:ref:`PipelineContext::RenderCallback<api_PipelineContext_RenderCallback>`  *callback*, void * *object*)

Subscribes *callback* for *object* to handle post rendering step.

----

.. _api_PipelineContext_64835ef0:

 :ref:`Texture<api_Texture>` * **PipelineContext::textureBuffer** (:ref:`TString<api_TString>` & *name*)

Returns a texture buffer based on its name.

----

.. _api_PipelineContext_f2634805:

 void **PipelineContext::unsubscribePost** (void * *object*)

Unsubscribes an *object* to stop handle post rendering step.

----

.. _api_PipelineContext_2ed96831:

 :ref:`Texture<api_Texture>` * **PipelineContext::whiteTexture** ()

Return the white texture used in rendering.

----

.. _api_PipelineContext_f3a78eb6:

 :ref:`World<api_World>` * **PipelineContext::world** ()

Returns the curent world instance to process.

**See also** setWorld().

----

.. _api_PipelineContext_b3d71af8:

 :ref:`AABBox<api_AABBox>`  **PipelineContext::worldBound** () const

Returns the bounding box representing the world-bound.


