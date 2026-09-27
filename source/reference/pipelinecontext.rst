.. _api_PipelineContext:

PipelineContext
===============

Inherited: :ref:`Object<api_Object>`

.. _api_PipelineContext_description:

Description
-----------

PipelineContext is a class responsible for managing the rendering pipeline context, including rendering tasks, camera settings, and post-processing effects.



.. _api_PipelineContext_public:

Public Methods
--------------

+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`addTextureBuffer<api_PipelineContext_c8dab347>` (Texture * texture)                                              |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                      :ref:`CommandBuffer<api_CommandBuffer>` * | :ref:`buffer<api_PipelineContext_0792fc1d>` () const                                                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`cameraReset<api_PipelineContext_f0bced5a>` ()                                                                    |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & | :ref:`culledPostEffectSettings<api_PipelineContext_24690a7e>` ()                                                       |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`culledRenderables<api_PipelineContext_8ae90c64>` ()                                                              |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Camera<api_Camera>` * | :ref:`currentCamera<api_PipelineContext_eb1a4cd0>` () const                                                            |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                        :ref:`RenderTarget<api_RenderTarget>` * | :ref:`defaultTarget<api_PipelineContext_c38a2109>` ()                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`frustumCulling<api_PipelineContext_fa958e26>` (const Frustum & frustum, const RenderList & in, RenderList & out) |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`insertRenderTask<api_PipelineContext_284e53a9>` (PipelineTask * task, PipelineTask * before = nullptr)           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`invalidateTasks<api_PipelineContext_4b183a95>` ()                                                                |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                               const std::list<PipelineTask :ref:`*><api_*>>` & | :ref:`renderTasks<api_PipelineContext_749c1da3>` () const                                                              |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                     StringList | :ref:`renderTextures<api_PipelineContext_d0abe159>` () const                                                           |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`resize<api_PipelineContext_fdac8642>` (int32_t  width, int32_t  height)                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`resultTexture<api_PipelineContext_b01637e8>` ()                                                                  |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                      LightList | :ref:`sceneLights<api_PipelineContext_d9e06fb2>` ()                                                                    |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                     RenderList | :ref:`sceneRenderables<api_PipelineContext_104c3b7d>` ()                                                               |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setCurrentCamera<api_PipelineContext_1a927e4d>` (Camera * camera)                                                |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setDefaultTarget<api_PipelineContext_c47b68d3>` (RenderTarget * target)                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setPipeline<api_PipelineContext_897d05e6>` (Pipeline * pipeline)                                                 |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`setWorld<api_PipelineContext_b7e1529d>` (World * world)                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                    :ref:`Vector2<api_Vector2>` | :ref:`size<api_PipelineContext_2d6c71e5>` () const                                                                     |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`subscribePost<api_PipelineContext_7c6be529>` (PipelineContext::RenderCallback  callback, void * object)          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                  :ref:`Texture<api_Texture>` * | :ref:`textureBuffer<api_PipelineContext_7623dc0e>` (const TString & name)                                              |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                                           void | :ref:`unsubscribePost<api_PipelineContext_f79c236a>` (void * object)                                                   |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                                      :ref:`World<api_World>` * | :ref:`world<api_PipelineContext_08a6253e>` ()                                                                          |
+--------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+



.. _api_PipelineContext_static:

Static Methods
--------------

