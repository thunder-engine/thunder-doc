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

+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                          int32_t | :ref:`finalPriority<api_MaterialInstance_621ce9a8>` () const                                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceCount<api_MaterialInstance_e42f1c5b>` () const                                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceSize<api_MaterialInstance_b675389e>` () const                                                        |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_MaterialInstance_84f2cbd0>` () const                                                            |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`overrideTexture<api_MaterialInstance_49b27d01>` (int32_t  binding, Texture * texture)                        |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                          int32_t | :ref:`priority<api_MaterialInstance_124bc9d3>` () const                                                            |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                        ByteArray | :ref:`rawUniformBuffer<api_MaterialInstance_826045b9>` ()                                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBool<api_MaterialInstance_f59ebc0d>` (const TString & name, const bool * value, int32_t  count = 1)       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBufferValue<api_MaterialInstance_b5724013>` (const TString & name, const void * value)                    |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setFloat<api_MaterialInstance_e54fb792>` (const TString & name, const float * value, int32_t  count = 1)     |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceBuffer<api_MaterialInstance_7d13e52c>` (ByteArray * buffer)                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceCount<api_MaterialInstance_0bd93fa8>` (uint32_t  number)                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInteger<api_MaterialInstance_c76b54a1>` (const TString & name, const int32_t * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setMatrix4<api_MaterialInstance_178569a0>` (const TString & name, const Matrix4 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setPriority<api_MaterialInstance_cb1874ed>` (int32_t  priority)                                              |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSkinSize<api_MaterialInstance_e1953d02>` (uint32_t  size)                                                 |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSurfaceType<api_MaterialInstance_34795dfc>` (uint16_t  type)                                              |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTexture<api_MaterialInstance_e05b629f>` (const TString & name, Texture * texture)                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTransform<api_MaterialInstance_3fce8795>` (Transform * transform)                                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTransform<api_MaterialInstance_0bd8769c>` (const Matrix4 & transform)                                     |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector2<api_MaterialInstance_f069b48a>` (const TString & name, const Vector2 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector3<api_MaterialInstance_eca61fb2>` (const TString & name, const Vector3 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector4<api_MaterialInstance_52b6a0ec>` (const TString & name, const Vector4 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint16_t | :ref:`surfaceType<api_MaterialInstance_92074a5f>` () const                                                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|    :ref:`Texture<api_Texture>` * | :ref:`texture<api_MaterialInstance_8921f7be>` (CommandBuffer & buffer, int32_t  binding)                           |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+



.. _api_MaterialInstance_static:

Static Methods
--------------

None

.. _api_MaterialInstance_methods:

Methods Description
-------------------

.. _api_MaterialInstance_621ce9a8:

 int32_t **MaterialInstance::finalPriority** () const

Returns the final material instance priority used for sorting of rendering queue. Calculated as Material::priority + priority

----

.. _api_MaterialInstance_e42f1c5b:

 uint32_t **MaterialInstance::instanceCount** () const

Returns the number of GPU instances to be rendered.

**See also** setInstanceCount().

----

.. _api_MaterialInstance_b675389e:

 uint32_t **MaterialInstance::instanceSize** () const

Returns a size of data for instances.

----

.. _api_MaterialInstance_84f2cbd0:

 :ref:`Material<api_Material>` * **MaterialInstance::material** () const

Getter for the base material associated with the instance.

----

.. _api_MaterialInstance_49b27d01:

 void **MaterialInstance::overrideTexture** (int32_t  *binding*, :ref:`Texture<api_Texture>` * *texture*)

Overrides the *texture* for the specified shader *binding* point.

----

.. _api_MaterialInstance_124bc9d3:

 int32_t **MaterialInstance::priority** () const

Returns the instance priority.

**See also** setPriority().

----

.. _api_MaterialInstance_826045b9:

 ByteArray **MaterialInstance::rawUniformBuffer** ()

Returns a reference to CPU part of uniform buffer. Developer can modify it for their needs.

----

.. _api_MaterialInstance_f59ebc0d:

 void **MaterialInstance::setBool** (:ref:`TString<api_TString>` & *name*, bool * *value*, int32_t  *count* = 1)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_b5724013:

 void **MaterialInstance::setBufferValue** (:ref:`TString<api_TString>` & *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_MaterialInstance_e54fb792:

 void **MaterialInstance::setFloat** (:ref:`TString<api_TString>` & *name*, float * *value*, int32_t  *count* = 1)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_7d13e52c:

 void **MaterialInstance::setInstanceBuffer** (ByteArray * *buffer*)

Sets instances buffer.

----

.. _api_MaterialInstance_0bd93fa8:

 void **MaterialInstance::setInstanceCount** (uint32_t  *number*)

Sets the *number* of GPU instances to be rendered.

**See also** instanceCount().

----

.. _api_MaterialInstance_c76b54a1:

 void **MaterialInstance::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t * *value*, int32_t  *count* = 1)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_178569a0:

 void **MaterialInstance::setMatrix4** (:ref:`TString<api_TString>` & *name*, :ref:`Matrix4<api_Matrix4>` * *value*, int32_t  *count* = 1)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_cb1874ed:

 void **MaterialInstance::setPriority** (int32_t  *priority*)

Sets the instance priority.

**See also** priority().

----

.. _api_MaterialInstance_e1953d02:

 void **MaterialInstance::setSkinSize** (uint32_t  *size*)

Sets the skinned mesh bones buffer size. This buffer must be recorded to the end of instance data structure (after all uniforms).

----

.. _api_MaterialInstance_34795dfc:

 void **MaterialInstance::setSurfaceType** (uint16_t  *type*)

Sets the surface *type* associated with the material instance.

**See also** surfaceType().

----

.. _api_MaterialInstance_e05b629f:

 void **MaterialInstance::setTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified name.

**See also** texture().

----

.. _api_MaterialInstance_3fce8795:

 void **MaterialInstance::setTransform** (:ref:`Transform<api_Transform>` * *transform*)

Sets the *transform* component to track it.

----

.. _api_MaterialInstance_0bd8769c:

 void **MaterialInstance::setTransform** (:ref:`Matrix4<api_Matrix4>` & *transform*)

Sets the *transform* matrix.

----

.. _api_MaterialInstance_f069b48a:

 void **MaterialInstance::setVector2** (:ref:`TString<api_TString>` & *name*, :ref:`Vector2<api_Vector2>` * *value*, int32_t  *count* = 1)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_eca61fb2:

 void **MaterialInstance::setVector3** (:ref:`TString<api_TString>` & *name*, :ref:`Vector3<api_Vector3>` * *value*, int32_t  *count* = 1)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_52b6a0ec:

 void **MaterialInstance::setVector4** (:ref:`TString<api_TString>` & *name*, :ref:`Vector4<api_Vector4>` * *value*, int32_t  *count* = 1)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_92074a5f:

 uint16_t **MaterialInstance::surfaceType** () const

Gets the surface type associated with the material instance.

**See also** setSurfaceType().

----

.. _api_MaterialInstance_8921f7be:

 :ref:`Texture<api_Texture>` * **MaterialInstance::texture** (:ref:`CommandBuffer<api_CommandBuffer>` & *buffer*, int32_t  *binding*)

Getter for the overridden texture associated with a specific parameter *binding* point.

The command *buffer* used for texture resolution and resource access.

**See also** setTexture().


