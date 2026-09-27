.. _api_Transform:

Transform
=========

Inherited: :ref:`Component<api_Component>`

.. _api_Transform_description:

Description
-----------

Every Actor in a Scene has a Transform. It's used to store and manipulate the position, rotation and scale of the object. Every Transform can have a parent, which allows you to apply position, rotation and scale hierarchically.



.. _api_Transform_public:

Public Methods
--------------

+-------------------------------------+---------------------------------------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`localTransform<api_Transform_13bcf589>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Transform<api_Transform>` * | :ref:`parentTransform<api_Transform_28cde5ba>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`position<api_Transform_feba9c21>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`quaternion<api_Transform_59f83d0c>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`rotation<api_Transform_a4d6c981>` () const                                                        |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`scale<api_Transform_8f2de5ac>` () const                                                           |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParent<api_Transform_3bae7291>` (Object * parent, int32_t  position = -1, bool  force = false) |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setParentTransform<api_Transform_10b6f728>` (Transform * parent, bool  force = false)             |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Transform_02da7c56>` (const Vector3 & position)                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setQuaternion<api_Transform_1bfc4572>` (const Quaternion & quaternion)                            |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Transform_0efdb63c>` (const Vector3 & angles)                                     |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setScale<api_Transform_bd84e269>` (const Vector3 & scale)                                         |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldPosition<api_Transform_9fca46be>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|   :ref:`Quaternion<api_Quaternion>` | :ref:`worldQuaternion<api_Transform_ca17952b>` () const                                                 |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldRotation<api_Transform_bd1e2648>` () const                                                   |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
|         :ref:`Vector3<api_Vector3>` | :ref:`worldScale<api_Transform_e84309b6>` () const                                                      |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`worldTransform<api_Transform_e8c95da3>` () const                                                  |
+-------------------------------------+---------------------------------------------------------------------------------------------------------+



.. _api_Transform_static:

Static Methods
--------------

None

.. _api_Transform_methods:

Methods Description
-------------------

.. _api_Transform_13bcf589:

const :ref:`Matrix4<api_Matrix4>` & **Transform::localTransform** () const

Returns current transform matrix in local space.

----

.. _api_Transform_28cde5ba:

 :ref:`Transform<api_Transform>` * **Transform::parentTransform** () const

Returns parent of the transform.

**See also** setParentTransform().

----

.. _api_Transform_feba9c21:

 :ref:`Vector3<api_Vector3>`  **Transform::position** () const

Returns current position of the Transform in local space.

**See also** setPosition().

----

.. _api_Transform_59f83d0c:

 :ref:`Quaternion<api_Quaternion>`  **Transform::quaternion** () const

Returns current rotation of the Transform in local space as Quaternion.

**See also** setQuaternion().

----

.. _api_Transform_a4d6c981:

 :ref:`Vector3<api_Vector3>`  **Transform::rotation** () const

Returns current rotation of the Transform in local space as Euler angles in degrees.

**See also** setRotation().

----

.. _api_Transform_8f2de5ac:

 :ref:`Vector3<api_Vector3>`  **Transform::scale** () const

Returns current scale of the Transform in local space.

**See also** setScale().

----

.. _api_Transform_3bae7291:

 void **Transform::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Reimplements: Object::setParent(Object *parent, int32_t position, bool force).

Makes the Transform a child of *parent* at given position.


**Note:** Please ignore the *force* flag it will be provided by the default.


----

.. _api_Transform_10b6f728:

 void **Transform::setParentTransform** (:ref:`Transform<api_Transform>` * *parent*, bool  *force* = false)

Changing the *parent* will modify the parent-relative position, scale and rotation but keep the world space position, rotation and scale the same. In case of *force* flag provided as true, no recalculations of transform happen.

**See also** parentTransform().

----

.. _api_Transform_02da7c56:

 void **Transform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Changes *position* of the Transform in local space.

**See also** position().

----

.. _api_Transform_1bfc4572:

 void **Transform::setQuaternion** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Changes the rotation *quaternion* of the Transform in local space by provided Quaternion.

**See also** quaternion().

----

.. _api_Transform_0efdb63c:

 void **Transform::setRotation** (:ref:`Vector3<api_Vector3>` & *angles*)

Changes the rotation of the Transform in local space by provided Euler *angles* in degrees.

**See also** rotation().

----

.. _api_Transform_bd84e269:

 void **Transform::setScale** (:ref:`Vector3<api_Vector3>` & *scale*)

Changes the *scale* of the Transform in local space.

**See also** scale().

----

.. _api_Transform_9fca46be:

 :ref:`Vector3<api_Vector3>`  **Transform::worldPosition** () const

Returns current position of the transform in world space.

----

.. _api_Transform_ca17952b:

 :ref:`Quaternion<api_Quaternion>`  **Transform::worldQuaternion** () const

Returns current rotation of the transform in world space as Quaternion.

----

.. _api_Transform_bd1e2648:

 :ref:`Vector3<api_Vector3>`  **Transform::worldRotation** () const

Returns current rotation of the transform in world space as Euler angles in degrees.

----

.. _api_Transform_e84309b6:

 :ref:`Vector3<api_Vector3>`  **Transform::worldScale** () const

Returns current scale of the transform in world space.

----

.. _api_Transform_e8c95da3:

const :ref:`Matrix4<api_Matrix4>` & **Transform::worldTransform** () const

Returns current transform matrix in world space.


