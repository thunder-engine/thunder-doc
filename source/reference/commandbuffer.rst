.. _api_CommandBuffer:

CommandBuffer
=============

Inherited: :ref:`Object<api_Object>`

.. _api_CommandBuffer_description:

Description
-----------

The CommandBuffer class represents a command buffer used in a graphics rendering pipeline. It provides methods for issuing rendering commands, setting global parameters, and managing textures.



.. _api_CommandBuffer_public:

Public Methods
--------------

+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`beginDebugMarker<api_CommandBuffer_0164d39c>` (const TString & name)                                                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`disableScissor<api_CommandBuffer_81d375ce>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`dispatchCompute<api_CommandBuffer_62f43e5b>` (ComputeInstance & shader, int32_t  groupsX, int32_t  groupsY, int32_t  groupsZ) |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`drawMesh<api_CommandBuffer_26f0ce78>` (Mesh * mesh, uint32_t  sub, uint32_t  layer, MaterialInstance & instance)              |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`enableScissor<api_CommandBuffer_a17ed9b6>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                          |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`endDebugMarker<api_CommandBuffer_8127d3a6>` ()                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`flipResult<api_CommandBuffer_e624f7a1>` ()                                                                                    |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setCameraProperties<api_CommandBuffer_2e630dc4>` (Camera * camera)                                                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setGlobalTexture<api_CommandBuffer_c92e6d4a>` (const TString & name, Texture * texture)                                       |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setRenderTarget<api_CommandBuffer_031fa8e7>` (RenderTarget * target, uint32_t  level = 0)                                     |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewProjection<api_CommandBuffer_2af0b764>` (const Matrix4 & view, const Matrix4 & projection)                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewProjection<api_CommandBuffer_30c9781e>` (const Matrix4 & viewProjection)                                               |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setViewport<api_CommandBuffer_f53ad2be>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)                            |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_CommandBuffer_0183fedc>` (const TString & name) const                                                             |
+--------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+



.. _api_CommandBuffer_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`idToColor<api_CommandBuffer_537ac8b1>` (uint32_t  id) |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`isInited<api_CommandBuffer_768dc935>` ()              |
+------------------------------+-------------------------------------------------------------+

.. _api_CommandBuffer_methods:

Methods Description
-------------------

.. _api_CommandBuffer_0164d39c:

 void **CommandBuffer::beginDebugMarker** (:ref:`TString<api_TString>` & *name*)

Begins a debug marker with the specified name.

----

.. _api_CommandBuffer_81d375ce:

 void **CommandBuffer::disableScissor** ()

Disables scissor testing.

----

.. _api_CommandBuffer_62f43e5b:

 void **CommandBuffer::dispatchCompute** (:ref:`ComputeInstance<api_ComputeInstance>` & *shader*, int32_t  *groupsX*, int32_t  *groupsY*, int32_t  *groupsZ*)

Dispatches a compute *shader* with the specified workgroup dimensions. Parameters groupsX, *groupsY* and *groupsZ* alows to specify a size of workgroup in each demension.

----

.. _api_CommandBuffer_26f0ce78:

 void **CommandBuffer::drawMesh** (:ref:`Mesh<api_Mesh>` * *mesh*, uint32_t  *sub*, uint32_t  *layer*, :ref:`MaterialInstance<api_MaterialInstance>` & *instance*)

Draws a *mesh* with the specified *sub* *mesh* index with assigned material instance, and rendering layer.

----

.. _api_CommandBuffer_a17ed9b6:

 void **CommandBuffer::enableScissor** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Enables scissor testing with the specified parameters. Parameters *x* and *y* represents scissor coordinates. Parameters *width* and *height* scissor dimensions.

----

.. _api_CommandBuffer_8127d3a6:

 void **CommandBuffer::endDebugMarker** ()

Ends the current debug marker.

----

.. _api_CommandBuffer_e624f7a1:

 void **CommandBuffer::flipResult** ()

Filps the result of rendering.


**Note:** This is RHI specific function for Vulkan.


----

.. _api_CommandBuffer_537ac8b1:

 :ref:`Vector4<api_Vector4>`  **CommandBuffer::idToColor** (uint32_t  *id*)

Converts a 32-bit *id* to a Vector4 color.

----

.. _api_CommandBuffer_768dc935:

 bool **CommandBuffer::isInited** ()

Returns true if the CommandBuffer is initialized; otherwise, false.

----

.. _api_CommandBuffer_2e630dc4:

 void **CommandBuffer::setCameraProperties** (:ref:`Camera<api_Camera>` * *camera*)

Sets the *camera* specific global variables. This function sets up view, projection and clipping planes global shader variables.

----

.. _api_CommandBuffer_c92e6d4a:

 void **CommandBuffer::setGlobalTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a global *texture* based on its name.

----

.. _api_CommandBuffer_031fa8e7:

 void **CommandBuffer::setRenderTarget** (:ref:`RenderTarget<api_RenderTarget>` * *target*, uint32_t  *level* = 0)

Sets the render *target* for subsequent rendering commands. Parameter *level* specifies the Mipmap level.

----

.. _api_CommandBuffer_2af0b764:

 void **CommandBuffer::setViewProjection** (:ref:`Matrix4<api_Matrix4>` & *view*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Sets the *view* and *projection* matrices.

----

.. _api_CommandBuffer_30c9781e:

 void **CommandBuffer::setViewProjection** (:ref:`Matrix4<api_Matrix4>` & *viewProjection*)

Sets the *viewProjection* matrix.

----

.. _api_CommandBuffer_f53ad2be:

 void **CommandBuffer::setViewport** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets the viewport dimensions. Parameters *x* and *y* represents viewport coordinates. Parameters *width* and *height* viewport dimensions.

----

.. _api_CommandBuffer_0183fedc:

 :ref:`Texture<api_Texture>` * **CommandBuffer::texture** (:ref:`TString<api_TString>` & *name*) const

Retrieves a global texture based on its name.