+--------------------------------+--------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultCube<api_PipelineContext_3af2061d>` ()    |
+--------------------------------+--------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`defaultPlane<api_PipelineContext_7845f3cb>` ()   |
+--------------------------------+--------------------------------------------------------+
|                        int32_t | :ref:`lod<api_PipelineContext_08c7e46d>` (float  size) |
+--------------------------------+--------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`whiteTexture<api_PipelineContext_fcb3740a>` ()   |
+--------------------------------+--------------------------------------------------------+

.. _api_PipelineContext_methods:

Methods Description
-------------------

.. _api_PipelineContext_c8dab347:

 void **PipelineContext::addTextureBuffer** (:ref:`Texture<api_Texture>` * *texture*)

Adds a *texture* buffer to the global textures in the command buffer.

----

.. _api_PipelineContext_0792fc1d:

 :ref:`CommandBuffer<api_CommandBuffer>` * **PipelineContext::buffer** () const

Retrieves the command buffer associated with the pipeline context.

----

.. _api_PipelineContext_f0bced5a:

 void **PipelineContext::cameraReset** ()

Resets the camera view and projection matrices in the command buffer.

----

.. _api_PipelineContext_24690a7e:

std::list<std::pair<const PostProcessSettings *, :ref:`float>><api_float>>>` & **PipelineContext::culledPostEffectSettings** ()

Returns the list of filtered scene post effect settings relevant for rendering.

----

.. _api_PipelineContext_8ae90c64:

 RenderList **PipelineContext::culledRenderables** ()

Returns the list of culled scene components based on frustum culling.

----

.. _api_PipelineContext_eb1a4cd0:

 :ref:`Camera<api_Camera>` * **PipelineContext::currentCamera** () const

Returns the currently set camera for rendering.

**See also** setCurrentCamera().

----

.. _api_PipelineContext_3af2061d:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultCube** ()

Return the default cube mesh used in rendering.

----

.. _api_PipelineContext_7845f3cb:

 :ref:`Mesh<api_Mesh>` * **PipelineContext::defaultPlane** ()

Retrieves the default plane mesh used in rendering.

----

.. _api_PipelineContext_c38a2109:

 :ref:`RenderTarget<api_RenderTarget>` * **PipelineContext::defaultTarget** ()

Returns the default render target associated with the pipeline context.

**See also** setDefaultTarget().

----

.. _api_PipelineContext_fa958e26:

 void **PipelineContext::frustumCulling** (:ref:`Frustum<api_Frustum>` & *frustum*, RenderList & *in*, RenderList & *out*)

Filters *out* an incoming *in* list which are not *in* the frustum. Returns filtered list.

----

.. _api_PipelineContext_284e53a9:

 void **PipelineContext::insertRenderTask** (:ref:`PipelineTask<api_PipelineTask>` * *task*, :ref:`PipelineTask<api_PipelineTask>` * *before* = nullptr)

Inserts a rendering *task* into the pipeline context. Optionally, specifies the *task* to insert before.

----

.. _api_PipelineContext_4b183a95:

 void **PipelineContext::invalidateTasks** ()

Invalidates all the pipeline tasks to let them to reestablish connections.

----

.. _api_PipelineContext_08c7e46d:

 int32_t **PipelineContext::lod** (float  *size*)

Returns LOD level based on normalized percentage screen *size* of object.

----

.. _api_PipelineContext_749c1da3:

const std::list<PipelineTask :ref:`*><api_*>>` & **PipelineContext::renderTasks** () const

Returns the list of rendering tasks associated with the pipeline context.

----

.. _api_PipelineContext_d0abe159:

 StringList **PipelineContext::renderTextures** () const

Returns a list of names of the global textures.

----

.. _api_PipelineContext_fdac8642:

 void **PipelineContext::resize** (int32_t  *width*, int32_t  *height*)

Resizes the pipeline context to the specified *width* and height. Updates render tasks accordingly.

----

.. _api_PipelineContext_b01637e8:

 :ref:`Texture<api_Texture>` * **PipelineContext::resultTexture** ()

Returns the resulting texture containing the rendering result.

----

.. _api_PipelineContext_d9e06fb2:

 LightList **PipelineContext::sceneLights** ()

Returns the list of scene lights relevant for rendering.

----

.. _api_PipelineContext_104c3b7d:

 RenderList **PipelineContext::sceneRenderables** ()

Returns the list of scene components relevant for rendering.

----

.. _api_PipelineContext_1a927e4d:

 void **PipelineContext::setCurrentCamera** (:ref:`Camera<api_Camera>` * *camera*)

Sets the current *camera* and updates associated matrices in the command buffer.

**See also** currentCamera().

----

.. _api_PipelineContext_c47b68d3:

 void **PipelineContext::setDefaultTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*)

Sets the default render *target* for the pipeline context.

**See also** defaultTarget().

----

.. _api_PipelineContext_897d05e6:

 void **PipelineContext::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Sets the rendering *pipeline* for the context, creating and linking associated rendering tasks.

----

.. _api_PipelineContext_b7e1529d:

 void **PipelineContext::setWorld** (:ref:`World<api_World>` * *world*)

Sets the curent *world* instance to process.

**See also** world().

----

.. _api_PipelineContext_2d6c71e5:

 :ref:`Vector2<api_Vector2>`  **PipelineContext::size** () const

Returns screen size

----

.. _api_PipelineContext_7c6be529:

 void **PipelineContext::subscribePost** (:ref:`PipelineContext::RenderCallback<api_PipelineContext_RenderCallback>`  *callback*, void * *object*)

Subscribes *callback* for *object* to handle post rendering step.

----

.. _api_PipelineContext_7623dc0e:

 :ref:`Texture<api_Texture>` * **PipelineContext::textureBuffer** (:ref:`TString<api_TString>` & *name*)

Returns a texture buffer based on its name.

----

.. _api_PipelineContext_f79c236a:

 void **PipelineContext::unsubscribePost** (void * *object*)

Unsubscribes an *object* to stop handle post rendering step.

----

.. _api_PipelineContext_fcb3740a:

 :ref:`Texture<api_Texture>` * **PipelineContext::whiteTexture** ()

Return the white texture used in rendering.

----

.. _api_PipelineContext_08a6253e:

 :ref:`World<api_World>` * **PipelineContext::world** ()

Returns the curent world instance to process.

**See also** setWorld().


