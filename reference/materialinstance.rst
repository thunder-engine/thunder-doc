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
|                          int32_t | :ref:`finalPriority<api_MaterialInstance_3e50819b>` () const                                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceCount<api_MaterialInstance_730942ea>` () const                                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint32_t | :ref:`instanceSize<api_MaterialInstance_23ecf014>` () const                                                        |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_MaterialInstance_f5826d7e>` () const                                                            |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`overrideTexture<api_MaterialInstance_e31fd954>` (int32_t  binding, Texture * texture)                        |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                          int32_t | :ref:`priority<api_MaterialInstance_27ef8495>` () const                                                            |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                        ByteArray | :ref:`rawUniformBuffer<api_MaterialInstance_79125a6b>` ()                                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBool<api_MaterialInstance_f5e2ac64>` (const TString & name, const bool * value, int32_t  count = 1)       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setBufferValue<api_MaterialInstance_63ad954e>` (const TString & name, const void * value)                    |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setFloat<api_MaterialInstance_d40ef36b>` (const TString & name, const float * value, int32_t  count = 1)     |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceBuffer<api_MaterialInstance_3a7416df>` (ByteArray * buffer)                                       |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInstanceCount<api_MaterialInstance_fa21de80>` (uint32_t  number)                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setInteger<api_MaterialInstance_64f28cb3>` (const TString & name, const int32_t * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setMatrix4<api_MaterialInstance_25b93d4e>` (const TString & name, const Matrix4 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setPriority<api_MaterialInstance_8049cf36>` (int32_t  priority)                                              |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSkinSize<api_MaterialInstance_7b54109c>` (uint32_t  size)                                                 |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setSurfaceType<api_MaterialInstance_bf401e72>` (uint16_t  type)                                              |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTexture<api_MaterialInstance_402e1fd3>` (const TString & name, Texture * texture)                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTransform<api_MaterialInstance_a652f97e>` (Transform * transform)                                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setTransform<api_MaterialInstance_f305c841>` (const Matrix4 & transform)                                     |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector2<api_MaterialInstance_7de036bc>` (const TString & name, const Vector2 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector3<api_MaterialInstance_360894c2>` (const TString & name, const Vector3 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setVector4<api_MaterialInstance_216349bf>` (const TString & name, const Vector4 * value, int32_t  count = 1) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                         uint16_t | :ref:`surfaceType<api_MaterialInstance_3057b92e>` () const                                                         |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+
|    :ref:`Texture<api_Texture>` * | :ref:`texture<api_MaterialInstance_6f927a5c>` (CommandBuffer & buffer, int32_t  binding)                           |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------+



.. _api_MaterialInstance_static:

Static Methods
--------------

None

.. _api_MaterialInstance_methods:

Methods Description
-------------------

.. _api_MaterialInstance_3e50819b:

 int32_t **MaterialInstance::finalPriority** () const

Returns the final material instance priority used for sorting of rendering queue. Calculated as Material::priority + priority

----

.. _api_MaterialInstance_730942ea:

 uint32_t **MaterialInstance::instanceCount** () const

Returns the number of GPU instances to be rendered.

**See also** setInstanceCount().

----

.. _api_MaterialInstance_23ecf014:

 uint32_t **MaterialInstance::instanceSize** () const

Returns a size of data for instances.

----

.. _api_MaterialInstance_f5826d7e:

 :ref:`Material<api_Material>` * **MaterialInstance::material** () const

Getter for the base material associated with the instance.

----

.. _api_MaterialInstance_e31fd954:

 void **MaterialInstance::overrideTexture** (int32_t  *binding*, :ref:`Texture<api_Texture>` * *texture*)

Overrides the *texture* for the specified shader *binding* point.

----

.. _api_MaterialInstance_27ef8495:

 int32_t **MaterialInstance::priority** () const

Returns the instance priority.

**See also** setPriority().

----

.. _api_MaterialInstance_79125a6b:

 ByteArray **MaterialInstance::rawUniformBuffer** ()

Returns a reference to CPU part of uniform buffer. Developer can modify it for their needs.

----

.. _api_MaterialInstance_f5e2ac64:

 void **MaterialInstance::setBool** (:ref:`TString<api_TString>` & *name*, bool * *value*, int32_t  *count* = 1)

Sets a boolean parameter with optional array support. Parameter *name* specifies a *name* of the boolean parameter. Parameter *value* pointer to the boolean *value* or array of boolean values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_63ad954e:

 void **MaterialInstance::setBufferValue** (:ref:`TString<api_TString>` & *name*, void * *value*)

Sets the *value* of a parameter with specified *name* in the uniform buffer.

----

.. _api_MaterialInstance_d40ef36b:

 void **MaterialInstance::setFloat** (:ref:`TString<api_TString>` & *name*, float * *value*, int32_t  *count* = 1)

Sets a float parameter with optional array support. Parameter *name* specifies a *name* of the float parameter. Parameter *value* pointer to the float *value* or array of float values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_3a7416df:

 void **MaterialInstance::setInstanceBuffer** (ByteArray * *buffer*)

Sets instances buffer.

----

.. _api_MaterialInstance_fa21de80:

 void **MaterialInstance::setInstanceCount** (uint32_t  *number*)

Sets the *number* of GPU instances to be rendered.

**See also** instanceCount().

----

.. _api_MaterialInstance_64f28cb3:

 void **MaterialInstance::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t * *value*, int32_t  *count* = 1)

Sets a integer parameter with optional array support. Parameter *name* specifies a *name* of the integer parameter. Parameter *value* pointer to the integer *value* or array of integer values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_25b93d4e:

 void **MaterialInstance::setMatrix4** (:ref:`TString<api_TString>` & *name*, :ref:`Matrix4<api_Matrix4>` * *value*, int32_t  *count* = 1)

Sets a Matrix4 parameter with optional array support. Parameter *name* specifies a *name* of the Matrix4 parameter. Parameter *value* pointer to the Matrix4 *value* or array of Matrix4 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_8049cf36:

 void **MaterialInstance::setPriority** (int32_t  *priority*)

Sets the instance priority.

**See also** priority().

----

.. _api_MaterialInstance_7b54109c:

 void **MaterialInstance::setSkinSize** (uint32_t  *size*)

Sets the skinned mesh bones buffer size. This buffer must be recorded to the end of instance data structure (after all uniforms).

----

.. _api_MaterialInstance_bf401e72:

 void **MaterialInstance::setSurfaceType** (uint16_t  *type*)

Sets the surface *type* associated with the material instance.

**See also** surfaceType().

----

.. _api_MaterialInstance_402e1fd3:

 void **MaterialInstance::setTexture** (:ref:`TString<api_TString>` & *name*, :ref:`Texture<api_Texture>` * *texture*)

Sets a *texture* parameter with specified name.

**See also** texture().

----

.. _api_MaterialInstance_a652f97e:

 void **MaterialInstance::setTransform** (:ref:`Transform<api_Transform>` * *transform*)

Sets the *transform* component to track it.

----

.. _api_MaterialInstance_f305c841:

 void **MaterialInstance::setTransform** (:ref:`Matrix4<api_Matrix4>` & *transform*)

Sets the *transform* matrix.

----

.. _api_MaterialInstance_7de036bc:

 void **MaterialInstance::setVector2** (:ref:`TString<api_TString>` & *name*, :ref:`Vector2<api_Vector2>` * *value*, int32_t  *count* = 1)

Sets a Vector2 parameter with optional array support. Parameter *name* specifies a *name* of the Vector2 parameter. Parameter *value* pointer to the Vector2 *value* or array of Vector2 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_360894c2:

 void **MaterialInstance::setVector3** (:ref:`TString<api_TString>` & *name*, :ref:`Vector3<api_Vector3>` * *value*, int32_t  *count* = 1)

Sets a Vector3 parameter with optional array support. Parameter *name* specifies a *name* of the Vector3 parameter. Parameter *value* pointer to the Vector3 *value* or array of Vector3 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_216349bf:

 void **MaterialInstance::setVector4** (:ref:`TString<api_TString>` & *name*, :ref:`Vector4<api_Vector4>` * *value*, int32_t  *count* = 1)

Sets a Vector4 parameter with optional array support. Parameter *name* specifies a *name* of the Vector4 parameter. Parameter *value* pointer to the Vector4 *value* or array of Vector4 values. Parameter *count* a number of elements in the array.

----

.. _api_MaterialInstance_3057b92e:

 uint16_t **MaterialInstance::surfaceType** () const

Gets the surface type associated with the material instance.

**See also** setSurfaceType().

----

.. _api_MaterialInstance_6f927a5c:

 :ref:`Texture<api_Texture>` * **MaterialInstance::texture** (:ref:`CommandBuffer<api_CommandBuffer>` & *buffer*, int32_t  *binding*)

Getter for the overridden texture associated with a specific parameter *binding* point.

The command *buffer* used for texture resolution and resource access.

**See also** setTexture().


