.. _api_MaterialInstance:

MaterialInstance
================

Inherited: None

.. _api_MaterialInstance_description:

Description
-----------

The MaterialInstance class enables customization of material parameters and textures for rendering objects. It supports various types of parameters, and the customization can be done per-instance.



.. _api_MaterialInstance_public:

Public Methods
--------------

+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                          int32_t | :ref:`finalPriority<api_MaterialInstance_caf47b80>` () const                                                   |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceCount<api_MaterialInstance_bc485df2>` () const                                                   |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceSize<api_MaterialInstance_659de037>` () const                                                    |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_MaterialInstance_7304c826>` () const                                                        |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`overrideTexture<api_MaterialInstance_e3c0b4d6>` (int32_t  binding, Texture * texture)                    |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                          int32_t | :ref:`priority<api_MaterialInstance_b37e9a18>` () const                                                        |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                        ByteArray | :ref:`rawUniformBuffer<api_MaterialInstance_d8a23e91>` ()                                                      |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBool<api_MaterialInstance_507fc2d6>` (const TString & name, const bool * value)                       |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBufferValue<api_MaterialInstance_c459802a>` (const TString & name, const void * value)                |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setFloat<api_MaterialInstance_6271afec>` (const TString & name, const float * value)                     |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceBuffer<api_MaterialInstance_517402fe>` (const ByteArray * buffer)                             |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceCount<api_MaterialInstance_06cd2f74>` (uint32_t  number)                                      |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInteger<api_MaterialInstance_a7e249d1>` (const TString & name, const int32_t * value)                 |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setMatrix4<api_MaterialInstance_a1e396d7>` (const TString & name, const Matrix4 * value)                 |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setPriority<api_MaterialInstance_b693a1cf>` (int32_t  priority)                                          |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSkinSize<api_MaterialInstance_1e03658f>` (uint32_t  size)                                             |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSurfaceType<api_MaterialInstance_7160de5c>` (uint16_t  type)                                          |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTexture<api_MaterialInstance_af62ce10>` (const TString & name, Texture * texture)                     |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTransform<api_MaterialInstance_6e29105b>` (const Matrix4 & transform, uint32_t  uuid, uint32_t  hash) |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector2<api_MaterialInstance_e0b9c75d>` (const TString & name, const Vector2 * value)                 |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector3<api_MaterialInstance_b214d798>` (const TString & name, const Vector3 * value)                 |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector4<api_MaterialInstance_1538f67a>` (const TString & name, const Vector4 * value)                 |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|                         uint16_t | :ref:`surfaceType<api_MaterialInstance_a68491fd>` () const                                                     |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+
|    :ref:`Texture<api_Texture>` * | :ref:`texture<api_MaterialInstance_8f752c16>` (CommandBuffer & buffer, int32_t  binding)                       |
+----------------------------------+----------------------------------------------------------------------------------------------------------------+



.. _api_MaterialInstance_static:

Static Methods
--------------

None

.. _api_MaterialInstance_methods:

Methods Description
-------------------

.. _api_MaterialInstance_caf47b80:

 int32_t **MaterialInstance::finalPriority** () const

Returns the final material instance priority used for sorting of rendering queue. Calculated as Material::priority + priority

----

.. _api_MaterialInstance_bc485df2:

 uint32_t **MaterialInstance::instanceCount** () const

Returns the number of GPU instances to be rendered.

**See also** setInstanceCount().

----

.. _api_MaterialInstance_659de037:

 uint32_t **MaterialInstance::instanceSize** () const

Returns a size of data for instances.

----

.. _api_MaterialInstance_7304c826:

 :ref:`Material<api_Material>` * **MaterialInstance::material** () const

Getter for the base material associated with the instance.

----

.. _api_MaterialInstance_e3c0b4d6:

 void **MaterialInstance::overrideTexture** (int32_t  *binding*, :ref:`Texture<api_Texture>` * *texture*)

Overrides the *texture* for the specified shader *binding* point.

