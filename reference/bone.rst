.. _api_Bone:

Bone
====

Inherited: None

.. _api_Bone_description:

Description
-----------



.. _api_Bone_public:

Public Methods
--------------

+-------------------------------------+-----------------------------------------------------------------+
|         :ref:`TString<api_TString>` | :ref:`name<api_Bone_ed2374c9>` () const                         |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`position<api_Bone_e849b320>` () const                     |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`rotation<api_Bone_a73ce10d>` () const                     |
+-------------------------------------+-----------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`scale<api_Bone_5ed013bc>` () const                        |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setName<api_Bone_593c0db7>` (const TString & name)        |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setPosition<api_Bone_c85394fe>` (const Vector3  position) |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setRotation<api_Bone_f15983c2>` (const Vector3  rotation) |
+-------------------------------------+-----------------------------------------------------------------+
|                                void | :ref:`setScale<api_Bone_247bd9c0>` (const Vector3  scale)       |
+-------------------------------------+-----------------------------------------------------------------+
|                                bool | :ref:`operator==<api_Bone_25a06df9>` (const Bone & bone) const  |
+-------------------------------------+-----------------------------------------------------------------+



.. _api_Bone_static:

Static Methods
--------------

None

.. _api_Bone_methods:

Methods Description
-------------------

.. _api_Bone_ed2374c9:

 :ref:`TString<api_TString>`  **Bone::name** () const

Returns the name of the bone.

**See also** setName().

----

.. _api_Bone_e849b320:

const :ref:`Vector3<api_Vector3>` & **Bone::position** () const

Gets the position of the bone.

**See also** setPosition().

----

.. _api_Bone_a73ce10d:

const :ref:`Vector3<api_Vector3>` & **Bone::rotation** () const

Gets the rotation of the bone.

**See also** setRotation().

----

.. _api_Bone_5ed013bc:

const :ref:`Vector3<api_Vector3>` & **Bone::scale** () const

Gets the scale of the bone.

**See also** setScale().

----

.. _api_Bone_593c0db7:

 void **Bone::setName** (:ref:`TString<api_TString>` & *name*)

Sets the *name* of the bone.

**See also** *name*().

----

.. _api_Bone_c85394fe:

 void **Bone::setPosition** (:ref:`Vector3<api_Vector3>`  *position*)

Sets the *position* of the bone.

**See also** *position*().

----

.. _api_Bone_f15983c2:

 void **Bone::setRotation** (:ref:`Vector3<api_Vector3>`  *rotation*)

Sets the *rotation* of the bone.

**See also** *rotation*().

----

.. _api_Bone_247bd9c0:

 void **Bone::setScale** (:ref:`Vector3<api_Vector3>`  *scale*)

Sets the *scale* of the bone.

**See also** *scale*().

----

.. _api_Bone_25a06df9:

 bool **Bone::operator==** (:ref:`Bone<api_Bone>` & *bone*) const

Overloaded equality operator for comparing two *bone* objects. Returns true if the *bone*s are equal, false otherwise.


