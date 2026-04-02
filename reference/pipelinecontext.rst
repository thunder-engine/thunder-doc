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
|                                                                           void | :ref:`addTextureBuffer<api_PipelineContext_5814eb9f>` (Texture * texture)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      :ref:`CommandBuffer<api_CommandBuffer>` * | :ref:`buffer<api_PipelineContext_be67c2f5>` () const                                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`cameraReset<api_PipelineContext_18256ac7>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
| std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & | :ref:`culledPostEffectSettings<api_PipelineContext_bf8a9d41>` ()                                                                               |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            :ref:`RenderList<api_RenderList>` & | :ref:`culledRenderables<api_PipelineContext_16c38f0e>` ()                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Camera<api_Camera>` * | :ref:`currentCamera<api_PipelineContext_48a1c2f9>` () const                                                                                    |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`RenderTarget<api_RenderTarget>` * | :ref:`defaultTarget<api_PipelineContext_ad17f2bc>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`frustumCulling<api_PipelineContext_c92ea3f4>` (const Frustum & frustum, const RenderList & in, RenderList & out, AABBox * box = nullptr) |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`insertRenderTask<api_PipelineContext_2e8f3ca0>` (PipelineTask * task, PipelineTask * before = nullptr)                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`invalidateTasks<api_PipelineContext_98a3d06e>` ()                                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                               const std::list<PipelineTask :ref:`*><api_*>>` & | :ref:`renderTasks<api_PipelineContext_7f20bc3e>` () const                                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                              :ref:`StringList<api_StringList>` | :ref:`renderTextures<api_PipelineContext_fb63c2d1>` () const                                                                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`resize<api_PipelineContext_d192c7b0>` (int32_t  width, int32_t  height)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`resultTexture<api_PipelineContext_f6183ad2>` ()                                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                              :ref:`LightList<api_LightList>` & | :ref:`sceneLights<api_PipelineContext_160fe352>` ()                                                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                            :ref:`RenderList<api_RenderList>` & | :ref:`sceneRenderables<api_PipelineContext_52ea9f67>` ()                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setCurrentCamera<api_PipelineContext_105e927f>` (Camera * camera)                                                                        |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setDefaultTarget<api_PipelineContext_25c81ad7>` (RenderTarget * target)                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setPipeline<api_PipelineContext_fa1264b9>` (Pipeline * pipeline)                                                                         |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setWorld<api_PipelineContext_c7a05398>` (World * world)                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Vector2<api_Vector2>` | :ref:`size<api_PipelineContext_cb6ad45f>` () const                                                                                             |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`subscribePost<api_PipelineContext_d63498a5>` (PipelineContext::RenderCallback  callback, void * object)                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`textureBuffer<api_PipelineContext_8947062f>` (const TString & name)                                                                      |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`unsubscribePost<api_PipelineContext_b21f354d>` (void * object)                                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`World<api_World>` * | :ref:`world<api_PipelineContext_e927136f>` ()                                                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`AABBox<api_AABBox>` | :ref:`worldBound<api_PipelineContext_2a061ce9>` () const                                                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineContext_static:

Static Methods
--------------

+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultCube<api_PipelineContext_c67a0d14>` ()  |
+--------------------------------+------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultPlane<api_PipelineContext_b0854ae2>` () |
+--------------------------------+------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`whiteTexture<api_PipelineContext_743dbafe>` () |
+--------------------------------+------------------------------------------------------+

.. _api_PipelineContext_methods:

Methods Description
-------------------

.. _api_PipelineContext_5814eb9f:

 void **PipelineContext::addTextureBuffer** (:ref:`Texture<api_Texture>` * *texture*)

Adds a *texture* buffer to the global *texture*s in the command buffer.

----

.. _api_PipelineContext_be67c2f5:

 :ref:`CommandBuffer<api_CommandBuffer>` * **PipelineContext::buffer** () const

Retrieves the command buffer associated with the pipeline context.

----

.. _api_PipelineContext_18256ac7:

 void **PipelineContext::cameraReset** ()

Resets the camera view and projection matrices in the command buffer.

----

.. _api_PipelineContext_bf8a9d41:

std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & **PipelineContext::culledPostEffectSettings** ()

Returns the list of filtered scene post effect settings relevant for rendering.

----

.. _api_PipelineContext_16c38f0e:

 :ref:`RenderList<api_RenderList>` & **PipelineContext::culledRenderables** ()

Returns the list of culled scene components based on frustum culling.

----

.. _api_PipelineContext_48a1c2f9:

 :ref:`Camera<api_Camera>` * **PipelineContext::currentCamera** () const

Returns the currently set camera for rendering.

**See also** setCurrentCamera().

----

.. _api_PipelineContext_c67a0d14:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultCube** ()

