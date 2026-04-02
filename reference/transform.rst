.. _api_Transform:

Transform
=========

Inherited: None

.. _api_Transform_description:

Description
-----------

Every Actor in a Scene has a Transform. It's used to store and manipulate the position, rotation and scale of the object. Every Transform can have a parent, which allows you to apply position, rotation and scale hierarchically.



.. _api_Transform_public:

Public Methods
--------------

+-------------------------------------+---------------------------------------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`localTransform<api_Transform_8352140b>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Transform<api_Transform>` * | :ref:`parentTransform<api_Transform_b15279ed>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`position<api_Transform_e0345a91>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`quaternion<api_Transform_23ac5eb7>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`rotation<api_Transform_89d7e3ac>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`scale<api_Transform_873cd625>` () const                                                           |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParent<api_Transform_b06d8c2e>` (Object * parent, int32_t  position = -1, bool  force = false) |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParentTransform<api_Transform_92a1bc65>` (Transform * parent, bool  force = false)             |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Transform_59c3a8d2>` (const Vector3 & position)                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setQuaternion<api_Transform_0f46de7c>` (const Quaternion & quaternion)                            |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Transform_cf10b752>` (const Vector3 & angles)                                     |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setScale<api_Transform_7f08b14c>` (const Vector3 & scale)                                         |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldPosition<api_Transform_e3169cad>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`worldQuaternion<api_Transform_8ae0cd75>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldRotation<api_Transform_b1758632>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldScale<api_Transform_c97510e6>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`worldTransform<api_Transform_27edc938>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+



.. _api_Transform_static:

Static Methods
--------------

None

.. _api_Transform_methods:

Methods Description
-------------------

.. _api_Transform_8352140b:

const :ref:`Matrix4<api_Matrix4>` & **Transform::localTransform** () const

Returns current transform matrix in local space.

----

.. _api_Transform_b15279ed:

 :ref:`Transform<api_Transform>` * **Transform::parentTransform** () const

Returns parent of the transform.

**See also** setParentTransform().

----

.. _api_Transform_e0345a91:

 :ref:`Vector3<api_Vector3>`  **Transform::position** () const

Returns current position of the Transform in local space.

**See also** setPosition().

----

.. _api_Transform_23ac5eb7:

 :ref:`Quaternion<api_Quaternion>`  **Transform::quaternion** () const

Returns current rotation of the Transform in local space as Quaternion.

**See also** setQuaternion().

----

.. _api_Transform_89d7e3ac:

 :ref:`Vector3<api_Vector3>`  **Transform::rotation** () const

Returns current rotation of the Transform in local space as Euler angles in degrees.

**See also** setRotation().

----

.. _api_Transform_873cd625:

 :ref:`Vector3<api_Vector3>`  **Transform::scale** () const

Returns current scale of the Transform in local space.

**See also** setScale().

----

.. _api_Transform_b06d8c2e:

 void **Transform::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Reimplements: Object::setParent(Object *parent, int32_t position, bool force).

Makes the Transform a child of *parent* at given position.


**Note:** Please ignore the *force* flag it will be provided by the default.


----

.. _api_Transform_92a1bc65:

 void **Transform::setParentTransform** (:ref:`Transform<api_Transform>` * *parent*, bool  *force* = false)

Changing the *parent* will modify the parent-relative position, scale and rotation but keep the world space position, rotation and scale the same. In case of *force* flag provided as true, no recalculations of transform happen.

**See also** parentTransform().

----

.. _api_Transform_59c3a8d2:

 void **Transform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Changes *position* of the Transform in local space.

**See also** position().

----

.. _api_Transform_0f46de7c:

 void **Transform::setQuaternion** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Changes the rotation *quaternion* of the Transform in local space by provided Quaternion.

**See also** quaternion().

----

.. _api_Transform_cf10b752:

 void **Transform::setRotation** (:ref:`Vector3<api_Vector3>` & *angles*)

Changes the rotation of the Transform in local space by provided Euler *angles* in degrees.

**See also** rotation().

----

.. _api_Transform_7f08b14c:

 void **Transform::setScale** (:ref:`Vector3<api_Vector3>` & *scale*)

Changes the *scale* of the Transform in local space.

**See also** scale().

----

.. _api_Transform_e3169cad:

 :ref:`Vector3<api_Vector3>`  **Transform::worldPosition** () const

Returns current position of the transform in world space.

----

.. _api_Transform_8ae0cd75:

 :ref:`Quaternion<api_Quaternion>`  **Transform::worldQuaternion** () const

Returns current rotation of the transform in world space as Quaternion.

----

.. _api_Transform_b1758632:

 :ref:`Vector3<api_Vector3>`  **Transform::worldRotation** () const

Returns current rotation of the transform in world space as Euler angles in degrees.

----

.. _api_Transform_c97510e6:

 :ref:`Vector3<api_Vector3>`  **Transform::worldScale** () const

Returns current scale of the transform in world space.

----

.. _api_Transform_27edc938:

const :ref:`Matrix4<api_Matrix4>` & **Transform::worldTransform** () const

Returns current transform matrix in world space.


