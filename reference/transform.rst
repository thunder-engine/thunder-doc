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
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`localTransform<api_Transform_23d6bf04>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Transform<api_Transform>` * | :ref:`parentTransform<api_Transform_30f5ed18>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`position<api_Transform_fb12e5da>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`quaternion<api_Transform_ef13850d>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`rotation<api_Transform_ace6497d>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`scale<api_Transform_724d5a9f>` () const                                                           |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParent<api_Transform_fa29b56c>` (Object * parent, int32_t  position = -1, bool  force = false) |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParentTransform<api_Transform_9a14e38f>` (Transform * parent, bool  force = false)             |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Transform_75e8bc0a>` (const Vector3 & position)                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setQuaternion<api_Transform_376a5c4b>` (const Quaternion & quaternion)                            |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Transform_124ab0d3>` (const Vector3 & angles)                                     |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setScale<api_Transform_5e3910bd>` (const Vector3 & scale)                                         |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldPosition<api_Transform_d3bc7e6f>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`worldQuaternion<api_Transform_0b367f89>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldRotation<api_Transform_7a93e24c>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldScale<api_Transform_10d5fa3b>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`worldTransform<api_Transform_c541923a>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+



.. _api_Transform_static:

Static Methods
--------------

None

.. _api_Transform_methods:

Methods Description
-------------------

.. _api_Transform_23d6bf04:

const :ref:`Matrix4<api_Matrix4>` & **Transform::localTransform** () const

Returns current transform matrix in local space.

----

.. _api_Transform_30f5ed18:

 :ref:`Transform<api_Transform>` * **Transform::parentTransform** () const

Returns parent of the transform.

**See also** setParentTransform().

----

.. _api_Transform_fb12e5da:

 :ref:`Vector3<api_Vector3>`  **Transform::position** () const

Returns current position of the Transform in local space.

**See also** setPosition().

----

.. _api_Transform_ef13850d:

 :ref:`Quaternion<api_Quaternion>`  **Transform::quaternion** () const

Returns current rotation of the Transform in local space as Quaternion.

**See also** setQuaternion().

----

.. _api_Transform_ace6497d:

 :ref:`Vector3<api_Vector3>`  **Transform::rotation** () const

Returns current rotation of the Transform in local space as Euler angles in degrees.

**See also** setRotation().

----

.. _api_Transform_724d5a9f:

 :ref:`Vector3<api_Vector3>`  **Transform::scale** () const

Returns current scale of the Transform in local space.

**See also** setScale().

----

.. _api_Transform_fa29b56c:

 void **Transform::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Reimplements: Object::setParent(Object *parent, int32_t position, bool force).

Makes the Transform a child of *parent* at given position.


**Note:** Please ignore the *force* flag it will be provided by the default.


----

.. _api_Transform_9a14e38f:

 void **Transform::setParentTransform** (:ref:`Transform<api_Transform>` * *parent*, bool  *force* = false)

Changing the *parent* will modify the parent-relative position, scale and rotation but keep the world space position, rotation and scale the same. In case of *force* flag provided as true, no recalculations of transform happen.

**See also** parentTransform().

----

.. _api_Transform_75e8bc0a:

 void **Transform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Changes *position* of the Transform in local space.

**See also** position().

----

.. _api_Transform_376a5c4b:

 void **Transform::setQuaternion** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Changes the rotation *quaternion* of the Transform in local space by provided Quaternion.

**See also** quaternion().

----

.. _api_Transform_124ab0d3:

 void **Transform::setRotation** (:ref:`Vector3<api_Vector3>` & *angles*)

Changes the rotation of the Transform in local space by provided Euler *angles* in degrees.

**See also** rotation().

----

.. _api_Transform_5e3910bd:

 void **Transform::setScale** (:ref:`Vector3<api_Vector3>` & *scale*)

Changes the *scale* of the Transform in local space.

**See also** scale().

----

.. _api_Transform_d3bc7e6f:

 :ref:`Vector3<api_Vector3>`  **Transform::worldPosition** () const

Returns current position of the transform in world space.

----

.. _api_Transform_0b367f89:

 :ref:`Quaternion<api_Quaternion>`  **Transform::worldQuaternion** () const

Returns current rotation of the transform in world space as Quaternion.

----

.. _api_Transform_7a93e24c:

 :ref:`Vector3<api_Vector3>`  **Transform::worldRotation** () const

Returns current rotation of the transform in world space as Euler angles in degrees.

----

.. _api_Transform_10d5fa3b:

 :ref:`Vector3<api_Vector3>`  **Transform::worldScale** () const

Returns current scale of the transform in world space.

----

.. _api_Transform_c541923a:

const :ref:`Matrix4<api_Matrix4>` & **Transform::worldTransform** () const

Returns current transform matrix in world space.


