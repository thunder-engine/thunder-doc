.. _api_Pose:

Pose
====

Inherited: None

.. _api_Pose_description:

Description
-----------



.. _api_Pose_public:

Public Methods
--------------

+-------------------------------+-------------------------------------------------------+
|                          void | :ref:`addBone<api_Pose_6fb21e35>` (const Bone & bone) |
+-------------------------------+-------------------------------------------------------+
| const :ref:`Bone<api_Bone>` * | :ref:`bone<api_Pose_fbc1a307>` (int  index) const     |
+-------------------------------+-------------------------------------------------------+
|                           int | :ref:`boneCount<api_Pose_567d8ba2>` () const          |
+-------------------------------+-------------------------------------------------------+
|                          void | :ref:`clear<api_Pose_7095f8c2>` ()                    |
+-------------------------------+-------------------------------------------------------+



.. _api_Pose_static:

Static Methods
--------------

None

.. _api_Pose_methods:

Methods Description
-------------------

.. _api_Pose_6fb21e35:

 void **Pose::addBone** (:ref:`Bone<api_Bone>` & *bone*)

Adds a *bone* to the pose.

----

.. _api_Pose_fbc1a307:

const :ref:`Bone<api_Bone>` * **Pose::bone** (int  *index*) const

Returns a bone with index.


**Note:** Returns nullptr in case no such bone.


----

.. _api_Pose_567d8ba2:

 int **Pose::boneCount** () const

Returns the count of bones for the current pose which was affected.

----

.. _api_Pose_7095f8c2:

 void **Pose::clear** ()

Removes all bones from pose.