----

.. _api_MaterialInstance_b37e9a18:

 int32_t **MaterialInstance::priority** () const

Returns the instance priority.

**See also** setPriority().

----

.. _api_MaterialInstance_d8a23e91:

 ByteArray **MaterialInstance::rawUniformBuffer** ()

Returns a reference to CPU part of uniform buffer. Developer can modify it for their needs.

----

.. _api_MaterialInstance_507fc2d6:

 void **MaterialInstance::setBool** (:ref:`TString<api_TString>` & *name*, bool * *value*)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean values.

----

.. _api_MaterialInstance_c459802a:

 void **MaterialInstance::setBufferValue** (:ref:`TString<api_TString>` & *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_MaterialInstance_6271afec:

 void **MaterialInstance::setFloat** (:ref:`TString<api_TString>` & *name*, float * *value*)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float values.

----

.. _api_MaterialInstance_517402fe:

 void **MaterialInstance::setInstanceBuffer** (ByteArray * *buffer*)

Sets instances buffer.

----

.. _api_MaterialInstance_06cd2f74:

 void **MaterialInstance::setInstanceCount** (uint32_t  *number*)

Sets the *number* of GPU instances to be rendered.

**See also** instanceCount().

----

.. _api_MaterialInstance_a7e249d1:

 void **MaterialInstance::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t * *value*)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer values.

----

.. _api_MaterialInstance_a1e396d7:

 void **MaterialInstance::setMatrix4** (:ref:`TString<api_TString>` & *name*, :ref:`Matrix4<api_Matrix4>` * *value*)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 values.

----

.. _api_MaterialInstance_b693a1cf:

 void **MaterialInstance::setPriority** (int32_t  *priority*)

Sets the instance priority.

**See also** priority().

----

.. _api_MaterialInstance_1e03658f:

 void **MaterialInstance::setSkinSize** (uint32_t  *size*)

Sets the skinned mesh bones buffer size. This buffer must be recorded to the end of instance data structure (after all uniforms).

----

.. _api_MaterialInstance_7160de5c:

 void **MaterialInstance::setSurfaceType** (uint16_t  *type*)

Sets the surface *type* associated with the material instance.

**See also** surfaceType().

----

.. _api_MaterialInstance_af62ce10:

 void **MaterialInstance::setTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified name.

**See also** texture().

----

.. _api_MaterialInstance_6e29105b:

 void **MaterialInstance::setTransform** (:ref:`Matrix4<api_Matrix4>` & *transform*, uint32_t  *uuid*, uint32_t  *hash*)

Sets the *transform* matrix. The update is performed only when the *hash* value differs from the currently stored transformation hash.

A *uuid* used to generate an identifying color. If zero, no color embedding is performed.

----

.. _api_MaterialInstance_e0b9c75d:

 void **MaterialInstance::setVector2** (:ref:`TString<api_TString>` & *name*, :ref:`Vector2<api_Vector2>` * *value*)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 values.

----

.. _api_MaterialInstance_b214d798:

 void **MaterialInstance::setVector3** (:ref:`TString<api_TString>` & *name*, :ref:`Vector3<api_Vector3>` * *value*)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 values.

----

.. _api_MaterialInstance_1538f67a:

 void **MaterialInstance::setVector4** (:ref:`TString<api_TString>` & *name*, :ref:`Vector4<api_Vector4>` * *value*)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 values.

----

.. _api_MaterialInstance_a68491fd:

 uint16_t **MaterialInstance::surfaceType** () const

Gets the surface type associated with the material instance.

**See also** setSurfaceType().

----

.. _api_MaterialInstance_8f752c16:

 :ref:`Texture<api_Texture>` * **MaterialInstance::texture** (:ref:`CommandBuffer<api_CommandBuffer>` & *buffer*, int32_t  *binding*)

Getter for the overridden texture associated with a specific parameter *binding* point.

The command *buffer* used for texture resolution and resource access.

**See also** setTexture().