Return the default cube mesh used in rendering.

----

.. _api_PipelineContext_b0854ae2:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultPlane** ()

Retrieves the default plane mesh used in rendering.

----

.. _api_PipelineContext_ad17f2bc:

 :ref:`RenderTarget<api_RenderTarget>` * **PipelineContext::defaultTarget** ()

Returns the default render target associated with the pipeline context.

**See also** setDefaultTarget().

----

.. _api_PipelineContext_c92ea3f4:

 void **PipelineContext::frustumCulling** (:ref:`Frustum<api_Frustum>` & *frustum*, :ref:`RenderList<api_RenderList>` & *in*, :ref:`RenderList<api_RenderList>` & *out*, :ref:`AABBox<api_AABBox>` * *box* = nullptr)

Filters *out* an *in*coming *in* list which are not *in* the *frustum*. Returns filtered list. The *out*put parameter returns a bounding *box* for filtered objects.

----

.. _api_PipelineContext_2e8f3ca0:

 void **PipelineContext::insertRenderTask** (:ref:`PipelineTask<api_PipelineTask>` * *task*, :ref:`PipelineTask<api_PipelineTask>` * *before* = nullptr)

Inserts a rendering *task* into the pipeline context. Optionally, specifies the *task* to insert *before*.

----

.. _api_PipelineContext_98a3d06e:

 void **PipelineContext::invalidateTasks** ()

Invalidates all the pipeline tasks to let them to reestablish connections.

----

.. _api_PipelineContext_7f20bc3e:

const std::list<PipelineTask :ref:`*><api_*>>` & **PipelineContext::renderTasks** () const

Returns the list of rendering tasks associated with the pipeline context.

----

.. _api_PipelineContext_fb63c2d1:

 :ref:`StringList<api_StringList>`  **PipelineContext::renderTextures** () const

Returns a list of names of the global textures.

----

.. _api_PipelineContext_d192c7b0:

 void **PipelineContext::resize** (int32_t  *width*, int32_t  *height*)

Resizes the pipeline context to the specified *width* and *height*. Updates render tasks accordingly.

----

.. _api_PipelineContext_f6183ad2:

 :ref:`Texture<api_Texture>` * **PipelineContext::resultTexture** ()

Returns the resulting texture containing the rendering result.

----

.. _api_PipelineContext_160fe352:

 :ref:`LightList<api_LightList>` & **PipelineContext::sceneLights** ()

Returns the list of scene lights relevant for rendering.

----

.. _api_PipelineContext_52ea9f67:

 :ref:`RenderList<api_RenderList>` & **PipelineContext::sceneRenderables** ()

Returns the list of scene components relevant for rendering.

----

.. _api_PipelineContext_105e927f:

 void **PipelineContext::setCurrentCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets the current *camera* and updates associated matrices in the command buffer.

**See also** currentCamera().

----

.. _api_PipelineContext_25c81ad7:

 void **PipelineContext::setDefaultTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*)

Sets the default render *target* for the pipeline context.

**See also** defaultTarget().

----

.. _api_PipelineContext_fa1264b9:

 void **PipelineContext::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Sets the rendering *pipeline* for the context, creating and linking associated rendering tasks.

----

.. _api_PipelineContext_c7a05398:

 void **PipelineContext::setWorld** (:ref:`World<api_World>` * *world*)

Sets the curent *world* instance to process.

**See also** *world*().

----

.. _api_PipelineContext_cb6ad45f:

 :ref:`Vector2<api_Vector2>`  **PipelineContext::size** () const

Returns screen size

----

.. _api_PipelineContext_d63498a5:

 void **PipelineContext::subscribePost** (:ref:`PipelineContext::RenderCallback<api_PipelineContext::RenderCallback>`  *callback*, void * *object*)

Subscribes *callback* for *object* to handle post rendering step.

----

.. _api_PipelineContext_8947062f:

 :ref:`Texture<api_Texture>` * **PipelineContext::textureBuffer** (:ref:`TString<api_TString>` & *name*)

Returns a texture buffer based on its *name*.

----

.. _api_PipelineContext_b21f354d:

 void **PipelineContext::unsubscribePost** (void * *object*)

Unsubscribes an *object* to stop handle post rendering step.

----

.. _api_PipelineContext_743dbafe:

 :ref:`Texture<api_Texture>` * **PipelineContext::whiteTexture** ()

Return the white texture used in rendering.

----

.. _api_PipelineContext_e927136f:

 :ref:`World<api_World>` * **PipelineContext::world** ()

Returns the curent world instance to process.

**See also** setWorld().

----

.. _api_PipelineContext_2a061ce9:

 :ref:`AABBox<api_AABBox>`  **PipelineContext::worldBound** () const

Returns the bounding box representing the world-bound.


